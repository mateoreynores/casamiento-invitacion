import { Reveal } from "./Reveal";

export function InvitationText() {
  return (
    <section className="bg-cream px-6 py-16 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl uppercase text-brown-dark sm:text-4xl">
          Los esperamos
        </h2>
        <div className="mx-auto mt-6 h-px w-16 bg-brown-dark" aria-hidden />
        <p className="mt-8 font-serif text-lg leading-relaxed text-ink/90 sm:text-xl">
          Queremos compartir este día tan especial con las personas que queremos. 
        </p>
       
      </Reveal>
    </section>
  );
}
