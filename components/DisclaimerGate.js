"use client";

import { CircleCheckBig, CircleX, TriangleAlert } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "pa_disclaimer_accepted";

export default function DisclaimerGate() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const accepted = sessionStorage.getItem(STORAGE_KEY) === "true";
    if (accepted) setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleAccept = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setIsOpen(false);
  };

  const handleCancel = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    window.location.replace("about:blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-2xl">
        <div className="flex items-center gap-3 bg-primary px-6 py-4 text-white">
          <TriangleAlert className="h-6 w-6" />
          <h2 className="text-2xl font-bold">Disclaimer</h2>
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

        <div className="flex flex-col justify-end gap-3 border-t border-zinc-200 bg-zinc-50 px-6 py-5 sm:flex-row">
          <button
            type="button"
            onClick={handleCancel}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 px-7 py-3 text-lg font-semibold text-zinc-600 transition hover:border-primary hover:text-primary"
          >
            <CircleX className="h-5 w-5" />
            CANCEL
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-third px-7 py-3 text-lg font-semibold text-white transition hover:bg-secondary"
          >
            <CircleCheckBig className="h-5 w-5" />
            ACCEPT
          </button>
        </div>
      </div>
    </div>
  );
}

