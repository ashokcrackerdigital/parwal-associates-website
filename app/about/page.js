import Link from "next/link";

export const metadata = {
  title: "About Us | Parwal & Associates",
  description:
    "Parwal & Associates — Chartered Accountants in Jaipur since 1983. Tax, audit, and advisory with integrity.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-primary/10 bg-zinc-50 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
            About Us
          </p>
          <h1 className="mt-2 text-4xl font-bold text-primary sm:text-5xl">
            Parwal &amp; Associates
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            A Jaipur-based firm of Chartered Accountants, serving clients across
            India with clarity, ethics, and depth of experience.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="space-y-8 text-base leading-8 text-zinc-700">
          <p>
            Parwal and Associates is a firm of Chartered Accountants in practice
            since <strong className="text-primary">1983</strong>. We are engaged
            in providing specialised services in direct and indirect taxes levied
            by the Government of India, State governments, and local
            authorities—including Income Tax, Customs Duty, GST, and other local
            taxes.
          </p>
          <p>
            Our firm is extensively engaged in accounts and auditing services,
            including internal audit, statutory and tax audit, continuous and
            concurrent audits, and information system audit. Our management
            consultancy offerings include MIS, system audit, environmental audit,
            and social audit.
          </p>
          <p>
            We also support legal and regulatory matters such as project
            financing, corporate and business advisory, arbitration, international
            taxation, FEMA consultancy, and company law.
          </p>
          <p>
            We believe in educating clients for proper compliance, keeping them
            updated on changes in law, and sharing sector-specific insights so
            they can run their businesses more efficiently. Since our foundation, we
            have been guided by professional ethics and a commitment to dependable
            service.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
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
