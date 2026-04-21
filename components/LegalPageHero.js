import Image from "next/image";
import {
  PA_PHOTO_HERO_IMAGE_CLASS,
  PA_PHOTO_HERO_INNER,
  PA_PHOTO_HERO_OVERLAY,
  PA_PHOTO_HERO_SECTION,
} from "../lib/pageHero";

const LEGAL_HERO_IMAGE =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2400&q=85";

export default function LegalPageHero({ eyebrow, title, subtitle }) {
  return (
    <section className={PA_PHOTO_HERO_SECTION}>
      <Image
        src={LEGAL_HERO_IMAGE}
        alt=""
        fill
        priority
        className={PA_PHOTO_HERO_IMAGE_CLASS}
        sizes="100vw"
      />
      <div className={PA_PHOTO_HERO_OVERLAY} aria-hidden />
      <div className={PA_PHOTO_HERO_INNER}>
        <p className="pa-hero-eyebrow mb-4 sm:mb-5">{eyebrow}</p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
