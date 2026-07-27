import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWhatsAppLink } from "../hooks/Whatsapp";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md border-b border-outline-variant/30 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-max-width mx-auto">
        <Link to="/" className="flex items-center gap-4">
          <img
            alt="Dekoacabados Logo"
            className="h-10 w-auto"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuApGTqIVRaEHdjkoLkP8GvGFWs-FDIMZjrOFqh9QWrqPlcXrDQegrtrrAKzcNB2Uaevp_4KPhc4gHG3RZBti9cHxBohPRXPDgPBdRTQroQcgWkeZTa-CI6VxekZkzCVby8siF_6gSQGXoUSIDwkTkd55b68sCYmnKUxDvy_CdSSm94hiHKkJvbjn5Zw3r5yxBUvuJNLyFnrqDx4sY1vYfv0FOH6_BgFz3M6tNpG7NECd-31WzatmaiCjM4wNftWSehLL7g"
          />
          <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim hidden sm:block">
            Dekoacabados Market
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link
            className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim hover:text-primary transition-colors duration-300"
            to="/catalogo-pisos"
          >
            Pisos
          </Link>
          <Link
            className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim hover:text-primary transition-colors duration-300"
            to="/catalogo-paredes"
          >
            Paredes
          </Link>
          <Link
            className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim hover:text-primary transition-colors duration-300"
            to="/catalogo-cielo"
          >
            Techos
          </Link>
        </div>
        <a
          href={getWhatsAppLink("Hola, quisiera contactarlos.")}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded shadow-sm font-headline-md text-sm font-bold scale-95 active:scale-90 transition-transform inline-block text-center"
        >
          Contactar
        </a>
      </nav>
    </header>
  );
}