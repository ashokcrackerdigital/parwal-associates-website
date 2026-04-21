"use client";

import Image from "next/image";
import {
  Award,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Ribbon,
  X,
} from "lucide-react";
import { useCallback, useEffect, useId, useState } from "react";
import {
  PA_PHOTO_HERO_IMAGE_CLASS,
  PA_PHOTO_HERO_INNER,
  PA_PHOTO_HERO_OVERLAY,
  PA_PHOTO_HERO_SECTION,
} from "../lib/pageHero";

const TEAM_HERO_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=85";

const KAIZEN_HIGHLIGHTS = [
  "Outsourced CFO services, management reporting, and financial leadership for UAE entities",
  "UAE tax consultancy — VAT, corporate tax, and FTA-aligned compliance and advisory",
  "Company formation and business setup across Mainland, Free Zone, and offshore structures",
  "Accounting, bookkeeping, and end-to-end regulatory support for businesses in the UAE",
];

const KAIZEN_URL = "https://thekaizen.ae/";

/** Max-width shell for Our Team sections (replaces former .pa-container). */
const pageShell = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

const modalBlock = "mb-5 last:mb-0";
const modalBlockTitle =
  "mb-2.5 flex items-center gap-2 text-[0.8125rem] font-extrabold uppercase tracking-wide text-primary";
const modalProse =
  "text-[0.9375rem] leading-relaxed text-zinc-600 [&_p]:mb-3.5 [&_p:last-child]:mb-0 [&_h4]:mb-1.5 [&_h4]:mt-4 [&_h4]:text-sm [&_h4]:font-extrabold [&_h4]:uppercase [&_h4]:tracking-wide [&_h4]:text-primary [&_h4:first-child]:mt-0 [&_ul]:mb-3.5 [&_ul]:pl-[1.15rem]";
const modalList =
  "m-0 list-disc pl-[1.15rem] text-[0.9375rem] leading-relaxed text-zinc-600";
const modalTagList = "flex flex-wrap gap-2";
const modalTag =
  "rounded-full bg-primary/10 px-[0.85rem] py-1.5 text-[0.8125rem] font-semibold text-primary";

const TEAM = [
  {
    id: "kc-parwal",
    name: "CA (Dr.) K C Parwal",
    credentials: "FCA (Dr.) Kailash Chandra Parwal",
    title: "Senior Partner · Patriarch",
    experience: "38+ years",
    excerpt:
      "The patriarch of the firm is an eminent personality in Chartered Accountancy with rich experience of about 38 years. A visionary leader and inspiring dignitary of the CA fraternity—also a published author in spirituality and law.",
    initials: "KC",
    photoTint: "from-[#175888]/25 to-zinc-300",
  },
  {
    id: "bhupesh-mathur",
    name: "FCA Bhupesh Mathur",
    credentials: "FCA, LLB, B.Com, DISA(ISA), CCCA, AICA, BCCD (BSE)",
    title: "Senior Partner",
    experience: "25+ years",
    excerpt:
      "A dynamic, forward-looking leader driving a highly client-centric and people-centric firm. Fellow member of ICAI and a lawyer, with the firm since 2002—known for depth in direct tax and investment advisory.",
    initials: "BM",
    photoTint: "from-secondary/20 to-zinc-300",
  },
  {
    id: "mahesh-saini",
    name: "CA Mahesh Saini",
    credentials: "ACA, M.Com",
    title: "Associate Member",
    experience: "Since 2015",
    excerpt:
      "Young and energetic associate member of ICAI and a postgraduate from the University of Rajasthan. Leads statutory and tax audits, internal audits, bank audits, and company law matters with strong accounting and corporate management expertise.",
    initials: "MS",
    photoTint: "from-third/25 to-zinc-300",
  },
  {
    id: "krishan-sharma",
    name: "CA Krishan K Sharma",
    credentials: "FCA, M.Com, DISA, FAFD, NET (UGC)",
    title: "Associate Member",
    experience: "Core team",
    excerpt:
      "A visionary and dedicated professional—associate member of ICAI and postgraduate from the University of Rajasthan. Focuses on direct taxation, audits of companies including banks, and ROC compliances.",
    initials: "KS",
    photoTint: "from-primary/20 to-zinc-300",
  },
];

function PhotoPlaceholder({ initials, tintClass }) {
  return (
    <div
      className={[
        "aspect-[4/5] w-full object-cover md:aspect-auto md:h-full md:min-h-full",
        "flex items-center justify-center bg-gradient-to-br text-3xl font-bold tracking-tight text-primary/35 sm:text-4xl",
        tintClass,
      ].join(" ")}
      aria-hidden
    >
      {initials}
    </div>
  );
}

export default function OurTeamContent() {
  const [openId, setOpenId] = useState(null);
  const titleId = useId();
  const openMember = TEAM.find((m) => m.id === openId);

  const close = useCallback(() => setOpenId(null), []);

  useEffect(() => {
    if (!openId) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openId, close]);

  return (
    <>
      <div className="bg-white">
        <section
          className={PA_PHOTO_HERO_SECTION}
          aria-labelledby={titleId}
        >
          <Image
            src={TEAM_HERO_IMAGE}
            alt=""
            fill
            priority
            className={PA_PHOTO_HERO_IMAGE_CLASS}
            sizes="100vw"
          />
          <div className={PA_PHOTO_HERO_OVERLAY} aria-hidden />
          <div className={PA_PHOTO_HERO_INNER}>
            <p className="pa-hero-eyebrow mb-4 sm:mb-5">Our people</p>
            <h1
              id={titleId}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Meet our expert team
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
              Experienced professionals dedicated to clear guidance, ethical
              practice, and outcomes that help your business stay compliant and
              confident.
            </p>
          </div>
        </section>

        <section
          className="py-12 sm:py-14 lg:py-16"
          aria-label="Team members"
        >
          <div className={pageShell}>
            <div className="grid gap-7 lg:grid-cols-2 lg:gap-8">
              {TEAM.map((member, index) => (
                <article
                  key={member.id}
                  className={[
                    "flex flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-[0_18px_45px_-28px_color-mix(in_srgb,var(--pa-primary)_45%,transparent)] md:min-h-[17rem] md:flex-row md:items-stretch",
                    index % 2 === 1 ? "md:flex-row-reverse" : "",
                  ].join(" ")}
                >
                  <div className="relative shrink-0 bg-gradient-to-br from-primary/[0.18] to-zinc-200 md:h-auto md:w-[42%] md:max-w-xs">
                    <PhotoPlaceholder
                      initials={member.initials}
                      tintClass={member.photoTint}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 p-[1.35rem] pb-6 md:p-6 md:pr-7">
                    <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-third/15 px-3 py-1 text-xs font-bold text-third">
                      <Award className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      {member.experience}
                    </span>
                    <h2 className="font-serif text-[1.375rem] font-bold leading-tight tracking-[-0.02em] text-primary sm:text-2xl">
                      {member.name}
                    </h2>
                    <p className="text-[0.8125rem] font-semibold text-zinc-500">
                      {member.credentials}
                    </p>
                    <p className="text-[0.9375rem] font-bold text-secondary">
                      {member.title}
                    </p>
                    <p className="text-[0.9375rem] leading-relaxed text-zinc-600">
                      {member.excerpt}
                    </p>
                    <div className="mt-auto pt-2">
                      <button
                        type="button"
                        className="cursor-pointer border-0 bg-transparent p-0 text-sm font-bold text-primary underline underline-offset-[3px] transition-colors hover:text-third"
                        onClick={() => setOpenId(member.id)}
                        aria-haspopup="dialog"
                        aria-expanded={openId === member.id}
                      >
                        View full profile
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-t border-primary/10 bg-gradient-to-br from-zinc-50 via-white to-primary/[0.04] py-12 sm:py-14 lg:py-16"
          aria-labelledby="intl-collab-heading"
        >
          <div className={pageShell}>
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="relative flex min-h-[14rem] flex-col items-center justify-center overflow-hidden rounded-2xl border border-primary/15 bg-white p-8 shadow-[0_22px_50px_-28px_rgba(23,88,136,0.35)]">
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_0%,color-mix(in_srgb,var(--pa-third)_12%,transparent),transparent_55%)]"
                  aria-hidden
                />
                <div className="relative z-[1] flex flex-col items-center gap-4 text-center">
                  <span className="inline-flex rounded-full bg-third/15 px-3 py-1 text-[0.6875rem] font-extrabold uppercase tracking-[0.14em] text-third">
                    Dubai · UAE desk
                  </span>
                  <a
                    href={KAIZEN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block transition-opacity hover:opacity-90 focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    aria-label="Kaizen Business Consultants — opens in a new tab"
                  >
                    <Image
                      src="/kaizen-logo.png"
                      alt="Kaizen Business Consultants logo"
                      width={187}
                      height={70}
                      className="h-auto w-[min(100%,220px)] sm:w-[min(100%,260px)]"
                      priority={false}
                    />
                  </a>
                  <p className="max-w-xs text-xs leading-relaxed text-zinc-600">
                    Associated partner for clients with Middle East operations,
                    overseas structures, and cross-border tax questions.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  International collaboration
                </p>
                <h2
                  id="intl-collab-heading"
                  className="mt-2 font-serif text-2xl font-bold tracking-tight text-primary sm:text-[1.75rem] lg:text-[2rem]"
                >
                  Overseas clients &amp; UAE tax consultancy
                </h2>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-zinc-700">
                  Parwal &amp; Associates works with{" "}
                  <a
                    href={KAIZEN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary underline decoration-third/60 decoration-2 underline-offset-2 hover:text-third"
                  >
                    Kaizen Business Consultants
                  </a>
                  , a trusted financial and business advisory firm in Dubai, so
                  our clients receive coordinated support in India and the UAE.
                </p>
                <div className="mt-4 space-y-3 text-[0.9375rem] leading-relaxed text-zinc-600">
                  <p>
                    Kaizen helps companies navigate accounting, tax, and
                    compliance in the UAE—with certified professionals and deep
                    experience in outsourced CFO services, VAT and corporate tax,
                    and hassle-free business setup. Information on their practice is
                    summarised from their public website at{" "}
                    <a
                      href={KAIZEN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary underline underline-offset-2 hover:text-third"
                    >
                      thekaizen.ae
                    </a>
                    .
                  </p>
                  <p>
                    Whether you are expanding from India into the UAE, need a
                    reliable Dubai desk for reporting and filings, or want aligned
                    advice on international tax and corporate matters, we
                    facilitate a single, professional line of contact between
                    Jaipur and Dubai—including where our senior leadership serves
                    as an advisor to Kaizen.
                  </p>
                </div>

                <ul className="mt-5 flex list-none flex-col gap-2.5 p-0">
                  {KAIZEN_HIGHLIGHTS.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[0.9375rem] leading-snug text-zinc-700">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                        strokeWidth={2.25}
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                  <a
                    href={KAIZEN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-third px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-third/25 transition hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Visit Kaizen — Dubai
                  </a>
                  <a
                    href="/contact"
                    className="text-sm font-bold text-primary underline decoration-primary/30 underline-offset-4 hover:text-third"
                  >
                    Speak to us in Jaipur
                  </a>
                </div>

                <div className="mt-7 rounded-xl border border-primary/15 bg-primary/[0.04] p-4 text-sm leading-relaxed text-zinc-600">
                  <p>
                    <strong className="font-bold text-primary">Kaizen</strong> —
                    Gulf Towers, Oud Metha, Dubai, UAE
                  </p>
                  <p className="mt-2">
                    Phone:{" "}
                    <a
                      href="tel:+971509312312"
                      className="font-bold text-primary underline underline-offset-2 hover:text-third"
                    >
                      +971 50 931 2312
                    </a>
                    {" · "}
                    <a
                      href="mailto:hello@thekaizen.ae"
                      className="font-bold text-primary underline underline-offset-2 hover:text-third"
                    >
                      hello@thekaizen.ae
                    </a>
                  </p>
                  <p className="mt-2 text-xs text-zinc-500">
                    Office hours (UAE): weekdays including Saturday, 8:30am –
                    5:30pm — confirm on their site before visiting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {openMember && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-slate-900/55 p-5 backdrop-blur-md"
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            className="relative my-8 w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-[0_25px_60px_-20px_rgba(0,0,0,0.45)]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-modal-heading"
          >
            <div className="relative min-h-40 bg-gradient-to-br from-primary to-[#0a3550] px-5 pb-5 pt-6 text-white">
              <button
                type="button"
                className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full border border-white/35 bg-black/15 text-white transition-colors hover:bg-black/30"
                onClick={close}
                aria-label="Close profile"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                {openMember.title}
              </p>
              <h2
                id="team-modal-heading"
                className="mt-1 font-serif text-2xl font-bold tracking-tight"
              >
                {openMember.name}
              </h2>
              <p className="mt-1 text-sm text-white/85">{openMember.credentials}</p>
            </div>

            <div className="max-h-[min(70vh,36rem)] overflow-y-auto px-[1.35rem] pb-7 pt-6 sm:px-7 sm:pb-8">
              {openMember.id === "kc-parwal" && <ModalParwal />}
              {openMember.id === "bhupesh-mathur" && <ModalBhupesh />}
              {openMember.id === "mahesh-saini" && <ModalMahesh />}
              {openMember.id === "krishan-sharma" && <ModalKrishan />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ModalParwal() {
  return (
    <>
      <div className={modalBlock}>
        <div className={modalBlockTitle}>
          <Briefcase className="h-4 w-4" strokeWidth={2} aria-hidden />
          About
        </div>
        <div className={modalProse}>
          <p>
            FCA (Dr.) Kailash Chandra Parwal, the patriarch of the firm, is an
            eminent personality in the field of Chartered Accountancy with rich
            experience of about 38 years. CA Parwal completed his graduation in
            1976 from the University of Rajasthan. A man with a vision, he has
            always been an inspiring dignitary of the CA fraternity.
          </p>
          <p>
            Apart from professional work, he has authored notable books—below
            are highlights from his published work in spirituality and law.
          </p>
          <h4>Spirituality</h4>
          <p>
            <strong>Saral Ramayan</strong> — A poetic scripture of over 5,000
            verses in Hindi covering the divine path of Bhagwan Shree Ram. Parts
            are telecast on the Sanskar channel, beamed across 150+ countries. He
            obtained a Doctorate (Ph.D.) on this topic.
          </p>
          <p>
            <strong>Shree Krishanam</strong> — A pioneering poetic work of over
            6,000 verses in Hindi embodying 108 divine verses of the Geeta—
            covering different roles and persona of Bhagwan Shree Krishan.
          </p>
          <h4>Law</h4>
          <p>
            <strong>Jaipur Building Laws</strong> — A unique compilation of
            Acts, circulars, policies, and notifications for real estate in
            Jaipur, with page-to-page English translation, chart-wise
            presentation, and an alphabetical key index. Updated and revised over
            time.
          </p>
          <p>
            <strong>Model Rajasthan Building Regulations</strong> — Similar to
            the Jaipur building bye-laws, extended for Rajasthan with clear
            tabulations for practical use.
          </p>
          <p>
            CA Parwal has vast experience in direct taxation, corporate matters,
            auditing, business advisory, RERA consultancy, and drafting of
            deeds.
          </p>
          <p>
            A man with a golden heart, he has never allowed age to be an obstacle
            in fulfilling his objectives—and still works with the same energy
            for the development of the profession.
          </p>
          <p>
            He balances professional commitments with responsibility towards
            society, participating in various social organisations and actively
            supporting <strong>Nachiketa Gurukul</strong>, an NGO that battles
            illiteracy and provides free education to under-privileged and
            talented students.
          </p>
        </div>
      </div>
    </>
  );
}

function ModalBhupesh() {
  return (
    <>
      <div className={modalBlock}>
        <div className={modalBlockTitle}>
          <Briefcase className="h-4 w-4" strokeWidth={2} aria-hidden />
          About
        </div>
        <div className={modalProse}>
          <p>
            Mr. Bhupesh Mathur is a dynamic, inspiring, and forward-looking
            leader who is working confidently and strategically for the growth
            and transformation of the organisation—with a mission to build a
            highly client-centric and people-centric approach.
          </p>
          <p>
            He is a Fellow member of ICAI, a lawyer, and a commerce graduate
            from the University of Rajasthan. He has been a senior partner with the
            firm since 2002.
          </p>
          <p>
            He has completed DISA (Information Systems Audit) from ICAI, holds
            BCCD (BSE Certificate on Central Depository) from BSE Mumbai, and has
            qualified the certificate course on concurrent bank audit conducted
            by ICAI, New Delhi.
          </p>
          <p>
            With more than 25 years of experience in auditing, direct and
            indirect taxation, investment advisory, and consulting, he leads a
            firm on the panel of various banks for audit and tax matters—including
            project financing and advising on direct and indirect tax issues.
          </p>
          <p>
            His proficiency is especially known for direct tax and investment
            advisory. He advises large corporate groups in India, is associated
            with tax and audit professional associations, and is a Senior Advisor
            to Kaizen Business Consultants (a UAE-based business advisory firm).
          </p>
        </div>
      </div>
      <div className={modalBlock}>
        <div className={modalBlockTitle}>
          <GraduationCap className="h-4 w-4" strokeWidth={2} aria-hidden />
          Qualifications
        </div>
        <ul className={modalList}>
          <li>Fellow, Institute of Chartered Accountants of India (FCA)</li>
          <li>Law graduate (LLB)</li>
          <li>B.Com, University of Rajasthan</li>
          <li>DISA (ISA), ICAI</li>
          <li>BCCD (BSE)</li>
          <li>CCCA, AICA — concurrent bank audit (ICAI)</li>
        </ul>
      </div>
      <div className={modalBlock}>
        <div className={modalBlockTitle}>
          <Ribbon className="h-4 w-4" strokeWidth={2} aria-hidden />
          Areas of expertise
        </div>
        <div className={modalTagList}>
          {[
            "Statutory & tax audit",
            "Direct taxation",
            "Indirect taxation",
            "Investment advisory",
            "Bank panel audits",
            "Project financing",
            "Consulting & corporate advisory",
          ].map((t) => (
            <span key={t} className={modalTag}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

function ModalMahesh() {
  return (
    <>
      <div className={modalBlock}>
        <div className={modalBlockTitle}>
          <Briefcase className="h-4 w-4" strokeWidth={2} aria-hidden />
          About
        </div>
        <div className={modalProse}>
          <p>
            CA Mahesh Saini is a young and energetic associate member of ICAI
            and a postgraduate from the University of Rajasthan. He has been
            with the firm since 2015.
          </p>
          <p>
            He looks after statutory and tax audit, internal audit of firms and
            companies, bank audits, and company law matters—with strong command
            of accounting, financial and banking arrangements, and corporate
            management.
          </p>
        </div>
      </div>
      <div className={modalBlock}>
        <div className={modalBlockTitle}>
          <GraduationCap className="h-4 w-4" strokeWidth={2} aria-hidden />
          Qualifications
        </div>
        <ul className={modalList}>
          <li>Associate member, ICAI (ACA)</li>
          <li>M.Com, University of Rajasthan</li>
        </ul>
      </div>
      <div className={modalBlock}>
        <div className={modalBlockTitle}>
          <Ribbon className="h-4 w-4" strokeWidth={2} aria-hidden />
          Areas of expertise
        </div>
        <div className={modalTagList}>
          {[
            "Statutory audit",
            "Tax audit",
            "Internal audit",
            "Bank audits",
            "Company law",
            "Accounting & financial management",
          ].map((t) => (
            <span key={t} className={modalTag}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

function ModalKrishan() {
  return (
    <>
      <div className={modalBlock}>
        <div className={modalBlockTitle}>
          <Briefcase className="h-4 w-4" strokeWidth={2} aria-hidden />
          About
        </div>
        <div className={modalProse}>
          <p>
            CA K K Sharma is a visionary and dedicated professional—an associate
            member of ICAI and a postgraduate from the University of Rajasthan.
          </p>
          <p>
            He currently looks after direct taxation, audit of companies
            including banks, ROC compliances, and related matters.
          </p>
        </div>
      </div>
      <div className={modalBlock}>
        <div className={modalBlockTitle}>
          <GraduationCap className="h-4 w-4" strokeWidth={2} aria-hidden />
          Qualifications
        </div>
        <ul className={modalList}>
          <li>FCA, Institute of Chartered Accountants of India</li>
          <li>M.Com, University of Rajasthan</li>
          <li>DISA, FAFD</li>
          <li>NET (UGC)</li>
        </ul>
      </div>
      <div className={modalBlock}>
        <div className={modalBlockTitle}>
          <Ribbon className="h-4 w-4" strokeWidth={2} aria-hidden />
          Areas of expertise
        </div>
        <div className={modalTagList}>
          {[
            "Direct taxation",
            "Company audits",
            "Bank audits",
            "ROC compliances",
          ].map((t) => (
            <span key={t} className={modalTag}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
