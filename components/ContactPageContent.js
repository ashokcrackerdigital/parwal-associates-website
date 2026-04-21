"use client";

import Image from "next/image";
import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import {
  PA_PHOTO_HERO_IMAGE_CLASS,
  PA_PHOTO_HERO_INNER,
  PA_PHOTO_HERO_OVERLAY,
  PA_PHOTO_HERO_SECTION,
} from "../lib/pageHero";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85";

const LOCATIONS = {
  jaipur: {
    id: "jaipur",
    label: "Jaipur",
    shortLabel: "Jaipur",
    headline: "Head office — Jaipur",
    description:
      "Our registered office and primary practice in the heart of Rajasthan. Visit us for consultations, filings, and advisory.",
    addressLines: ["Jaipur, Rajasthan, India"],
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Jaipur%2C+Rajasthan%2C+India&z=14&output=embed",
    mapTitle: "Parwal & Associates — Jaipur",
  },
  dubai: {
    id: "dubai",
    label: "Partner Dubai",
    shortLabel: "Dubai",
    headline: "Partner office — Dubai",
    description:
      "International and regional matters are coordinated through our partner presence in the UAE. Reach out to book a discussion.",
    addressLines: ["Dubai, United Arab Emirates"],
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Dubai%2C+United+Arab+Emirates&z=11&output=embed",
    mapTitle: "Partner liaison — Dubai",
  },
};

const infoCards = [
  {
    title: "Phone",
    icon: Phone,
    iconWrap: "bg-primary/10 text-primary",
    lines: ["0141-4006702"],
    href: "tel:01414006702",
  },
  {
    title: "Email",
    icon: Mail,
    iconWrap: "bg-secondary/15 text-secondary",
    lines: [
      "parwalandasociates@gmail.com",
      "Parwal_associates@rediffmail.com",
    ],
    href: "mailto:parwalandasociates@gmail.com",
  },
  {
    title: "Jaipur office",
    icon: MapPin,
    iconWrap: "bg-third/15 text-third",
    lines: ["Jaipur, Rajasthan, India"],
  },
  {
    title: "Working hours",
    icon: Clock,
    iconWrap: "bg-primary/10 text-primary",
    lines: ["Mon – Sat: 10:00 AM – 6:00 PM"],
  },
];

export default function ContactPageContent() {
  const [activeLocation, setActiveLocation] = useState("jaipur");
  const location = LOCATIONS[activeLocation];

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      message,
    ].join("\n");
    const mailto = `mailto:parwalandasociates@gmail.com?subject=${encodeURIComponent(
      subject || "Website enquiry"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className={PA_PHOTO_HERO_SECTION}>
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          className={PA_PHOTO_HERO_IMAGE_CLASS}
          sizes="100vw"
        />
        <div className={PA_PHOTO_HERO_OVERLAY} aria-hidden />
        <div className={PA_PHOTO_HERO_INNER}>
          <p className="pa-hero-eyebrow mb-4 sm:mb-5">Get in touch</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            We are here to help with tax, audit, and advisory. Reach out from
            Jaipur or connect regarding our Dubai partner desk — we respond
            during business hours.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="border-b border-zinc-200/80 bg-zinc-50 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              How to reach us
            </h2>
            <p className="mt-3 text-zinc-600">
              Prefer a call, email, or visit? Use the details below — then tell
              us more in the form.
            </p>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <>
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${card.iconWrap}`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-zinc-900">
                    {card.title}
                  </h3>
                  <div className="mt-2 space-y-1 text-sm text-zinc-600">
                    {card.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </>
              );
              const className =
                "rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm shadow-zinc-200/60 transition hover:shadow-md";
              if (card.href) {
                return (
                  <li key={card.title}>
                    <a href={card.href} className={`block ${className}`}>
                      {content}
                    </a>
                  </li>
                );
              }
              return (
                <li key={card.title} className={className}>
                  {content}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Form + map */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary sm:text-4xl">
                Send us a message
              </h2>
              <p className="mt-3 text-zinc-600">
                Fill out the form and we will get back to you as soon as
                possible. Fields marked{" "}
                <span className="text-third" aria-hidden>
                  *
                </span>{" "}
                are required.
              </p>
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5 rounded-2xl border border-zinc-100 bg-zinc-50/80 p-6 shadow-sm sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-800">
                      Full name{" "}
                      <span className="text-third" aria-hidden>
                        *
                      </span>
                    </span>
                    <input
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-800">
                      Phone{" "}
                      <span className="text-third" aria-hidden>
                        *
                      </span>
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+91 …"
                      className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-sm font-semibold text-zinc-800">
                    Email{" "}
                    <span className="text-third" aria-hidden>
                      *
                    </span>
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-zinc-800">
                    Subject{" "}
                    <span className="text-third" aria-hidden>
                      *
                    </span>
                  </span>
                  <input
                    name="subject"
                    type="text"
                    required
                    placeholder="How can we help?"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-zinc-800">
                    Message{" "}
                    <span className="text-third" aria-hidden>
                      *
                    </span>
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Share context, timelines, or questions…"
                    className="mt-2 w-full resize-y rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-third px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-third/25 transition hover:bg-secondary sm:w-auto"
                >
                  <Send className="h-4 w-4" strokeWidth={2} aria-hidden />
                  Send message
                </button>
              </form>
            </div>

            {/* Location tabs + map */}
            <div>
              <h2 className="text-3xl font-bold text-primary sm:text-4xl">
                Visit our office
              </h2>
              <p className="mt-3 text-zinc-600">
                Switch between our Jaipur head office and Dubai partner desk.
                The map updates for each location.
              </p>

              <div
                className="mt-8 flex flex-wrap gap-2 rounded-2xl border border-zinc-200 bg-zinc-100/80 p-1.5"
                role="tablist"
                aria-label="Office location"
              >
                {Object.keys(LOCATIONS).map((key) => {
                  const loc = LOCATIONS[key];
                  const selected = activeLocation === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      id={`tab-${loc.id}`}
                      aria-controls={`panel-${loc.id}`}
                      onClick={() => setActiveLocation(key)}
                      className={`min-h-[44px] flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition sm:flex-none sm:px-6 ${
                        selected
                          ? "bg-primary text-white shadow-md shadow-primary/25"
                          : "text-zinc-700 hover:bg-white hover:text-primary"
                      }`}
                    >
                      {loc.label}
                    </button>
                  );
                })}
              </div>

              <div
                id={`panel-${location.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${location.id}`}
                className="mt-6 space-y-4"
              >
                <div className="rounded-2xl border border-zinc-100 bg-primary p-6 text-white shadow-lg shadow-primary/20">
                  <h3 className="text-lg font-bold">{location.headline}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">
                    {location.description}
                  </p>
                  <div className="mt-4 flex items-start gap-3 rounded-xl bg-white/10 px-4 py-3">
                    <MapPin
                      className="mt-0.5 h-5 w-5 shrink-0 text-third"
                      aria-hidden
                    />
                    <div className="text-sm">
                      {location.addressLines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    <a
                      href="tel:01414006702"
                      className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-3 py-2 transition hover:bg-white/25"
                    >
                      <Phone className="h-4 w-4 text-third" aria-hidden />
                      0141-4006702
                    </a>
                    <a
                      href="mailto:parwalandasociates@gmail.com"
                      className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-3 py-2 transition hover:bg-white/25"
                    >
                      <Mail className="h-4 w-4 text-third" aria-hidden />
                      Email us
                    </a>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-md shadow-zinc-200/50">
                  <iframe
                    key={location.id}
                    title={location.mapTitle}
                    src={location.mapEmbedSrc}
                    className="aspect-[4/3] min-h-[280px] w-full border-0 sm:min-h-[360px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
