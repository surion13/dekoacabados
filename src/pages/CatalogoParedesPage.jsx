import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import CatalogHeroParedes from "../components/CatalogHeroParedes";
import FilterBar from "../components/FilterBar";
import ProductGridParedes from "../components/ProductGridParedes";
import TechnicalCTA from "../components/TechnicalCTA";

export default function CatalogoParedesPage() {
  return (
    <div className="bg-background text-on-background font-body-md">
      <Navbar />
      <main className="pt-24">
        <CatalogHeroParedes />
        <FilterBar />
        <ProductGridParedes />
        <TechnicalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}