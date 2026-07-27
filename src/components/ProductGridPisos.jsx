import ProductCard from "./ProductCard";

const products = [
  {
    price: "$58.900",
    title: "Arena 2.00 M2",
    image: "/pisos/arena_2.00_m2.webp",
  },
  {
    price: "$58.900",
    title: "Castaño 2 M2",
    image: "/pisos/castaño_2_m2.webp",
  },
  {
    price: "$58.900",
    title: "Castaño 2.1 M2",
    image: "/pisos/castaño_2.1_M2.webp",
  },
  {
    price: "$58.900",
    title: "Gris Blanco 2.00 M2",
    image: "/pisos/gris_blanco_2.00_m2.webp",
  },
  {
    price: "$58.900",
    title: "Gris Chrome 2 M2",
    image: "/pisos/gris_chrome_2_M2.webp",
  },
  {
    price: "$58.900",
    title: "Gris Chrome 2.1 M2",
    image: "/pisos/gris_chrome_2.1_M2.webp",
  },
  {
    price: "$58.900",
    title: "Gris Claro 2 M2",
    image: "/pisos/gris_claro_2_m2.webp",
  },
  {
    price: "$58.900",
    title: "Gris Claro 2.1 M2",
    image: "/pisos/gris_claro_2.1_M2.webp",
  },
  {
    price: "$58.900",
    title: "Gris Oscuro 2 M2",
    image: "/pisos/gris_oscuro_2_M2.webp",
  },
  {
    price: "$58.900",
    title: "Gris Oscuro 2.1 M2",
    image: "/pisos/gris_oscuro_2.1_M2.webp",
  },
  {
    price: "$58.900",
    title: "Moka 2 M2",
    image: "/pisos/moka_2_m2.webp",
  },
  {
    price: "$58.900",
    title: "Nebraska 2.00 M2",
    image: "/pisos/nebraska_2.00_m2.webp",
  },
  {
    price: "$58.900",
    title: "Nevado 2 M2",
    image: "/pisos/nevado_2_M2.webp",
  },
  {
    price: "$58.900",
    title: "Nevado 2.1 M2",
    image: "/pisos/nevado_2.1_M2.webp",
  },
  {
    price: "$58.900",
    title: "Nogal 2.11 M2",
    image: "/pisos/nogal_2.11_m2.webp",
  },
  {
    price: "$58.900",
    title: "Pino 2.11 M2",
    image: "/pisos/pino_2.11_M2.webp",
  },
  {
    price: "$58.900",
    title: "Roble Gris 2 M2",
    image: "/pisos/roble_gris_2_m2.webp",
  },
  {
    price: "$58.900",
    title: "Tundra 2 M2",
    image: "/pisos/tundra_2_m2.webp",
  },
  {
    price: "$58.900",
    title: "Tundra 2.1 M2",
    image: "/pisos/tundra_2.1_m2.webp",
  },
  {
    price: "$58.900",
    title: "Volcano 2 M2",
    image: "/pisos/volcano_2_m2.webp",
  },
  {
    price: "$58.900",
    title: "Volcano 2.1 M2",
    image: "/pisos/volcano_2.1_M2.webp",
  },
  {
    price: "$58.900",
    title: "Volcano 014 2.00 M2",
    image: "/pisos/volcano_014_2.00_m2.webp",
  },
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
