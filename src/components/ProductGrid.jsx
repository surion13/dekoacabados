import ProductCard from "./ProductCard";

const products = [
  {
    tag: "Tráfico Pesado",
    price: "$23.500",
    title: "Blanco Humo",
    description:
      "Cielo raso en pvc importado. Resistencia a la humedad. Presentación en láminas de 25 X 7mm y lámina de 30 cms X 9mm. Cotización de materiales de estructura por separado.",
    image:
      "/public/cieloraso/blanco_humo.webp",
  },
  {
    tag: "Laminado Premium",
    price: "$23.500",
    title: "Blanco Mate",
    description:
      "Resistencia superior a rayaduras con un acabado mate profundo que captura la esencia de la madera real.",
    image:
      "/public/cieloraso/blanco_mate.webp",
  },
  {
    tag: "PVC Arquitectónico",
    price: "$23.500",
    title: "Humo Plata",
    description:
      "Instalación rápida sin adhesivos. Silencioso al caminar y altamente resistente a la humedad constante.",
    image:
      "/public/cieloraso/humo_plata.webp",
  },
  {
    tag: "Efecto Piedra",
    price: "$23.500",
    title: "Marmol Dorado",
    description:
      "Estética industrial refinada con la calidez y facilidad de mantenimiento de la tecnología SPC.",
    image:
      "/public/cieloraso/marmol_dorado.webp",
  },
  {
    tag: "Resistente al Agua",
    price: "$23.500",
    title: "Rombos Oro",
    description:
      "Diseñado específicamente para áreas húmedas sin sacrificar la calidez visual de la madera noble.",
    image:
      "/public/cieloraso/rombos_oro.webp",
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