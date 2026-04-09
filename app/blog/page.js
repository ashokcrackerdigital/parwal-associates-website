import Link from "next/link";

export const metadata = {
  title: "Blog | Parwal & Associates",
  description:
    "Insights and updates from Parwal & Associates on taxation, audit, compliance, and business advisory.",
};

export default function BlogPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-primary/10 bg-zinc-50 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
            News & Insights
          </p>
          <h1 className="mt-2 text-4xl font-bold text-primary sm:text-5xl">
            Our Blog
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Practical updates on tax, audit, compliance, and business decisions.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="rounded-2xl border border-secondary/20 bg-zinc-50 p-8 text-center sm:p-10">
          <h2 className="text-2xl font-bold text-primary">Coming Soon</h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            We are preparing useful articles and updates for our clients. Please
            check back soon.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/services"
              className="rounded-xl bg-third px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

