export default function ProductCard({ price, title, description, image }) {
  return (
    <div className="product-card-hover bg-surface border border-outline-variant rounded-lg overflow-hidden flex flex-col h-full">
      <div className="aspect-4/3 overflow-hidden bg-surface-container-low">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <div className="p-8 flex flex-col grow">
        <div className="flex justify-between items-start mb-4">
    
          <span className="text-primary font-bold text-lg">{price}</span>
        </div>
        <h3 className="font-headline-md text-headline-md mb-2">{title}</h3>
        <p className="font-body-md text-secondary mb-8 line-clamp-2">
          {description}
        </p>
        <div className="mt-auto flex gap-4">
          <button className="flex-1 py-3 px-4 border border-on-surface text-on-surface font-bold text-sm uppercase tracking-widest hover:bg-on-surface hover:text-white transition-colors">
            Cotizar
          </button>
        </div>
      </div>
    </div>
  );
}