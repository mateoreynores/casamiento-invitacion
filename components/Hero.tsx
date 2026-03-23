import Image from "next/image";

export function Hero() {
  return (
    <header className="mx-auto max-w-5xl px-4 p-6 sm:p-16">
      <div className="text-center">
        <h1 className="animate-hero-in animate-hero-delay-1 font-display text-3xl leading-tight text-brown-dark sm:text-4xl md:text-5xl">
          FAUSTINA & MATEO
        </h1>
        <div
          className="animate-hero-in animate-hero-delay-2 mx-auto mt-4 h-px w-16 bg-brown-dark"
          aria-hidden
        />
        <p className="animate-hero-in animate-hero-delay-3 mt-4 font-serif text-base text-brown-dark sm:text-lg">
          9 de mayo de 2026
        </p>
      </div>

      <div className="relative mt-6  aspect-[4/5] w-full overflow-hidden sm:mt-8 sm:aspect-[3/2]">
        <Image
          src="/images/hero_image.jpg"
          alt=""
          fill
          priority
          className="hero-image object-cover"
        />
      </div>
    </header>
  );
}
