import Image from "next/image";

import { siteConfig } from "@/lib/site-config";
import { Reveal } from "./Reveal";

export function Gifts() {
  return (
    <section className="bg-beige px-6 py-16 md:py-24">
      <Reveal className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl uppercase text-brown-dark sm:text-4xl">
          Regalos
        </h2>
        <p className="mx-auto mt-4 max-w-2xl whitespace-pre-line text-center font-serif text-ink/75 text-balance">
          Gracias por acompañarnos.
Lo que más valoramos es que festejemos juntos,
aunque todo gesto será recibido con mucho cariño.
        </p>
        <div className="mt-12 flex flex-col-reverse gap-10 md:grid md:grid-cols-2 md:gap-12">
          <div className="flex flex-col items-center rounded-sm border border-brown/25 bg-cream p-8 text-center shadow-sm">
            <h3 className="font-display w-full text-2xl uppercase text-brown-dark">
              Datos bancarios
            </h3>
            <div className="mt-6 w-full space-y-6 font-serif text-ink/90">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brown">Pesos (ARS)</p>
                <dl className="mt-3 space-y-2">
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-brown/70">Beneficiario</dt>
                    <dd className="mt-0.5 text-lg">{siteConfig.bankARS.beneficiario}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-brown/70">Alias</dt>
                    <dd className="mt-0.5 text-lg">{siteConfig.bankARS.alias}</dd>
                  </div>
                </dl>
              </div>
              <hr className="border-brown/20" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brown">Dólares (USD)</p>
                <dl className="mt-3 space-y-2">
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-brown/70">Beneficiario</dt>
                    <dd className="mt-0.5 text-lg">{siteConfig.bankUSD.beneficiario}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-brown/70">CBU</dt>
                    <dd className="mt-0.5 break-all text-lg">{siteConfig.bankUSD.cbu}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center rounded-sm border border-brown/25 bg-cream p-8 text-center shadow-sm">
            <h3 className="font-display w-full text-2xl uppercase text-brown-dark">
              Lista de regalos
            </h3>
            <div className="relative mt-8 h-36 w-full max-w-xs overflow-hidden rounded-sm  bg-cream/80 p-6">
              <Image
                src="/images/logo-lista.png"
                alt="Logo de la tienda de la lista de regalos"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
            <a
              href={siteConfig.giftRegistryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-11 items-center justify-center border-b-2 border-brown-dark font-serif text-lg text-brown-dark transition hover:text-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown"
            >
              Ver lista de regalos
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
