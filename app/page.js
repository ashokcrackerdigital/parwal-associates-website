import Link from "next/link";
import HeroShowcase from "../components/HeroShowcase";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroShowcase />

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Tax & Compliance",
              description:
                "End-to-end return filing, compliance calendars, and transparent regulatory support.",
            },
            {
              title: "Audit & Assurance",
              description:
                "Risk-focused internal controls and dependable audit frameworks for confident reporting.",
            },
            {
              title: "Advisory & Growth",
              description:
                "Strategic finance, MIS optimization, and scalable process support for growing teams.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-primary/20 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-bold text-primary">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {item.description}
              </p>
              <Link
                href="/services"
                className="mt-4 inline-block text-sm font-semibold text-secondary transition hover:text-third"
              >
                Learn More {"->"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 text-white sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "1200+", label: "Clients Served" },
            { value: "30+", label: "Industry Verticals" },
            { value: "99%", label: "Client Retention" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-white/20 p-5">
              <p className="text-3xl font-extrabold text-secondary">{item.value}</p>
              <p className="mt-2 text-sm text-zinc-100">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-secondary/20 bg-zinc-50 p-8 sm:p-12">
          <h3 className="text-3xl font-bold text-primary sm:text-4xl">
            Let&apos;s build your financial foundation the right way.
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600">
            From accounting and tax planning to assurance and strategic advisory,
            our team helps you move with clarity and confidence.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-third px-6 py-3 text-sm font-semibold text-white transition hover:bg-secondary"
            >
              Get Started
            </Link>
            <Link
              href="/our-team"
              className="rounded-xl border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
