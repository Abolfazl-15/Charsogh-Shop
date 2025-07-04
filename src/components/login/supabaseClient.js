import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ylfcmfrgjdjkuibblspx.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsZmNtZnJnamRqa3VpYmJsc3B4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5NDA0MzEsImV4cCI6MjA2NDUxNjQzMX0.ouAV_7Kd32anA71Q6VeuW26yHkIr-KUHm0M8UsW10gI";

export const supabase = createClient(supabaseUrl, supabaseKey);
