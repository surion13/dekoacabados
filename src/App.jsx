import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CatalogoCielo from "./pages/CatalogoCielo";
import CatalogoPisosPage from "./pages/CatalogoPisosPage";
import CatalogoParedesPage from "./pages/CatalogoParedesPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo-cielo" element={<CatalogoCielo />} />
        <Route path="/catalogo-pisos" element={<CatalogoPisosPage />} />
        <Route path="/catalogo-paredes" element={<CatalogoParedesPage />} />
      </Routes>
    </>
  );
}

export default App;
