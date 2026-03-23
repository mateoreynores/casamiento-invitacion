import { siteConfig } from "@/lib/site-config";
import { Reveal } from "./Reveal";

export function RSVP() {
  return (
    <section className="bg-cream px-6 py-16 md:py-24">
      <Reveal className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-3xl uppercase text-brown-dark sm:text-4xl">
          Confirmar asistencia
        </h2>
        <p className="mt-6 font-serif text-lg leading-relaxed text-ink/85">
          Por favor completá el formulario para confirmarnos si podés acompañarnos antes del 6 de abril.
        </p>
        <a
          href={siteConfig.googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex min-h-12 items-center justify-center rounded-sm border border-brown-dark bg-brown-dark px-10 font-display text-lg tracking-wide text-cream transition hover:bg-brown-dark/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown"
        >
          Formulario
        </a>
      </Reveal>
    </section>
  );
}
