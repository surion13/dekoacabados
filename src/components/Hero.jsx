import { getWhatsAppLink } from "../hooks/Whatsapp";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDre0-F97zSJFpt_JzgEqNPasacCDEcOziD8pBsXYNCfSkk6TGzkTGfM3nWMX6890duD5LkkGWLSYlBtq8bDkII6ZlPIUHoUO5Ts9fXRF3JvPrX4Ur94zRO-yGpOVDGwu446Q0YKbEkOhUV0M_kdLFJKjMejQr1wdFi7__oW5ls6z1SULPPkpDKt1IyGW1anFvj1LAVEeIqje1sS_6Y7TNYrCGJl9UokZwh_4EQ60hvtUqmi15lFnqdsg')",
        }}
      />
      <div className="absolute inset-0 z-10 hero-gradient" />
      <div className="relative z-20 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop w-full py-16">
        <div className="max-w-2xl">
          <span className="font-label-caps text-label-caps text-primary mb-4 block">
            EXCELENCIA ARQUITECTÓNICA
          </span>
          <h1 className="font-headline-xl text-headline-xl mb-6 leading-tight">
            Dekoacabados{" "}
            <span className="text-primary">Market</span>.
          </h1>
          <p className="font-body-lg text-body-lg text-secondary mb-10 max-w-lg">
           Somos la mejor alternativa para renovar sus espacios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={getWhatsAppLink("Hola, quisiera solicitar una cotización.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-container text-on-primary-container px-10 py-4 font-headline-md text-base font-bold transition-all hover:brightness-110 shadow-lg text-center"
            >
              Solicita tu cotización ahora
            </a>
            <a href="#categories" className="border border-secondary text-secondary px-10 py-4 font-headline-md text-base font-bold hover:bg-surface-container transition-colors">
              Ver Catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}