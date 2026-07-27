import ProductCard from "./ProductCard";

const products = [
  {
    price: "$26.000",
    title: "Blanco Escarchado",
    image: "/paredes/blanco_escarchado.webp",
  },
  {
    price: "$26.000",
    title: "Blanco Venecia",
    image: "/paredes/blanco_venecia.webp",
  },
  {
    price: "$26.000",
    title: "Blanco",
    image: "/paredes/blanco.webp",
  },
  {
    price: "$26.000",
    title: "Caoba",
    image: "/paredes/caoba.webp",
  },
  {
    price: "$26.000",
    title: "Carrara Negro",
    image: "/paredes/carrara_negro.webp",
  },
  {
    price: "$26.000",
    title: "Chocomix",
    image: "/paredes/chocomix.webp",
  },
  {
    price: "$26.000",
    title: "Cobre Rosa",
    image: "/paredes/cobre_rosa.webp",
  },
  {
    price: "$26.000",
    title: "Dorado",
    image: "/paredes/dorado.webp",
  },
  {
    price: "$26.000",
    title: "Gris Oscuro",
    image: "/paredes/gris_oscuro.webp",
  },
  {
    price: "$26.000",
    title: "Gris Perla",
    image: "/paredes/gris_perla.webp",
  },
  {
    price: "$26.000",
    title: "Madera Gris",
    image: "/paredes/madera_gris.webp",
  },
  {
    price: "$26.000",
    title: "Metalizado",
    image: "/paredes/metalizado.webp",
  },
  {
    price: "$26.000",
    title: "Negro",
    image: "/paredes/negro.webp",
  },
  {
    price: "$26.000",
    title: "Nogal Fondo Negro",
    image: "/paredes/nogal_fondo_negro.webp",
  },
  {
    price: "$26.000",
    title: "Roble Claro",
    image: "/paredes/roble_claro.webp",
  },
  {
    price: "$26.000",
    title: "rosado",
    image: "/paredes/rosado.webp",
  },
  {
    price: "$26.000",
    title: "Traver Cafe",
    image: "/paredes/traver_cafe020.webp",
  },
  {
    price: "$26.000",
    title: "Vera Madera",
    image: "/paredes/vera_madera.webp",
  },
  {
    price: "$26.000",
    title: "Veta Madera",
    image: "/paredes/veta_madera.webp",
  },
];

export default function ProductGridParedes() {
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
