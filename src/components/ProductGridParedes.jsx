import ProductCard from "./ProductCard";

const products = [
  {
    tag: "Paneles 3D PVC",
    price: "$14.000",
    title: "Panel Blanco",
    image: "/paredes/cuadrados.webp",
  },
  {
    tag: "Paneles 3D PVC",
    price: "$14.000",
    title: "Panel Blanco",
    image: "/paredes/comedor.webp",
  },
  {
    tag: "Paneles 3D PVC",
    price: "$14.000",
    title: "Panel Blanco",
    image: "/paredes/sala.webp",
  },
  {
    tag: "Marmol PVC",
    price: "$130.000",
    title: "Blanco",
    image: "/paredes/marmolizada_blanco.webp",
  },
  {
    tag: "Marmol PVC",
    price: "$130.000",
    title: "Dorado",
    image: "/paredes/marmolizada_dorado.webp",
  },
  {
    tag: "Marmol PVC",
    price: "$130.000",
    title: "Negro",
    image: "/paredes/marmolizada_negro.webp",
  },
  {
    tag: "Marmol PVC",
    price: "$130.000",
    title: "Beige",
    image: "/paredes/marmolizada_veige.webp",
  },
  {
    tag: "Adhesivas 3D",
    price: "$13.000",
    title: "Cafe",
    image: "/paredes/adhesivo_cafe.webp",
  },
  {
    tag: "Adhesivas 3D",
    price: "$13.000",
    title: "Blanco",
    image: "/paredes/adhesivo_blanco.webp",
  },
  {
    tag: "Adhesivas 3D",
    price: "$13.000",
    title: "Negra",
    image: "/paredes/adhesivo_negra.webp",
  },
  {
    tag: "WPC",
    price: "$26.000",
    title: "Blanco Escarchado",
    image: "/paredes/blanco_escarchado.webp",
  },
  {
    tag: "WPC",
    price: "$26.000",
    title: "Blanco Venecia",
    image: "/paredes/blanco_venecia.webp",
  },
  {
    tag: "WPC",
    price: "$26.000",
    title: "Blanco",
    image: "/paredes/blanco.webp",
  },
  {
    tag: "WPC",
    price: "$26.000",
    title: "Caoba",
    image: "/paredes/caoba.webp",
  },
  {
    tag: "WPC",
    price: "$26.000",
    title: "Carrara Negro",
    image: "/paredes/carrara_negro.webp",
  },
  {
    tag: "WPC",
    price: "$26.000",
    title: "Chocomix",
    image: "/paredes/chocomix.webp",
  },
  {
    tag: "WPC",
    price: "$26.000",
    title: "Cobre Rosa",
    image: "/paredes/cobre_rosa.webp",
  },
  {
    tag: "WPC",
    price: "$26.000",
    title: "Dorado",
    image: "/paredes/dorado.webp",
  },
  {
    tag: "WPC",
    price: "$26.000",
    title: "Gris Oscuro",
    image: "/paredes/gris_oscuro.webp",
  },
  {
    tag: "WPC",
    price: "$26.000",
    title: "Gris Perla",
    image: "/paredes/gris_perla.webp",
  },
  {
    tag: "WPC",
    price: "$26.000",
    title: "Madera Gris",
    image: "/paredes/madera_gris.webp",
  },
  {
    tag: "WPC",
    price: "$26.000",
    title: "Metalizado",
    image: "/paredes/metalizado.webp",
  },
  {
    tag: "WPC",
    price: "$26.000",
    title: "Negro",
    image: "/paredes/negro.webp",
  },
  {
    tag: "WPC",
    price: "$26.000",
    title: "Nogal Fondo Negro",
    image: "/paredes/nogal_fondo_negro.webp",
  },
  {
    tag: "WPC",
    price: "$26.000",
    title: "Roble Claro",
    image: "/paredes/roble_claro.webp",
  },
  {
    tag: "WPC",
    price: "$26.000",
    title: "rosado",
    image: "/paredes/rosado.webp",
  },
  {
    tag: "WPC",
    price: "$26.000",
    title: "Traver Cafe",
    image: "/paredes/traver_cafe020.webp",
  },
  {
    tag: "WPC",
    price: "$26.000",
    title: "Vera Madera",
    image: "/paredes/vera_madera.webp",
  },
  {
    tag: "WPC",
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
