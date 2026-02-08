import RootRoute from "@/root-route";
import SessionProvider from "@/providers/session-provider";

export default function App() {
  return (
    <SessionProvider>
      <RootRoute />
    </SessionProvider>
  );
}
