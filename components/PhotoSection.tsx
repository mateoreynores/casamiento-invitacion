"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/** Order on purpose: not tied to filenames or original numbering. */
const images = [
  { src: "/images/carrousel-4.jpeg", alt: "Faustina y Mateo" },
  { src: "/images/carrousel.jpeg", alt: "Faustina y Mateo" },
  { src: "/images/carrousel-1.1.jpg", alt: "Faustina y Mateo" },
  { src: "/images/carrousel-6.jpeg", alt: "Faustina y Mateo" },
  { src: "/images/carrousel-2.jpeg", alt: "Faustina y Mateo" },
  { src: "/images/carrousel-5.jpeg", alt: "Faustina y Mateo" },
  { src: "/images/carrousel-3.jpeg", alt: "Faustina y Mateo" },
  { src: "/images/carrousel-1.jpeg", alt: "Faustina y Mateo" },
];

const IMAGES_PER_SLIDE = 2;
const totalSlides = Math.ceil(images.length / IMAGES_PER_SLIDE);
const AUTO_INTERVAL = 5000;

export function PhotoSection() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, AUTO_INTERVAL);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const goTo = (idx: number) => {
    setCurrent(idx);
    resetTimer();
  };

  const prev = () => goTo((current - 1 + totalSlides) % totalSlides);
  const next = () => goTo((current + 1) % totalSlides);

  const navBtnClass =
    "flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-full border border-brown/20 bg-cream/90 text-brown-dark shadow-sm transition hover:border-brown/35 hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown";

  return (
    <section className="bg-beige px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-stretch gap-2 sm:gap-3 md:gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Foto anterior"
            className={navBtnClass}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden
            >
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="relative min-w-0 flex-1 overflow-hidden rounded-sm">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[3/4] w-1/2 flex-shrink-0"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 400px"
                    className="object-cover"
                    priority
                  />
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {Array.from({ length: totalSlides }, (_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Ir a grupo de fotos ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-brown-dark/80" : "w-2 bg-brown/40"
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Foto siguiente"
            className={navBtnClass}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden
            >
              <path
                d="M7.5 5L12.5 10L7.5 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
