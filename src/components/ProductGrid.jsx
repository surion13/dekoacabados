import ProductCard from "./ProductCard";

const products = [
  {
    price: "$23.500",
    title: "Blanco Humo",
    image:
      "/cieloraso/blanco_humo.webp",
  },
  {
    price: "$23.500",
    title: "Blanco Mate",
    image:
      "/cieloraso/blanco_mate.webp",
  },
  {
    price: "$23.500",
    title: "Humo Plata",
    image:
      "/cieloraso/humo_plata.webp",
  },
  {
    price: "$23.500",
    title: "Marmol Dorado",
    image:
      "/cieloraso/marmol_dorado.webp",
  },
  {
    price: "$23.500",
    title: "Rombos Oro",
    image:
      "/cieloraso/rombos_oro.webp",
  },

];

export default function ProductGrid() {
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