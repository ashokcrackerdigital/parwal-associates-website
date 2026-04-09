import Link from "next/link";
import {
  Building2,
  Calculator,
  FileBarChart,
  Scale,
  TrendingUp,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Auditing",
    slug: "auditing",
    description:
      "Bank, statutory, government, tax, and internal audits—improving information so decision makers act with clarity.",
    icon: FileBarChart,
    iconBg: "bg-primary/15",
    iconClass: "text-primary",
    linkClass: "text-primary hover:text-secondary",
  },
  {
    title: "Taxation",
    slug: "taxation",
    description:
      "Planning, representations, returns, TDS, and international tax advisory aligned with evolving law.",
    icon: Scale,
    iconBg: "bg-secondary/15",
    iconClass: "text-secondary",
    linkClass: "text-secondary hover:text-third",
  },
  {
    title: "Management Consultancy / CFO",
    slug: "management-consultancy",
    description:
      "Strategic finance support, MIS, and CFO-level guidance for growing organisations.",
    icon: TrendingUp,
    iconBg: "bg-third/15",
    iconClass: "text-third",
    linkClass: "text-third hover:text-primary",
  },
  {
    title: "Outsourcing / Back-end",
    slug: "outsourcing",
    description:
      "Reliable back-office and compliance support so your team can focus on core business.",
    icon: Users,
    iconBg: "bg-primary/15",
    iconClass: "text-primary",
    linkClass: "text-primary hover:text-secondary",
  },
  {
    title: "Corporate Matters",
    slug: "corporate-matters",
    description:
      "Incorporation, LLPs, secretarial work, and ROC compliance tailored to your structure.",
    icon: Building2,
    iconBg: "bg-secondary/15",
    iconClass: "text-secondary",
    linkClass: "text-secondary hover:text-third",
  },
  {
    title: "Indirect Taxation",
    slug: "indirect-taxation",
    description:
      "GST returns, refunds, scrutiny, and representations across the indirect tax lifecycle.",
    icon: Calculator,
    iconBg: "bg-third/15",
    iconClass: "text-third",
    linkClass: "text-third hover:text-primary",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
            Our Services
          </p>
          <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
            Comprehensive Financial Solutions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-zinc-600">
            From auditing to tax and corporate advisory—we bring depth, ethics,
            and practical execution to every engagement.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.slug}
                className="group flex flex-col rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg"
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg}`}
                >
                  <Icon className={`h-6 w-6 ${item.iconClass}`} />
                </div>
                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-zinc-600">
                  {item.description}
                </p>
                <Link
                  href={`/services#${item.slug}`}
                  className={`mt-5 inline-flex items-center gap-1 text-sm font-semibold ${item.linkClass}`}
                >
                  Learn More <span aria-hidden>→</span>
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex rounded-xl border-2 border-primary bg-white px-8 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
}
