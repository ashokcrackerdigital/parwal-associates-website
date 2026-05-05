import Image from "next/image";
import Link from "next/link";
import {
  PA_PHOTO_HERO_IMAGE_CLASS,
  PA_PHOTO_HERO_INNER,
  PA_PHOTO_HERO_OVERLAY,
  PA_PHOTO_HERO_SECTION,
} from "../../lib/pageHero";

const ABOUT_HERO_IMAGE =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=85";

const CORE_SERVICES = [
  "Direct and indirect taxation (Income Tax, Customs Duty, GST, and local taxes)",
  "Accounts and auditing services including internal, statutory/tax, and concurrent audits",
  "Management consultancy including MIS, system audit, environmental audit, and social audit",
  "Project financing, corporate advisory, business advisory, arbitration, and company law matters",
  "International taxation and FEMA consultancy support",
];

export const metadata = {
  title: "About Us | Parwal & Associates",
  description:
    "Parwal & Associates — Chartered Accountants in Jaipur since 1983. Tax, audit, and advisory with integrity.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className={PA_PHOTO_HERO_SECTION}>
        <Image
          src={ABOUT_HERO_IMAGE}
          alt=""
          fill
          priority
          className={PA_PHOTO_HERO_IMAGE_CLASS}
          sizes="100vw"
        />
        <div className={PA_PHOTO_HERO_OVERLAY} aria-hidden />
        <div className={PA_PHOTO_HERO_INNER}>
          <p className="pa-hero-eyebrow mb-4 sm:mb-5">About us</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Parwal &amp; Associates
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            A Jaipur-based firm of Chartered Accountants, serving clients across
            India with clarity, ethics, and depth of experience.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="space-y-7 text-base leading-8 text-zinc-700 text-justify">
          <p>
            Parwal and Associates is a Jaipur-based firm of Chartered
            Accountants in practice since{" "}
            <strong className="text-primary">1983</strong>. We are engaged in
            providing specialized services in direct and indirect taxes levied by
            the Government of India, various state governments, and local
            authorities.
          </p>
          <p>
            These include Income Tax, Customs Duty, GST, and other local taxes.
            Besides taxation, our firm is extensively engaged in auditing
            services including internal audit, statutory and tax audit, and
            concurrent audits.
          </p>
          <p>
            Our management consultancy services include MIS, system audit,
            environmental audit, and social audit. We also provide advisory and
            legal compliance support for project financing, corporate advisory,
            business advisory, arbitration, international taxation, FEMA
            consultancy, and company law matters.
          </p>
          <p>
            We believe in educating clients to ensure proper legal compliance.
            Clients are regularly updated on recent changes in law, and we share
            sector-specific research to help them make business decisions more
            efficiently.
          </p>
          <p>
            As a firm, we have developed a niche in advising clients on crucial
            and complex business decisions. We endeavor to work in a dynamic
            environment and deliver dependable, high-quality professional service.
            Ever since our foundation, Parwal &amp; Associates has been guided by
            a strong code of conduct and high professional ethics.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-primary/15 bg-zinc-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Our core service areas
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-700 sm:text-base">
            {CORE_SERVICES.map((service) => (
              <li key={service} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            href="/services"
            className="rounded-xl bg-third px-6 py-3 text-sm font-semibold text-white transition hover:bg-secondary"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
