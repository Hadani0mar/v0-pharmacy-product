import { createBrowserClient } from "@supabase/ssr"

let supabaseInstance: ReturnType<typeof createBrowserClient> | null = null

export function getSupabase() {
  if (!supabaseInstance) {
    supabaseInstance = createBrowserClient(
      "https://zrmxdoxtcpbcthnilxje.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpybXhkb3h0Y3BiY3RobmlseGplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5NzQ0ODcsImV4cCI6MjA3MTU1MDQ4N30.JQGCzqN6R7UMYa0KuLiwGb6COqoXYVhHhpZDbN0TQcM",
    )
  }
  return supabaseInstance
}
