import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function ContactCtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-primary py-14 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-95"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 20% 20%, rgba(255,255,255,0.18) 0%, transparent 50%), radial-gradient(ellipse 55% 45% at 90% 80%, rgba(244,121,32,0.15) 0%, transparent 45%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.5rem]">
          Ready to Transform Your{" "}
          <span className="text-third drop-shadow-sm">Financial Future?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
          Partner with Parwal &amp; Associates and experience the difference that
          expertise, integrity, and dedication can make.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-third px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/15 transition hover:bg-secondary sm:w-auto"
          >
            Consult Now
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
          <a
            href="tel:01414006702"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white bg-transparent px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            <Phone className="h-5 w-5" aria-hidden />
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
}
