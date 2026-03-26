// Layout for the main public-facing pages (Home, Portfolio, Book).
// Wraps children with the shared Navbar and Footer.
// The admin page lives outside this group and won't receive these wrappers.
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-brand-mist">
      <Navbar />
      {/* pt-24 offsets content below the fixed-positioned navbar */}
      <main className="flex-1 pt-24">{children}</main>
      <Footer />
    </div>
  );
}
