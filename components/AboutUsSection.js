import { BadgeCheck, Landmark, Scale, ShieldCheck } from "lucide-react";

const highlights = [
  "Chartered Accountants in practice since 1983",
  "Direct and indirect tax specialists",
  "Audit, MIS, advisory, and compliance experts",
];

export default function AboutUsSection() {
  return (
    <section className="py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-stretch lg:px-8">
        <div
          className="relative min-h-[360px] overflow-hidden rounded-3xl border border-primary/15 bg-zinc-200"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/40 to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              Parwal &amp; Associates
            </p>
            <p className="mt-1 text-xl font-bold text-white sm:text-2xl">
              Trusted Financial & Compliance Partner
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
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
            About Us
          </p>
          <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
            Experience, Ethics, and Practical Advisory
          </h2>

          <div className="mt-5 space-y-4 text-base leading-7 text-zinc-700">
            <p>
              Parwal and Associates is a Jaipur-based firm of Chartered
              Accountants in practice since 1983. We provide specialized
              services in direct and indirect taxes levied by the Government of
              India, State governments, and local authorities, including Income
              Tax, Customs Duty, GST, and other local taxes.
            </p>
            <p>
              Our firm is extensively engaged in accounts and auditing services
              including internal audit, statutory/tax audit, continuous audit,
              and concurrent audits. Our management consultancy offerings
              include MIS, system audit, environmental audit, and social audit.
            </p>
            <p>
              We also support legal and regulatory compliances covering project
              financing, corporate advisory, business advisory, arbitration,
              international taxation, FEMA consultancy, and company law matters.
            </p>
            <p>
              We believe in educating clients for proper legal compliance,
              regularly updating them on law changes, and sharing sector-specific
              research to improve decision-making efficiency.
            </p>
            <p>
              Since our foundation, Parwal &amp; Associates has been guided by
              professional ethics, disciplined conduct, and a consistent
              commitment to service excellence.
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
        </div>
      </div>
    </section>
  );
}

