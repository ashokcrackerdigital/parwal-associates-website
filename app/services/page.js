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
    ],
  },
  {
    id: "taxation",
    title: "Taxation",
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
        ],
      },
    ],
  },
  {
    id: "management-consultancy",
    title: "Management Consultancy / CFO services",
    intro:
      "We support organisations with strategic financial leadership, process improvement, and management information—aligned with your scale and sector. Contact us to discuss CFO services, MIS, and tailored consultancy engagements.",
    items: [],
  },
  {
    id: "outsourcing",
    title: "Outsourcing / Back end Services",
    intro:
      "We provide dependable back-office and operational support so clients can focus on core business while maintaining timely compliance and accurate records. Reach out for a customised outsourcing scope.",
    items: [],
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
    ],
  },
  {
    id: "indirect-taxation",
    title: "Indirect Taxation",
    intro:
      "Our Indirect Tax Services are tailored to assist clients in meeting the challenges that the constantly evolving environment throws up. We advise clients on various aspects impacting business, management of tax risks and in dealing with tax controversies.",
    subheading: "Our assistance in tax compliances range as under –",
    items: [
      "Preparation and filing of Goods & service tax returns",
      "Assistance in matters relating to Refund, Scrutiny assessment.",
      "Representations during the revenue audit and assessment procedures before various authorities including Appellate Authorities",
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

      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24 border-b border-zinc-200 py-12 last:border-0"
          >
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              {section.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-700">{section.intro}</p>

            {section.subheading && (
              <p className="mt-4 font-semibold text-primary">{section.subheading}</p>
            )}

            {section.items?.length > 0 && (
              <ul className="mt-6 space-y-3">
                {section.items.map((line) => (
                  <li key={line} className="flex gap-3 text-zinc-700">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-third" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.blocks?.map((block) => (
              <div key={block.heading} className="mt-8">
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
          </section>
        ))}
      </div>
    </div>
  );
}
