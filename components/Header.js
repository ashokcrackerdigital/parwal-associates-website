"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/our-team" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActivePath = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-primary bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:py-4 lg:py-5 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Parwal and Associates home">
          <Image
            src="/logo1-removeBg.png"
            alt="Parwal & Associates logo"
            width={520}
            height={112}
            priority
            className="h-10 w-auto sm:h-12 md:h-14 lg:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={[
                "text-sm font-semibold transition-colors hover:text-secondary md:text-[15px] md:font-bold",
                isActivePath(item.href)
                  ? "border-b-2 border-primary pb-1 text-primary"
                  : "text-zinc-700",
              ].join(" ")}
              aria-current={isActivePath(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-xl bg-third px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-secondary md:px-7 md:py-2.5 md:text-[15px] md:font-bold"
          >
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-primary p-2 text-primary md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Open main menu</span>
          <span className="flex h-5 w-5 flex-col items-center justify-center gap-1">
            <span
              className={[
                "h-0.5 w-5 bg-primary transition-transform",
                isOpen ? "translate-y-1.5 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "h-0.5 w-5 bg-primary transition-opacity",
                isOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "h-0.5 w-5 bg-primary transition-transform",
                isOpen ? "-translate-y-1.5 -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-primary bg-white px-4 pb-4 pt-2 md:hidden"
        >
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={[
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActivePath(item.href)
                    ? "bg-primary text-white"
                    : "text-zinc-700 hover:bg-zinc-100 hover:text-secondary",
                ].join(" ")}
                onClick={() => setIsOpen(false)}
                aria-current={isActivePath(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-md bg-third px-3 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

