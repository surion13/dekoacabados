import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import CatalogHero from "../components/CatalogHero";
import FilterBar from "../components/FilterBar";
import ProductGrid from "../components/ProductGrid";
import TechnicalCTA from "../components/TechnicalCTA";

export default function CatalogoCielo() {
  return (
    <div className="bg-background text-on-background font-body-md">
      <Navbar />
      <main className="pt-24">
        <CatalogHero />
        <FilterBar />
        <ProductGrid />
        <TechnicalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}