import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "./Reveal";

export type ScheduleVariant = "recepcion" | "despcena";

type ScheduleProps = {
  variant: ScheduleVariant;
};

function MapLinkIcon({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Mapa: ver ubicación en Google Maps"
      className="group inline-flex shrink-0 flex-col items-center gap-1 rounded-sm px-1.5 py-1 text-brown-dark transition hover:text-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brown/20 transition group-hover:border-brown/40 group-hover:bg-cream/80">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="11" r="2.25" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </span>
      <span className="font-serif text-xs  tracking-wide text-brown">
        Mapa
      </span>
    </a>
  );
}

function EventCard({
  title,
  time,
  location,
  mapsUrl,
  imageSrc,
  imageLabel,
  delayClass,
}: {
  title: string;
  time: string;
  location: string;
  mapsUrl: string;
  imageSrc: string;
  imageLabel: string;
  delayClass?: string;
}) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-sm bg-white  ${delayClass ?? ""}`}
    >
      <div className="relative aspect-[1/1] w-full shrink-0 bg-beige">
        <Image
          src={imageSrc}
          alt={imageLabel}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="border-t border-brown/10 bg-white p-6 sm:p-8">
        <h3 className="font-display text-2xl uppercase text-brown-dark sm:text-3xl">
          {title}
        </h3>
        <p className="mt-2 font-serif text-lg font-semibold text-brown">{time}</p>
        <div className="mt-3 flex items-start gap-3">
          <p className="min-w-0 flex-1 font-serif text-base leading-relaxed text-brown-dark/85">
            {location}
          </p>
          <MapLinkIcon href={mapsUrl} />
        </div>
      </div>
    </article>
  );
}

export function Schedule({ variant }: ScheduleProps) {
  const secondEvent =
    variant === "despcena"
      ? {
          ...siteConfig.afterDinner,
        }
      : {
          ...siteConfig.reception,
        };

  return (
    <section className="bg-beige px-6 py-16 md:py-24">
      <Reveal className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl uppercase text-brown-dark sm:text-4xl">
          Horarios
        </h2>
   
        <div className="mx-auto mt-10 grid gap-10 md:grid-cols-2 md:gap-8">
          <EventCard
            title={siteConfig.ceremony.title}
            time={siteConfig.ceremony.time}
            location={siteConfig.ceremony.location}
            mapsUrl={siteConfig.ceremony.mapsUrl}
            imageSrc={siteConfig.ceremony.imageSrc}
            imageLabel={siteConfig.ceremony.imageLabel}
          />
          <EventCard
            title={secondEvent.title}
            time={secondEvent.time}
            location={secondEvent.location}
            mapsUrl={secondEvent.mapsUrl}
            imageSrc={secondEvent.imageSrc}
            imageLabel={secondEvent.imageLabel}
          />
        </div>
      </Reveal>
    </section>
  );
}

/**
 * Solo acepta `recepcion` o `despcena`. Sin parámetro o con valor inválido devuelve null.
 */
export function parseScheduleVariant(
  tipo: string | string[] | undefined
): ScheduleVariant | null {
  const raw = Array.isArray(tipo) ? tipo[0] : tipo;
  if (raw === "despcena") return "despcena";
  if (raw === "recepcion") return "recepcion";
  return null;
}
