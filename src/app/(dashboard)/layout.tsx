import Nav from "@/components/ui/nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
