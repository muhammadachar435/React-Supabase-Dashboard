import { createClient } from "@supabase/supabase-js";

// Supabase Database URL and API
const url = "https://boxtjaqqwycebzzdtdof.supabase.co";
const Apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJveHRqYXFxd3ljZWJ6emR0ZG9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1Njg3MTgsImV4cCI6MjA2NzE0NDcxOH0.uplegSouCOaveapNC1h-GhC-mJKx32H-vdoeBwMyZr8";

export const supabase = createClient(url, Apikey);
