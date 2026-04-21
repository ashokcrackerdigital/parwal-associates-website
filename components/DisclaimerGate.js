"use client";

import { TriangleAlert, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const STORAGE_KEY = "pa_disclaimer_accepted";

export default function DisclaimerGate() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const accepted = sessionStorage.getItem(STORAGE_KEY) === "true";
    if (!accepted) return;
    const id = requestAnimationFrame(() => setIsOpen(false));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleDismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setIsOpen(false);
    router.push("/");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-2xl">
        <div className="flex items-center justify-between gap-3 bg-primary px-4 py-4 text-white sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <TriangleAlert className="h-6 w-6 shrink-0" />
            <h2 className="text-2xl font-bold">Disclaimer</h2>
          </div>
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Close disclaimer"
            className="shrink-0 rounded-lg p-2 text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
          >
            <X className="h-6 w-6" strokeWidth={2.5} />
          </button>
        </div>

        <div className="space-y-6 p-6 text-lg leading-8 text-zinc-700 sm:p-8">
          <p>
            By accessing this site you acknowledge that you are seeking
            information of your own accord and that no form of solicitation has
            taken place by Parwal &amp; Associates or its members.
          </p>
          <p>
            This site should not be construed as an attempt to create a CA-client relationship in any manner. This site is meant to provide information to those who specifically request this information and does not purport to be exhaustive in relation to the information contained herein.
          </p>
          <p>
            We are not liable for any consequence of any action taken by the
            user relying on material/information provided under this website.
            The visitors to this site are advised to seek independent
            professional guidance before proceeding to act on any information
            provided herein.
          </p>
          <p>
            The Code of Ethics prescribed by the Institute of Chartered
            Accountants of India (ICAI) does not permit solicitation in any
            form or manner.
          </p>
        </div>

        <div className="flex justify-end border-t border-zinc-200 bg-zinc-50 px-6 py-5">
          <button
            type="button"
            onClick={handleDismiss}
            className="inline-flex items-center justify-center rounded-xl bg-third px-10 py-3 text-lg font-semibold text-white transition hover:bg-secondary cursor-pointer"
          >
            OKAY
          </button>
        </div>
      </div>
    </div>
  );
}

