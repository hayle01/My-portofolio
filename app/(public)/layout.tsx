import { Navbar } from "@/components/Navbar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-indigo-900" />
      <div className="fixed inset-0 -z-10 bg-red-900/30 opacity-100 brightness-100 contrast-150 mix-blend-overlay" />
      <Navbar />
      <main className="min-h-screen pt-32">
        {children}
      </main>
    </>
  );
}