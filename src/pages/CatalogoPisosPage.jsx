import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import CatalogHeroPisos from "../components/CatalogHeroPisos";
import FilterBar from "../components/FilterBar";
import ProductGridPisos from "../components/ProductGridPisos";
import TechnicalCTA from "../components/TechnicalCTA";

export default function CatalogoPisosPage() {
  return (
    <div className="bg-background text-on-background font-body-md">
      <Navbar />
      <main className="pt-24">
        <CatalogHeroPisos />
        <FilterBar />
        <ProductGridPisos />
        <TechnicalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}