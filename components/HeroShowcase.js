"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1920&q=80",
    eyebrow: "Trusted Financial Partners Since 1983",
  },
  {
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80",
    eyebrow: "Expert Tax and Compliance Advisory",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80",
    eyebrow: "Business-Focused CA Solutions",
  },
];

const rotatingKeywords = [
  "Ledger",
  "Taxation",
  "Audit",
  "Bookkeeping",
  "Variance Analysis",
  "Financial Statements",
  "Balance Sheet",
  "Forensic Account",
  "Income Statement",
  "Accounting Standard",
];

export default function HeroShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeKeyword, setActiveKeyword] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    const keywordTimer = setInterval(() => {
      setActiveKeyword((prev) => (prev + 1) % rotatingKeywords.length);
    }, 2300);

    return () => {
      clearInterval(slideTimer);
      clearInterval(keywordTimer);
    };
  }, []);
  const currentKeyword = rotatingKeywords[activeKeyword];

  return (
    <section className="relative isolate overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.image}
          className={[
            "absolute inset-0 bg-cover bg-center transition-opacity duration-700",
            index === activeSlide ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={index !== activeSlide}
        />
      ))}

      <div className="absolute inset-0 bg-primary/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />

      <div className="relative mx-auto flex min-h-[72vh] w-full max-w-7xl items-center px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-white">
          <p className="mb-5 inline-flex rounded-full bg-secondary/80 px-4 py-1.5 text-xs font-semibold tracking-wide sm:text-sm">
            {heroSlides[activeSlide].eyebrow}
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-5xl">
            Manage Your{" "}
            <span className="inline-block whitespace-nowrap text-secondary transition-all duration-500">
              {currentKeyword}
            </span>
            <br />
            The Right Way
          </h1>

          <p className="mt-6 max-w-2xl text-base text-zinc-100 sm:text-xl">
            Comprehensive chartered accountancy services for growth-ready
            businesses with sharp execution, compliance confidence, and clear
            financial direction.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-third px-7 py-3 text-sm font-semibold text-white transition hover:bg-secondary sm:text-base"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-white px-7 py-3 text-sm font-semibold text-white transition hover:border-secondary hover:text-secondary sm:text-base"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

