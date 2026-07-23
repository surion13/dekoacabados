import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CatalogoCielo from "./pages/CatalogoCielo";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo-cielo" element={<CatalogoCielo />} />
      </Routes>
    </>
  );
}

export default App;