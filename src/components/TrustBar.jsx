const items = [
  {
    icon: "verified_user",
    title: "Garantía Real",
    text: "Respaldo total en cada compra",
  },
  {
    icon: "description",
    title: "Certificados",
    text: "Normas internacionales de calidad",
  },
  {
    icon: "schedule",
    title: "Puntualidad",
    text: "Entregas coordinadas y seguras",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-surface-container py-12 border-y border-outline-variant/20">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-4xl text-primary">
                {item.icon}
              </span>
              <div>
                <p className="font-headline-md text-lg">{item.title}</p>
                <p className="text-secondary text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}