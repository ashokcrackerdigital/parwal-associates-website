"use client";

import { TriangleAlert, X } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "pa_disclaimer_accepted";

export default function DisclaimerGate() {
  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    const accepted = sessionStorage.getItem(STORAGE_KEY) === "true";
    setIsOpen(!accepted);
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
  };

  if (isOpen === null) return null;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/70 p-3 backdrop-blur-sm sm:p-4">
      <div className="flex max-h-[calc(100dvh-1.5rem)] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-2xl sm:max-h-[calc(100dvh-2rem)]">
        <div className="shrink-0 flex items-center justify-between gap-3 bg-primary px-4 py-4 text-white sm:px-6">
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

        <div className="min-h-0 overflow-y-auto space-y-6 p-6 text-base leading-8 text-zinc-700 sm:p-8 sm:text-lg">
          <p className="[text-align:justify]">
            By accessing this site you acknowledge that you are seeking
            information of your own accord and that no form of solicitation has
            taken place by Parwal &amp; Associates or its members.
          </p>
          <p className="[text-align:justify]">
            This site should not be construed as an attempt to create a CA-client relationship in any manner. This site is meant to provide information to those who specifically request this information and does not purport to be exhaustive in relation to the information contained herein.
          </p>
          <p className="[text-align:justify]">
            We are not liable for any consequence of any action taken by the
            user relying on material/information provided under this website.
            The visitors to this site are advised to seek independent
            professional guidance before proceeding to act on any information
            provided herein.
          </p>
          <p className="[text-align:justify]">
            The Code of Ethics prescribed by the Institute of Chartered
            Accountants of India (ICAI) does not permit solicitation in any
            form or manner.
          </p>
        </div>

        <div className="shrink-0 flex justify-end border-t border-zinc-200 bg-zinc-50 px-6 py-5">
          <button
            type="button"
            onClick={handleDismiss}
            className="inline-flex min-w-[110px] items-center justify-center rounded-lg bg-third px-6 py-2.5 text-base font-semibold text-white transition hover:bg-secondary cursor-pointer sm:min-w-[140px] sm:rounded-xl sm:px-10 sm:py-3 sm:text-lg"
          >
            OKAY
          </button>
        </div>
      </div>
    </div>
  );
}

