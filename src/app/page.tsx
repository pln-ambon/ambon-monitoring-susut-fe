import Nav from "@/components/ui/nav";
import Dashboard from "@/components/pages/dashboard";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <Dashboard />
      </main>
    </>
  );
}
