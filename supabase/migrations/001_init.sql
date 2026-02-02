-- Enable PostGIS extension for geographic support
CREATE EXTENSION IF NOT EXISTS postgis;
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Emotion enum type
CREATE TYPE emotion_type AS ENUM ('happy', 'sad', 'angry', 'calm', 'excited', 'neutral');

-- Checkins table - main data storage
CREATE TABLE IF NOT EXISTS checkins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  emotion emotion_type NOT NULL,
  lat DOUBLE PRECISION NOT NULL,
  lng DOUBLE PRECISION NOT NULL,
  city TEXT,
  country_code TEXT,
  comment TEXT,
  location GEOGRAPHY(POINT, 4326),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create spatial index for geographic queries
CREATE INDEX IF NOT EXISTS idx_checkins_location ON checkins USING GIST (location);
CREATE INDEX IF NOT EXISTS idx_checkins_created_at ON checkins (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_checkins_user_id ON checkins (user_id);
CREATE INDEX IF NOT EXISTS idx_checkins_city ON checkins (city);
CREATE INDEX IF NOT EXISTS idx_checkins_emotion ON checkins (emotion);

-- Auto-generate location from lat/lng
CREATE OR REPLACE FUNCTION set_location_from_coords()
RETURNS TRIGGER AS $$
BEGIN
  NEW.location := ST_SetSRID(ST_Point(NEW.lng, NEW.lat), 4326);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_set_location
BEFORE INSERT OR UPDATE ON checkins
FOR EACH ROW
EXECUTE FUNCTION set_location_from_coords();

-- Hourly emotion statistics table
CREATE TABLE IF NOT EXISTS emotion_stats_hourly (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  hour TIMESTAMP WITH TIME ZONE NOT NULL,
  city TEXT,
  country_code TEXT,
  emotion emotion_type NOT NULL,
  count INTEGER DEFAULT 0,
  avg_lat DOUBLE PRECISION,
  avg_lng DOUBLE PRECISION,
  location GEOGRAPHY(POINT, 4326),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(hour, city, emotion)
);

-- Indexes for hourly stats
CREATE INDEX IF NOT EXISTS idx_emotion_stats_hourly_hour ON emotion_stats_hourly (hour DESC);
CREATE INDEX IF NOT EXISTS idx_emotion_stats_hourly_city ON emotion_stats_hourly (city);
CREATE INDEX IF NOT EXISTS idx_emotion_stats_hourly_emotion ON emotion_stats_hourly (emotion);
CREATE INDEX IF NOT EXISTS idx_emotion_stats_hourly_location ON emotion_stats_hourly USING GIST (location);

-- Function to aggregate hourly statistics
CREATE OR REPLACE FUNCTION aggregate_hourly_stats()
RETURNS void AS $$
BEGIN
  INSERT INTO emotion_stats_hourly (hour, city, emotion, count, avg_lat, avg_lng, location)
  SELECT
    DATE_TRUNC('hour', c.created_at) AS hour,
    COALESCE(c.city, 'Unknown') AS city,
    c.emotion,
    COUNT(*) AS count,
    AVG(c.lat) AS avg_lat,
    AVG(c.lng) AS avg_lng,
    ST_SetSRID(ST_Point(AVG(c.lng), AVG(c.lat)), 4326) AS location
  FROM checkins c
  WHERE c.created_at > NOW() - INTERVAL '1 hour'
  GROUP BY DATE_TRUNC('hour', c.created_at), c.city, c.emotion
  ON CONFLICT (hour, city, emotion) DO UPDATE SET
    count = emotion_stats_hourly.count + EXCLUDED.count,
    avg_lat = (emotion_stats_hourly.avg_lat + EXCLUDED.avg_lat) / 2,
    avg_lng = (emotion_stats_hourly.avg_lng + EXCLUDED.avg_lng) / 2,
    updated_at = NOW();
END;
$$ LANGUAGE plpgsql;

-- Table for user profiles (optional)
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY,
  username TEXT UNIQUE,
  display_name TEXT,
  avatar_url TEXT,
  total_checkins INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_user_profiles_username ON user_profiles (username);

-- RLS Policies
ALTER TABLE checkins ENABLE ROW LEVEL SECURITY;
ALTER TABLE emotion_stats_hourly ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Allow all to read checkins (public data)
CREATE POLICY "Allow public to read checkins" ON checkins
  FOR SELECT
  USING (true);

-- Allow authenticated users to insert their own checkins
CREATE POLICY "Allow users to insert their own checkins" ON checkins
  FOR INSERT
  WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- Allow all to read hourly stats
CREATE POLICY "Allow public to read hourly stats" ON emotion_stats_hourly
  FOR SELECT
  USING (true);

-- Allow all to read user profiles
CREATE POLICY "Allow public to read user profiles" ON user_profiles
  FOR SELECT
  USING (true);

-- Allow users to update their own profiles
CREATE POLICY "Allow users to update their own profile" ON user_profiles
  FOR UPDATE
  USING (auth.uid() = id);
