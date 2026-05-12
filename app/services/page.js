import Image from "next/image";
import Link from "next/link";
import {
  PA_PHOTO_HERO_IMAGE_CLASS,
  PA_PHOTO_HERO_INNER,
  PA_PHOTO_HERO_OVERLAY,
  PA_PHOTO_HERO_SECTION,
} from "../../lib/pageHero";

const SERVICES_HERO_IMAGE =
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2400&q=85";

const sections = [
  {
    id: "auditing",
    title: "Auditing",
    intro:
      "We have both small and large entities as our clients. We work with the goal of improving the information or the context of the information so that decision makers can make more informed, and presumably better decisions. Our core services include:",
    items: [
      "Bank audit",
      "Statutory Audit under Companies Act",
      "Government audit",
      "Insurance audit",
      "Operational Audit",
      "Internal/ Management audit",
      "Concurrent Audit",
      "Information System Audit",
      "Interim Audit",
      "Balance Sheet Audit",
      "Tax Audit",
      "Risk Control Matrix and process assurance reviews",
      "IND AS implementation support",
      "IFRS implementation services",
      "Stock audit",
      "Society auditor services",
      "GST audit",
      "Trust audit service",
      "Peer review and quality review support",
      "Forensic audit and investigation support",
      "Due diligence review services",
    ],
  },
  {
    id: "taxation",
    title: "Direct Taxation",
    intro:
      "Taxation being a highly specialized area and frequently changing subject requires skills relating to tax planning, documentation and representations. We provide under-mentioned services to our clients:",
    blocks: [
      {
        heading: "a) Representations",
        text: "Representing clients and appearing before various authorities which include – Assessing Officer, Appellate Authorities, Income-tax Appellate Tribunal.",
      },
      {
        heading: "b) Tax Planning Services",
        text: "Personal and Corporate.",
      },
      {
        heading: "c) Tax Assistance",
        items: [
          "Services related to TDS/Withholding Taxes",
          "Preparing & Filing Income-tax Returns",
          "Preparing & Filing TDS Returns",
          "Advisory on International Taxation and Transfer Pricing",
          "Professional tax return filing",
          "NRI taxation advisory and filings",
          "Representation during search and survey proceedings",
        ],
      },
      {
        heading: "d) Direct and allied tax support",
        items: [
          "Income Tax advisory and compliance",
          "Tax litigation support and documentation",
          "Representations for scrutiny, appeals, and tribunal matters",
        ],
      },
    ],
  },
  {
    id: "management-consultancy",
    title: "Management Consultancy / CFO services",
    intro:
      "We support organisations with strategic financial leadership, process improvement, and management information—aligned with your scale and sector. Contact us to discuss CFO services, MIS, and tailored consultancy engagements.",
    items: [
      "Virtual CFO services for scaling businesses",
      "Management information systems (MIS) design and reporting",
      "Risk advisory services",
      "Business process improvement and internal control design",
      "Valuation support and transaction-readiness inputs",
      "Technology and digital transformation advisory",
    ],
  },
  {
    id: "outsourcing",
    title: "Outsourcing / Back office Services",
    intro:
      "We provide dependable back-office and operational support so clients can focus on core business while maintaining timely compliance and accurate records. Reach out for a customised outsourcing scope.",
    items: [
      "Accounting and bookkeeping support",
      "Payroll and routine compliance support",
      "Regulatory filings and documentation management",
      "Secretarial and records maintenance support",
      "Global delivery-style execution for process-driven back-office work",
    ],
  },
  {
    id: "corporate-matters",
    title: "Corporate Matters",
    intro:
      "We give immense importance to understanding the business of clients to help them in the following corporate matters:",
    items: [
      "Incorporation of Companies, Drafting of Memorandum & Articles of Association, Limited Review etc.",
      "Incorporation of LLPs, conversion of Companies into LLP, advisory related to LLPs",
      "Secretarial Services – back office work or compliance with company law requirements like maintenance of statutory records, filing of required documents with the Registrar of Companies (ROC) etc.",
      "Merger and acquisition transaction support",
      "SEBI-related secretarial and compliance support",
      "IPO-readiness and listing support services",
      "Trademark and related business protection advisory",
    ],
  },
  {
    id: "indirect-taxation",
    title: "Indirect Taxation",
    intro:
      "Our Indirect Tax Services are tailored to assist clients in meeting the challenges that the constantly evolving environment throws up. We advise clients on various aspects impacting business, management of tax risks and in dealing with tax controversies.",
    subheading: "Our assistance in tax compliances range as under –",
    items: [
      "GST registration, preparation, and filing of Goods & Service Tax returns",
      "Assistance in matters relating to Refund, Scrutiny assessment.",
      "Representations during the revenue audit and assessment procedures before GST authorities including Appellate Authorities",
      "GST advisory and compliance health checks",
      "VAT-related advisory support",
      "Indirect tax risk management and controversy support",
    ],
  },
];

export const metadata = {
  title: "Services | Parwal & Associates",
  description:
    "Auditing, taxation, corporate matters, indirect tax, management consultancy, and outsourcing services.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className={PA_PHOTO_HERO_SECTION}>
        <Image
          src={SERVICES_HERO_IMAGE}
          alt=""
          fill
          priority
          className={PA_PHOTO_HERO_IMAGE_CLASS}
          sizes="100vw"
        />
        <div className={PA_PHOTO_HERO_OVERLAY} aria-hidden />
        <div className={PA_PHOTO_HERO_INNER}>
          <p className="pa-hero-eyebrow mb-4 sm:mb-5">What we offer</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Detailed overview of our practice areas. Use the sections below or
            return to the home page anytime.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-third px-7 py-3 text-sm font-semibold text-white transition hover:bg-secondary sm:mt-7 sm:text-base"
          >
            ← Back to Home
          </Link>
        </div>
      </section>

      <div className="bg-zinc-50 py-14 sm:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-200/70 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              Practice Areas
            </p>
            <p className="mt-2 text-zinc-600">
              Explore each domain to see how we support clients with audit, tax,
              compliance, and strategic advisory services.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary/35 hover:bg-primary/10"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-8 space-y-6 sm:mt-10">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-200/70 sm:p-8"
              >
                <div className="sm:flex sm:items-start sm:gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary sm:h-9 sm:w-9 sm:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="mt-3 w-full sm:mt-0 sm:min-w-0 sm:flex-1">
                    <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                      {section.title}
                    </h2>
                    <p className="mt-3 text-base leading-8 text-zinc-700">
                      {section.intro}
                    </p>
                    {section.subheading && (
                      <p className="mt-5 font-semibold text-primary">{section.subheading}</p>
                    )}

                    {section.items?.length > 0 && (
                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {section.items.map((line) => (
                          <li
                            key={line}
                            className="flex gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-700"
                          >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-third" />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.blocks?.map((block) => (
                      <div
                        key={block.heading}
                        className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-5"
                      >
                        <h3 className="text-lg font-bold text-primary">{block.heading}</h3>
                        {block.text && (
                          <p className="mt-2 text-base leading-8 text-zinc-700">{block.text}</p>
                        )}
                        {block.items && (
                          <ul className="mt-4 space-y-2">
                            {block.items.map((line) => (
                              <li key={line} className="flex gap-3 text-zinc-700">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
