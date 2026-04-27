import Link from "next/link";
import { ArrowRight, BadgeCheck, Landmark, Scale, ShieldCheck } from "lucide-react";

const highlights = [
  "Practice since 1983 with deep domain continuity",
  "Direct and indirect tax support under one roof",
  "Audit, MIS, advisory, and compliance expertise",
];

export default function AboutUsSection() {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:px-8">
        <div
          className="relative min-h-[360px] overflow-hidden rounded-3xl border border-primary/15 bg-zinc-200 shadow-sm"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/45 to-primary/10" />

          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              Parwal &amp; Associates
            </p>
            <p className="mt-1 text-xl font-bold text-white sm:text-2xl">
              Trusted Tax, Audit & Advisory Partner
            </p>
          </div>

          <div className="absolute right-4 top-4 hidden space-y-3 sm:block">
            <div className="rounded-xl bg-white/90 p-3 shadow-lg">
              <Landmark className="h-5 w-5 text-primary" />
            </div>
            <div className="rounded-xl bg-white/90 p-3 shadow-lg">
              <Scale className="h-5 w-5 text-primary" />
            </div>
            <div className="rounded-xl bg-white/90 p-3 shadow-lg">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-primary/15 bg-zinc-50 p-7 shadow-sm sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            About Us
          </p>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-primary sm:text-4xl">
            Built on Trust Since 1983
          </h2>

          <div className="mt-5 space-y-4 text-base leading-7 text-zinc-700">
            <p>
              We are a Jaipur-based Chartered Accountancy firm helping
              businesses and individuals with reliable tax, audit, and compliance
              support.
            </p>
            <p>
              From GST and Income Tax to audits and advisory, our approach is
              practical, transparent, and focused on long-term client value.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 rounded-xl border border-secondary/30 bg-white p-3 text-sm font-medium text-primary"
              >
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-third px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-secondary"
            >
              Know More
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border-2 border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

