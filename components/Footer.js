"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/our-team" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Auditing", href: "/services#auditing" },
  { label: "Taxation", href: "/services#taxation" },
  { label: "Indirect Taxation", href: "/services#indirect-taxation" },
  { label: "Corporate Matters", href: "/services#corporate-matters" },
  { label: "Management Consultancy", href: "/services#management-consultancy" },
  { label: "Outsourcing", href: "/services#outsourcing" },
];

const usefulLinks = [
  { label: "ICAI", href: "https://www.icai.org/" },
  { label: "ICSI", href: "https://www.icsi.edu/" },
  { label: "ICMAI", href: "https://icmai.in/" },
  { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
  { label: "Ministry of Finance", href: "https://financialservices.gov.in/beta/en" },
  { label: "Income Tax Portal (CBDT)", href: "https://www.incometax.gov.in/" },
  { label: "CAG India", href: "https://cag.gov.in/" },
  { label: "SEBI", href: "https://www.sebi.gov.in/" },
];

const SCROLL_SHOW_THRESHOLD = 300;

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > SCROLL_SHOW_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-auto bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo1.png"
                alt="Parwal & Associates"
                width={200}
                height={48}
                className="h-11 w-auto drop-shadow-md"
              />
            </Link>
            <p className="mt-4 text-sm leading-6 text-zinc-300">
              Trusted Chartered Accountants since 1983. Specialized services in
              direct &amp; indirect taxes, auditing, and corporate advisory from
              Jaipur, serving clients across India.
            </p>
            <div className="mt-5 space-y-3 text-sm text-zinc-300">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-third" />
                <span>Jaipur, Rajasthan, India</span>
              </p>
              <a
                href="tel:01414006702"
                className="flex items-start gap-3 transition hover:text-secondary"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-third" />
                <span>0141-4006702</span>
              </a>
              <a
                href="mailto:parwalandassociates@gmail.com"
                className="flex items-start gap-3 break-all transition hover:text-secondary"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-third" />
                <span>parwalandassociates@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-2">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-sm text-zinc-300 transition hover:text-secondary"
                  >
                    <ChevronRight className="h-4 w-4 shrink-0 text-third" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Our Services</h3>
            <ul className="mt-5 space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-sm text-zinc-300 transition hover:text-secondary"
                  >
                    <ChevronRight className="h-4 w-4 shrink-0 text-third" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Useful Links</h3>
            <ul className="mt-5 space-y-2">
              {usefulLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-sm text-zinc-300 transition hover:text-secondary"
                  >
                    <ExternalLink className="h-3.5 w-3.5 shrink-0 text-third opacity-80 group-hover:opacity-100" />
                    <span className="border-b border-transparent group-hover:border-secondary/60">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <div className="mt-6 border-t border-white/15 py-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="text-lg font-bold text-white">Get in Touch</h3>
            <Link
              href="/contact"
              className="inline-flex shrink-0 rounded-xl bg-third px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-1.5 text-sm leading-snug text-zinc-400">
            For consultations and enquiries, reach us by phone or email. We
            respond during business hours.
          </p>
        </div> */}
      </div>

      <div className="border-t border-white/10 bg-black/25">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-sm text-zinc-400 sm:text-left">
            © {new Date().getFullYear()} Parwal &amp; Associates. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-zinc-400 transition hover:text-secondary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-zinc-400 transition hover:text-secondary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-third text-white shadow-lg shadow-black/30 transition hover:bg-secondary ${
          showBackToTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
        aria-label="Back to top"
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
      >
        <span className="text-lg font-bold leading-none">↑</span>
      </button>
    </footer>
  );
}
