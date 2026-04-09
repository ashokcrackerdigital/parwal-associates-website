import { Sparkles, Users } from "lucide-react";

const differentiators = [
  {
    label: "Why choose us",
    text: "Experienced professionals who add real value—expect a fresh, proactive approach to accounts and tax planning, a friendly personal service, and practical solutions.",
  },
  {
    label: "How we’re different",
    text: "A coalition of specialised skills focused on sound financial outcomes. We combine professional rigour with ethics and a commitment to optimising benefits for every client.",
  },
];

export default function WhoWeAreSection() {
  return (
    <section>
      <div className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/88 to-primary/75" />

      <div className="pointer-events-none absolute -right-24 top-1/4 hidden h-72 w-72 rounded-full bg-secondary/25 blur-3xl lg:block" />
      <div className="pointer-events-none absolute -left-16 bottom-1/4 h-56 w-56 rounded-full bg-third/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Who we are
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[2.75rem]">
              Chartered Accountants rooted in Jaipur, trusted across India.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
              Parwal &amp; Associates is a firm of Chartered Accountants in practice
              since 1983. From our base in Jaipur we support clients with auditing,
              direct and indirect taxation, accounts outsourcing, corporate
              compliance, company and LLP matters, and strategic advisory—always
              with clarity and professional integrity.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
              We help decision makers act with better information—whether you need
              statutory assurance, GST and income-tax support, or guidance on
              starting and scaling business in India.
            </p>

            <ul className="mt-10 max-w-xl space-y-4 border-l-2 border-third pl-6">
              <li className="flex gap-3 text-white/95">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span>
                  A fresh, proactive lens on accounts, compliance, and tax planning.
                </span>
              </li>
              <li className="flex gap-3 text-white/95">
                <Users className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span>
                  Personal attention from a qualified team—no generic templates.
                </span>
              </li>
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="absolute -top-6 right-0 z-10 rounded-2xl border border-white/25 bg-white/15 px-5 py-4 shadow-2xl backdrop-blur-md sm:right-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                Established
              </p>
              <p className="mt-1 text-3xl font-bold text-white">1983</p>
              <p className="text-sm text-white/80">Four decades of practice</p>
            </div>

            <div className="absolute bottom-8 left-0 z-10 rounded-2xl border border-white/25 bg-white/10 px-5 py-4 shadow-xl backdrop-blur-md sm:left-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-third">
                Base
              </p>
              <p className="mt-1 text-2xl font-bold text-white">Jaipur</p>
              <p className="text-sm text-white/80">Serving clients nationwide</p>
            </div>

            <div className="relative mt-12 aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl ring-1 ring-white/10 lg:mt-0 lg:aspect-auto lg:min-h-[420px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="relative border-t-4 border-third bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-0 md:divide-x md:divide-primary/15">
            {differentiators.map((item, i) => (
              <div
                key={item.label}
                className="md:flex-1 md:px-10 md:first:pl-0 md:last:pr-0"
              >
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-secondary">
                  {item.label}
                </p>
                <p className="mt-3 text-base leading-7 text-zinc-700">{item.text}</p>
                {i === 0 && (
                  <p className="mt-3 text-sm text-zinc-500">
                    Friendly communication • Innovative answers • Ethical standards
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
