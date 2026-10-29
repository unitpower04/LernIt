import { AppProvider } from "@/components/AppContext";
import { Nav } from "@/components/Nav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <Nav />
      <main className="mx-auto w-full max-w-3xl px-4 pb-28 pt-5 md:ml-56 md:w-auto md:max-w-none md:px-8 md:pb-10">
        <div className="mx-auto max-w-3xl">{children}</div>
      </main>
    </AppProvider>
  );
}
