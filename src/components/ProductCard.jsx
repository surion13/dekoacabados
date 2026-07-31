import { getWhatsAppLink } from "../hooks/Whatsapp";

export default function ProductCard({ tag, price, title, description, image }) {
  const whatsappMessage = `Hola, quisiera cotizar el producto: ${title}.`;

  return (
    <div className="product-card-hover bg-surface border border-outline-variant rounded-lg overflow-hidden flex flex-col h-full">
      <div className="aspect-4/3 overflow-hidden bg-surface-container-low">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <div className="p-8 flex flex-col grow">
        <div className="flex justify-between items-start mb-4 font-bold ">
          {tag && (
            <span className="font-label-caps text-[12px] bg-secondary-fixed text-on-secondary-fixed px-2 py-1 rounded-sm uppercase">
              {tag}
            </span>
          )}
          <span className="text-primary font-bold text-lg ml-auto">{price}</span>
        </div>
        <h3 className="font-headline-md text-headline-md mb-2">{title}</h3>
        {description && (
          <p className="font-body-md text-secondary mb-8 line-clamp-2">
            {description}
          </p>
        )}

        <div className="mt-auto flex gap-4">
          <a
            href={getWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 border border-on-surface text-on-surface font-bold text-sm uppercase tracking-widest hover:bg-on-surface hover:text-white transition-colors text-center"
          >
            Cotizar
          </a>
        </div>
      </div>
    </div>
  );
}