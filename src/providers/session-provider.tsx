import type { ReactNode } from "react";
import { useEffect } from "react";
import { useIsSessionLoaded, useSetSession } from "@/store/session";
import GlobalLoader from "@/components/global-loader";
import supabase from "@/lib/supabase";

export default function SessionProvider({ children }: { children: ReactNode }) {
  const setSession = useSetSession();
  const isSessionLoaded = useIsSessionLoaded();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  if (!isSessionLoaded) return <GlobalLoader />;
  return children;
}
