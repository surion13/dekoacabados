import ProductCard from "./ProductCard";

const products = [
  { tag: "SPC", price: "$58.900", title: "Arena", image: "/pisos/arena.webp" },
  { tag: "SPC", price: "$58.900", title: "Cafe", image: "/pisos/cafe.webp" },
  { tag: "SPC", price: "$58.900", title: "Gris Blanco", image: "/pisos/gris_blanco.webp" },
  { tag: "SPC", price: "$58.900", title: "Gris Oscuro", image: "/pisos/gris_oscuro.webp" },
  { tag: "SPC", price: "$58.900", title: "Negro", image: "/pisos/negro.webp" },
  { tag: "SPC", price: "$58.900", title: "Nogal", image: "/pisos/nogal.webp" },
  { tag: "SPC", price: "$58.900", title: "Pino", image: "/pisos/pino.webp" },
  { tag: "SPC", price: "$58.900", title: "Roble Gris", image: "/pisos/roble_gris.webp" },
  { tag: "Laminado", price: "$43.900", title: "Roble Mouse", image: "/pisos/roble_mouse.webp" },
  { tag: "Laminado", price: "$43.900", title: "Gris Textura", image: "/pisos/gris_textura.webp" },
  { tag: "Laminado", price: "$43.900", title: "Gris Hielo", image: "/pisos/gris_hielo.webp" },
  { tag: "Laminado", price: "$43.900", title: "Elegance Beach", image: "/pisos/elegance_beach.webp" },
  { tag: "Laminado", price: "$43.900", title: "Cedro Brillo", image: "/pisos/cedro_brillo.webp" },
  { tag: "Laminado", price: "$43.900", title: "Guayacan Brillo", image: "/pisos/guayacan_brillo.webp" },
];

export default function ProductGridPisos() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop mb-32 max-w-max-width mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {products.map((p) => (
          <ProductCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}