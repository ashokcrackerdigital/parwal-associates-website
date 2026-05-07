"use client";

import Image from "next/image";
import {
  Award,
  Briefcase,
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

/** Max-width shell for Our Team sections (replaces former .pa-container). */
const pageShell = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

const modalBlock = "mb-5 last:mb-0";
const modalBlockTitle =
  "mb-2.5 flex items-center gap-2 text-[0.8125rem] font-extrabold uppercase tracking-wide text-primary";
const modalProse =
  "text-[0.9375rem] leading-relaxed text-zinc-600 text-justify [&_p]:mb-3.5 [&_p:last-child]:mb-0 [&_h4]:mb-1.5 [&_h4]:mt-4 [&_h4]:text-sm [&_h4]:font-extrabold [&_h4]:uppercase [&_h4]:tracking-wide [&_h4]:text-primary [&_h4:first-child]:mt-0 [&_ul]:mb-3.5 [&_ul]:pl-[1.15rem]";
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
    experience: "40+ years",
    excerpt:
      "Founder and Senior Partner of Parwal and Associates, Dr. K.C. Parwal is a veteran Chartered Accountant known for strategic financial leadership, corporate advisory depth, and professional ethics.",
    photo: "/KCParwalImg.png",
    photoClass: "object-[center_top]",
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
    photo: "/BhupeshMathur.png",
    photoClass: "object-[center_top]",
    initials: "BM",
    photoTint: "from-secondary/20 to-zinc-300",
  },
  {
    id: "mahesh-saini",
    name: "CA Mahesh Saini",
    credentials: "ACA, M.Com",
    title: "Partner",
    experience: "10+ years",
    excerpt:
      "Dynamic and dedicated Associate Member of ICAI with extensive experience in statutory, tax, internal, and bank audits, along with company law and compliance advisory.",
    photo: "/MaheshSainiImg.png",
    photoClass: "object-[center_12%]",
    initials: "MS",
    photoTint: "from-third/25 to-zinc-300",
  },
  {
    id: "krishan-sharma",
    name: "CA Krishan K Sharma",
    credentials: "FCA, M.Com, DISA, FAFD, NET (UGC)",
    title: "Partner",
    experience: "6+ years",
    excerpt:
      "Fellow Chartered Accountant with 6+ years of experience in audit, taxation, and regulatory advisory, including litigation support and practical business structuring across sectors.",
    photo: "/KrishanSharmaImg.png",
    photoClass: "object-[center_top]",
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
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className={`object-cover ${member.photoClass || "object-top"}`}
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                    ) : (
                      <PhotoPlaceholder
                        initials={member.initials}
                        tintClass={member.photoTint}
                      />
                    )}
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

      </div>

      {openMember && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/55 p-3 backdrop-blur-md sm:p-5"
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            className="relative flex h-[min(94dvh,46rem)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-[0_25px_60px_-20px_rgba(0,0,0,0.45)]"
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

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-[1.35rem] pb-7 pt-6 sm:px-7 sm:pb-8">
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
            Dr. K.C. Parwal, Founder and Senior Partner of Parwal and
            Associates, is a veteran Chartered Accountant with an extraordinary
            professional journey spanning over 45 years. As the founding force
            behind a reputed Jaipur-based practice, he has built a legacy of
            trust, professionalism, and excellence in corporate consultancy
            across Rajasthan and India.
          </p>
          <p>
            With nearly five decades of practical experience, he provides
            strategic financial oversight and advisory to prestigious
            enterprises, helping businesses address modern corporate complexity
            while maintaining long-term financial discipline and transparency.
          </p>
          <h4>Core Professional Expertise</h4>
          <p>
            <strong>Taxation (Income Tax and GST)</strong> — He is widely
            respected for practical tax planning, compliance structuring, and
            authoritative advisory support for both individuals and large
            corporates.
          </p>
          <p>
            <strong>Audit and Assurance</strong> — Under his leadership, the
            firm delivers high-standard auditing services grounded in rigorous
            professional integrity.
          </p>
          <p>
            <strong>Corporate and Legal Advisory</strong> — He is an authority
            in corporate law and business structuring, and a recognized expert
            in Rajasthan Building Laws.
          </p>
          <p>
            Dr. Parwal authored the comprehensive guide{" "}
            <strong>Jaipur Building Laws</strong>, a widely used reference for
            investors, developers, and consultants.
          </p>
          <h4>Mentorship and Professional Ethics</h4>
          <p>
            He is admired for disciplined leadership and exemplary professional
            conduct. Over the years, he has mentored numerous CAs, interns, and
            finance professionals in ethical practice and complex financial
            decision-making.
          </p>
          <h4>Literary and Global Recognition</h4>
          <p>
            Beyond professional practice, Dr. Parwal is a respected author and
            researcher. His legal publications include work on Rajasthan
            Building Regulations, including the latest 2025 Township Policy.
            His spiritual and cultural writings include works on the Ramayana,
            Shri Krishnam, Shri Bhagwatji, and Jin Vandana.
          </p>
          <p>
            For his contribution to literature and society, he was conferred
            the prestigious <strong>Bharat Gaurav Award</strong> at the British
            Parliament (House of Commons). He continues to be a guiding force
            in the financial sector, blending legal insight with a deep social
            and literary commitment.
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
            with tax and audit professional associations, and actively mentors
            teams on practical financial decision-making.
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
          <li>CCCA — concurrent bank audit (ICAI)</li>
          <li>AICA Level 1</li>
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
            CA Mahesh Saini is a dynamic and dedicated Associate Member of ICAI
            and a postgraduate from the University of Rajasthan, associated with
            the firm since 2015.
          </p>
          <p>
            He has extensive experience in statutory and tax audits, internal
            audits of firms and companies, bank audits, and company law matters.
            He also actively handles corporate matters and provides advisory on
            various business and regulatory compliances.
          </p>
          <p>
            He possesses a strong command over accounting, financial and banking
            arrangements, and corporate management, and is involved in a wide
            range of consultancy services, delivering practical and
            result-oriented solutions to clients.
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
            Krishan Kumar Sharma is a Fellow Chartered Accountant with over 6
            years of experience in audit, taxation, and regulatory advisory. He
            holds a Diploma in Information Systems Audit (DISA), is certified in
            Forensic Audit and Fraud Detection (FAFD), and has completed
            post-graduation in ABST from the University of Rajasthan.
          </p>
          <p>
            He specializes in statutory and internal audits, direct and indirect
            taxation litigation, and business structuring across sectors
            including real estate, manufacturing, IT, healthcare, and aviation.
            He has extensive experience in handling tax litigation and
            representing clients before income tax and GST authorities.
          </p>
          <p>
            Krishan has advised startups and established businesses on
            structuring, compliance, and cross-border tax matters, including
            DTAA implications. He brings strong expertise in risk assessment,
            internal controls, and regulatory frameworks, with a practical
            approach supported by effective client handling and team leadership.
            He is also actively involved in corporate consultancy, including
            entity formation and restructuring.
          </p>
          <p>
            He is a life member of the Tax Consultants Association, Jaipur,
            reflecting his commitment to the professional community.
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
            "Statutory & internal audits",
            "Direct & indirect tax litigation",
            "Income tax & GST representation",
            "Cross-border tax (DTAA)",
            "Risk assessment & internal controls",
            "Entity formation & restructuring",
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
