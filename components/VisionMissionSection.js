import { Eye, Gem, Lightbulb, Target } from "lucide-react";

const highlightCards = [
  {
    title: "Our Vision",
    icon: Eye,
    description:
      "To be a trusted accounting and consultancy partner delivering excellent service and long-term value for clients and associates.",
  },
  {
    title: "Our Mission",
    icon: Lightbulb,
    description:
      "To work with commitment and integrity so individuals, businesses, and organizations can achieve reliable financial outcomes.",
  },
  {
    title: "Our Objective",
    icon: Target,
    description:
      "To build enduring relationships through quality work, practical guidance, and outcome-driven support.",
  },
  {
    title: "Excellence in Service",
    icon: Gem,
    description:
      "To consistently exceed expectations through professionalism, teamwork, and personalized service.",
  },
];

const values = [
  "Leadership: The courage to shape a better future.",
  "Collaboration: Leveraging collective strengths.",
  "Integrity: Being real, fair, and accountable.",
  "Passion: Committed in heart and mind.",
  "Quality: What we do, we do well.",
];

export default function VisionMissionSection() {
  return (
    <section className="bg-zinc-50 py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
            Foundation Of Our Practice
          </p>
          <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
            Vision, Mission & Core Values
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlightCards.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-primary/15 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white transition group-hover:bg-secondary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-zinc-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-secondary/25 bg-white p-8 shadow-sm sm:p-10">
          <h3 className="text-2xl font-bold text-primary sm:text-3xl">
            Our Core Values
          </h3>
          <p className="mt-3 max-w-3xl text-base text-zinc-600">
            Our values guide every engagement and help us maintain a consistent,
            ethical, and client-focused standard of service.
          </p>
          <ul className="mt-6 grid gap-3 text-base text-zinc-700 sm:grid-cols-2">
            {values.map((value) => (
              <li key={value} className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-third" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

