"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Award,
  Briefcase,
  Send,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import {
  PA_PHOTO_HERO_IMAGE_CLASS,
  PA_PHOTO_HERO_INNER,
  PA_PHOTO_HERO_OVERLAY,
  PA_PHOTO_HERO_SECTION,
} from "../lib/pageHero";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=85";

const CAREERS_EMAIL = "parwalandasociates@gmail.com";

const MONTHS = [
  { value: "", label: "Select month" },
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const whyJoinCards = [
  {
    title: "Growth opportunities",
    description: "Continuous learning and career advancement.",
    icon: TrendingUp,
  },
  {
    title: "Collaborative culture",
    description: "Work with industry experts and mentors.",
    icon: UsersRound,
  },
  {
    title: "Recognition",
    description: "Performance-based rewards and recognition.",
    icon: Award,
  },
  {
    title: "Diverse projects",
    description: "Exposure to various industries and clients.",
    icon: Briefcase,
  },
];

const inputClass =
  "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-primary focus:ring-2 focus:ring-primary/20";
const fileInputClass =
  "w-full cursor-pointer rounded-xl border border-dashed border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-600 file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:border-primary/40";

function ErrorText({ message }) {
  if (!message) return null;
  return <p className="mt-1 text-sm text-red-600">{message}</p>;
}

function openCareersMailto(subject, bodyLines, fileHint) {
  const body = bodyLines.filter(Boolean).join("\n");
  const mailto = `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
  if (fileHint) {
    window.setTimeout(() => {
      window.alert(
        `${fileHint}\n\nYour email app should open with your details. Please attach the files you selected before sending.`
      );
    }, 300);
  }
}

function fileChosen(input) {
  return input?.files?.length > 0;
}

export default function CareersPageContent() {
  const [applyTab, setApplyTab] = useState("articleship");
  const [artErrors, setArtErrors] = useState({});
  const [profErrors, setProfErrors] = useState({});
  const [firmErrors, setFirmErrors] = useState({});

  function validateArticleship(form) {
    const e = {};
    const get = (name) => String(form.elements.namedItem(name)?.value ?? "").trim();

    if (!get("name")) e.name = "Name field is required.";
    if (!get("email")) e.email = "Email field is required.";
    if (!get("contact")) e.contact = "Contact field is required.";
    if (!get("gender")) e.gender = "This field is required.";
    if (!get("city")) e.city = "City/town/village field is required.";

    if (!get("itCompletionDate")) e.itCompletionDate = "This field is required.";
    if (!fileChosen(form.elements.namedItem("itCertificate")))
      e.itCertificate = "This field is required";

    if (!get("ocCompletionDate")) e.ocCompletionDate = "This field is required.";
    if (!fileChosen(form.elements.namedItem("ocCertificate")))
      e.ocCertificate = "This field is required";

    if (!get("intermediateMarks")) e.intermediateMarks = "Marks field is required.";
    if (!fileChosen(form.elements.namedItem("intermediateCertificate")))
      e.intermediateCertificate = "This field is required";

    if (!get("intermediateYear")) e.intermediateYear = "This field is required.";
    if (!get("intermediateMonth")) e.intermediateMonth = "This field is required.";

    if (!get("foundationMarks")) e.foundationMarks = "Marks field is required.";
    if (!fileChosen(form.elements.namedItem("foundationCertificate")))
      e.foundationCertificate = "This field is required";

    if (!fileChosen(form.elements.namedItem("profilePhoto")))
      e.profilePhoto = "This field is required";

    if (!fileChosen(form.elements.namedItem("resume")))
      e.resume = "Resume file is required.";

    return e;
  }

  function onArticleshipSubmit(ev) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const errs = validateArticleship(form);
    setArtErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const get = (name) =>
      String(form.elements.namedItem(name)?.value ?? "").trim();
    const itStatus = get("itTraining");
    const ocStatus = get("ocTraining");

    const lines = [
      "Application type: Articleship",
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Contact: ${get("contact")}`,
      `Gender: ${get("gender")}`,
      `City/Town/Village: ${get("city")}`,
      "",
      `IT Training: ${itStatus === "completed" ? "Completed" : "Expected completion"}`,
      `IT completion date: ${get("itCompletionDate")}`,
      `IT certificate: ${form.elements.namedItem("itCertificate")?.files?.[0]?.name || ""}`,
      "",
      `OC Training: ${ocStatus === "completed" ? "Completed" : "Expected completion"}`,
      `OC completion date: ${get("ocCompletionDate")}`,
      `OC certificate: ${form.elements.namedItem("ocCertificate")?.files?.[0]?.name || ""}`,
      "",
      `Intermediate aggregate marks: ${get("intermediateMarks")}`,
      `Intermediate certificate: ${form.elements.namedItem("intermediateCertificate")?.files?.[0]?.name || ""}`,
      `Year of passing (intermediate): ${get("intermediateYear")}`,
      `Month of passing (intermediate): ${get("intermediateMonth")}`,
      "",
      `Foundation score / marks: ${get("foundationMarks")}`,
      `Foundation certificate: ${form.elements.namedItem("foundationCertificate")?.files?.[0]?.name || ""}`,
      "",
      `Profile photo: ${form.elements.namedItem("profilePhoto")?.files?.[0]?.name || ""}`,
      `Resume: ${form.elements.namedItem("resume")?.files?.[0]?.name || ""}`,
    ];

    openCareersMailto(
      "Career application — Articleship",
      lines,
      "Attach: IT certificate, OC certificate, intermediate marksheet, foundation marksheet, profile photo, and resume."
    );
  }

  function onProfessionalsSubmit(ev) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const e = {};
    const get = (name) => String(form.elements.namedItem(name)?.value ?? "").trim();

    if (!get("name")) e.name = "Name field is required.";
    if (!get("email")) e.email = "Email field is required.";
    if (!get("contact")) e.contact = "Contact field is required.";
    if (!fileChosen(form.elements.namedItem("cv"))) e.cv = "Resume file is required.";
    if (!get("description")) e.description = "Description is required.";

    setProfErrors(e);
    if (Object.keys(e).length > 0) return;

    const lines = [
      "Application type: Professionals",
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Contact: ${get("contact")}`,
      "",
      `Description:\n${get("description")}`,
      "",
      `CV / Resume filename: ${form.elements.namedItem("cv")?.files?.[0]?.name || ""}`,
    ];

    openCareersMailto(
      "Career application — Professionals",
      lines,
      "Attach your CV / resume before sending."
    );
  }

  function onFirmSubmit(ev) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const e = {};
    const get = (name) => String(form.elements.namedItem(name)?.value ?? "").trim();

    if (!get("firmName")) e.firmName = "Firm Name field is required.";
    if (!get("email")) e.email = "Email field is required.";
    if (!get("contact")) e.contact = "Contact field is required.";
    if (!get("partners")) e.partners = "Number of partners field is required.";
    if (!get("staff")) e.staff = "Number of staff member field is required.";
    if (!get("locations")) e.locations = "Number of location field is required.";
    if (!get("headOffice")) e.headOffice = "Head office location field is required.";
    if (!fileChosen(form.elements.namedItem("firmProfile")))
      e.firmProfile = "Profile file is required.";
    if (!get("description")) e.description = "Description field is required.";

    setFirmErrors(e);
    if (Object.keys(e).length > 0) return;

    const lines = [
      "Application type: Firm collaborations",
      `Firm name: ${get("firmName")}`,
      `Email: ${get("email")}`,
      `Contact: ${get("contact")}`,
      `Number of partners: ${get("partners")}`,
      `Number of staff members: ${get("staff")}`,
      `Number of locations: ${get("locations")}`,
      `Head office location: ${get("headOffice")}`,
      "",
      `Description:\n${get("description")}`,
      "",
      `Firm profile file: ${form.elements.namedItem("firmProfile")?.files?.[0]?.name || ""}`,
    ];

    openCareersMailto(
      "Career application — Firm collaborations",
      lines,
      "Attach your firm profile document before sending."
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className={PA_PHOTO_HERO_SECTION}>
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          className={PA_PHOTO_HERO_IMAGE_CLASS}
          sizes="100vw"
        />
        <div className={PA_PHOTO_HERO_OVERLAY} aria-hidden />
        <div className={PA_PHOTO_HERO_INNER}>
          <p className="pa-hero-eyebrow mb-4 sm:mb-5">Careers</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Build your career with us
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Join a team of passionate professionals committed to excellence,
            ethics, and growth — from articleship to experienced hires and firm
            partnerships.
          </p>
        </div>
      </section>

      {/* Why join us */}
      <section className="border-b border-zinc-100 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              Why join us
            </p>
            <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
              What we offer
            </h2>
            <p className="mt-3 text-zinc-600">
              A supportive environment where your work matters and your
              development is a priority.
            </p>
          </div>
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyJoinCards.map((card) => {
              const Icon = card.icon;
              return (
                <li
                  key={card.title}
                  className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm shadow-zinc-200/50 transition hover:shadow-md"
                >
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-primary text-white shadow-md shadow-primary/20"
                    aria-hidden
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {card.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Apply now */}
      <section className="bg-zinc-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Apply now
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
              Send us your details and we will get in touch. Choose the track
              that fits you — articleship, experienced professionals, or firm
              collaborations.
            </p>
          </div>

          <div
            className="mt-10 flex flex-col gap-2 rounded-2xl border border-zinc-200 bg-white p-1.5 shadow-sm sm:flex-row"
            role="tablist"
            aria-label="Application type"
          >
            {[
              { id: "articleship", label: "Articleship" },
              { id: "professionals", label: "Professionals" },
              { id: "firm", label: "Firm collaborations" },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={applyTab === t.id}
                onClick={() => setApplyTab(t.id)}
                className={`min-h-[48px] flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition sm:text-base ${
                  applyTab === t.id
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "text-zinc-700 hover:bg-zinc-50 hover:text-primary"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-100 bg-white p-6 shadow-lg shadow-zinc-200/60 sm:p-10">
            {applyTab === "articleship" && (
              <form
                onSubmit={onArticleshipSubmit}
                className="space-y-10"
                noValidate
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block sm:col-span-2">
                    <span className="text-sm font-semibold text-zinc-800">
                      Name <span className="text-third">*</span>
                    </span>
                    <input name="name" type="text" className={`mt-2 ${inputClass}`} />
                    <ErrorText message={artErrors.name} />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-800">
                      Email <span className="text-third">*</span>
                    </span>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={`mt-2 ${inputClass}`}
                    />
                    <ErrorText message={artErrors.email} />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-800">
                      Contact <span className="text-third">*</span>
                    </span>
                    <input
                      name="contact"
                      type="tel"
                      autoComplete="tel"
                      className={`mt-2 ${inputClass}`}
                    />
                    <ErrorText message={artErrors.contact} />
                  </label>
                </div>

                <fieldset>
                  <legend className="text-sm font-semibold text-zinc-800">
                    Gender <span className="text-third">*</span>
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-6">
                    {[
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" },
                      { value: "other", label: "Others" },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className="inline-flex cursor-pointer items-center gap-2 text-sm text-zinc-700"
                      >
                        <input
                          type="radio"
                          name="gender"
                          value={opt.value}
                          className="h-4 w-4 border-zinc-300 text-primary focus:ring-primary"
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                  <ErrorText message={artErrors.gender} />
                </fieldset>

                <label className="block max-w-xl">
                  <span className="text-sm font-semibold text-zinc-800">
                    City/Town/Village <span className="text-third">*</span>
                  </span>
                  <input name="city" type="text" className={`mt-2 ${inputClass}`} />
                  <ErrorText message={artErrors.city} />
                </label>

                {/* IT Training */}
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50/80 p-6">
                  <h3 className="text-base font-bold text-primary">IT training</h3>
                  <fieldset className="mt-4">
                    <legend className="sr-only">IT training status</legend>
                    <div className="flex flex-wrap gap-6">
                      <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-zinc-700">
                        <input
                          type="radio"
                          name="itTraining"
                          value="completed"
                          defaultChecked
                          className="h-4 w-4 border-zinc-300 text-primary focus:ring-primary"
                        />
                        Completed
                      </label>
                      <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-zinc-700">
                        <input
                          type="radio"
                          name="itTraining"
                          value="expected"
                          className="h-4 w-4 border-zinc-300 text-primary focus:ring-primary"
                        />
                        Expected completion
                      </label>
                    </div>
                  </fieldset>
                  <label className="mt-4 block max-w-md">
                    <span className="text-sm font-semibold text-zinc-800">
                      Completion date <span className="text-third">*</span>
                    </span>
                    <input
                      name="itCompletionDate"
                      type="date"
                      className={`mt-2 ${inputClass}`}
                    />
                    <ErrorText message={artErrors.itCompletionDate} />
                  </label>
                  <label className="mt-4 block">
                    <span className="text-sm font-semibold text-zinc-800">
                      Upload certificate/marksheet <span className="text-third">*</span>
                    </span>
                    <input
                      name="itCertificate"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className={`mt-2 ${fileInputClass}`}
                    />
                    <ErrorText message={artErrors.itCertificate} />
                  </label>
                </div>

                {/* OC Training */}
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50/80 p-6">
                  <h3 className="text-base font-bold text-primary">OC training</h3>
                  <fieldset className="mt-4">
                    <legend className="sr-only">OC training status</legend>
                    <div className="flex flex-wrap gap-6">
                      <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-zinc-700">
                        <input
                          type="radio"
                          name="ocTraining"
                          value="completed"
                          defaultChecked
                          className="h-4 w-4 border-zinc-300 text-primary focus:ring-primary"
                        />
                        Completed
                      </label>
                      <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-zinc-700">
                        <input
                          type="radio"
                          name="ocTraining"
                          value="expected"
                          className="h-4 w-4 border-zinc-300 text-primary focus:ring-primary"
                        />
                        Expected completion
                      </label>
                    </div>
                  </fieldset>
                  <label className="mt-4 block max-w-md">
                    <span className="text-sm font-semibold text-zinc-800">
                      Completion date <span className="text-third">*</span>
                    </span>
                    <input
                      name="ocCompletionDate"
                      type="date"
                      className={`mt-2 ${inputClass}`}
                    />
                    <ErrorText message={artErrors.ocCompletionDate} />
                  </label>
                  <label className="mt-4 block">
                    <span className="text-sm font-semibold text-zinc-800">
                      Upload certificate/marksheet <span className="text-third">*</span>
                    </span>
                    <input
                      name="ocCertificate"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className={`mt-2 ${fileInputClass}`}
                    />
                    <ErrorText message={artErrors.ocCertificate} />
                  </label>
                </div>

                {/* Intermediate */}
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50/80 p-6">
                  <h3 className="text-base font-bold text-primary">
                    Intermediate aggregate score
                  </h3>
                  <div className="mt-4 grid gap-6 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-semibold text-zinc-800">
                        Marks <span className="text-third">*</span>
                      </span>
                      <input
                        name="intermediateMarks"
                        type="text"
                        inputMode="decimal"
                        className={`mt-2 ${inputClass}`}
                      />
                      <ErrorText message={artErrors.intermediateMarks} />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="text-sm font-semibold text-zinc-800">
                        Upload certificate/marksheet <span className="text-third">*</span>
                      </span>
                      <input
                        name="intermediateCertificate"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className={`mt-2 ${fileInputClass}`}
                      />
                      <ErrorText message={artErrors.intermediateCertificate} />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-zinc-800">
                        Year of passing <span className="text-third">*</span>
                      </span>
                      <input
                        name="intermediateYear"
                        type="number"
                        min="1990"
                        max="2035"
                        placeholder="e.g. 2022"
                        className={`mt-2 ${inputClass}`}
                      />
                      <ErrorText message={artErrors.intermediateYear} />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-zinc-800">
                        Month of passing <span className="text-third">*</span>
                      </span>
                      <select
                        name="intermediateMonth"
                        className={`mt-2 ${inputClass}`}
                        defaultValue=""
                      >
                        {MONTHS.map((m) => (
                          <option key={m.value || "empty"} value={m.value}>
                            {m.label}
                          </option>
                        ))}
                      </select>
                      <ErrorText message={artErrors.intermediateMonth} />
                    </label>
                  </div>
                </div>

                {/* Foundation */}
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50/80 p-6">
                  <h3 className="text-base font-bold text-primary">Foundation score</h3>
                  <label className="mt-4 block max-w-md">
                    <span className="text-sm font-semibold text-zinc-800">
                      Marks <span className="text-third">*</span>
                    </span>
                    <input
                      name="foundationMarks"
                      type="text"
                      inputMode="decimal"
                      className={`mt-2 ${inputClass}`}
                    />
                    <ErrorText message={artErrors.foundationMarks} />
                  </label>
                  <label className="mt-4 block">
                    <span className="text-sm font-semibold text-zinc-800">
                      Upload certificate/marksheet <span className="text-third">*</span>
                    </span>
                    <input
                      name="foundationCertificate"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className={`mt-2 ${fileInputClass}`}
                    />
                    <ErrorText message={artErrors.foundationCertificate} />
                  </label>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-800">
                      Profile <span className="text-third">*</span>
                    </span>
                    <input
                      name="profilePhoto"
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      className={`mt-2 ${fileInputClass}`}
                    />
                    <ErrorText message={artErrors.profilePhoto} />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-800">
                      Upload CV / resume <span className="text-third">*</span>
                    </span>
                    <input
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className={`mt-2 ${fileInputClass}`}
                    />
                    <ErrorText message={artErrors.resume} />
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-third px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-third/25 transition hover:bg-secondary"
                >
                  <Send className="h-4 w-4" aria-hidden />
                  Send application
                </button>
              </form>
            )}

            {applyTab === "professionals" && (
              <form
                onSubmit={onProfessionalsSubmit}
                className="space-y-6"
                noValidate
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block sm:col-span-2">
                    <span className="text-sm font-semibold text-zinc-800">
                      Name <span className="text-third">*</span>
                    </span>
                    <input name="name" type="text" className={`mt-2 ${inputClass}`} />
                    <ErrorText message={profErrors.name} />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-800">
                      Email <span className="text-third">*</span>
                    </span>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={`mt-2 ${inputClass}`}
                    />
                    <ErrorText message={profErrors.email} />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-800">
                      Contact <span className="text-third">*</span>
                    </span>
                    <input
                      name="contact"
                      type="tel"
                      autoComplete="tel"
                      className={`mt-2 ${inputClass}`}
                    />
                    <ErrorText message={profErrors.contact} />
                  </label>
                </div>
                <label className="block">
                  <span className="text-sm font-semibold text-zinc-800">
                    Upload CV / resume <span className="text-third">*</span>
                  </span>
                  <input
                    name="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className={`mt-2 ${fileInputClass}`}
                  />
                  <ErrorText message={profErrors.cv} />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-zinc-800">
                    Description <span className="text-third">*</span>
                  </span>
                  <textarea
                    name="description"
                    rows={5}
                    placeholder="Message here"
                    className={`mt-2 ${inputClass}`}
                  />
                  <ErrorText message={profErrors.description} />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-third px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-third/25 transition hover:bg-secondary"
                >
                  <Send className="h-4 w-4" aria-hidden />
                  Send application
                </button>
              </form>
            )}

            {applyTab === "firm" && (
              <form onSubmit={onFirmSubmit} className="space-y-6" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-800">
                      Firm name <span className="text-third">*</span>
                    </span>
                    <input name="firmName" type="text" className={`mt-2 ${inputClass}`} />
                    <ErrorText message={firmErrors.firmName} />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-800">
                      Email <span className="text-third">*</span>
                    </span>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={`mt-2 ${inputClass}`}
                    />
                    <ErrorText message={firmErrors.email} />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-800">
                      Contact <span className="text-third">*</span>
                    </span>
                    <input
                      name="contact"
                      type="tel"
                      autoComplete="tel"
                      className={`mt-2 ${inputClass}`}
                    />
                    <ErrorText message={firmErrors.contact} />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-800">
                      Number of partners <span className="text-third">*</span>
                    </span>
                    <input
                      name="partners"
                      type="number"
                      min="0"
                      className={`mt-2 ${inputClass}`}
                    />
                    <ErrorText message={firmErrors.partners} />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-800">
                      Number of staff members <span className="text-third">*</span>
                    </span>
                    <input
                      name="staff"
                      type="number"
                      min="0"
                      className={`mt-2 ${inputClass}`}
                    />
                    <ErrorText message={firmErrors.staff} />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-800">
                      Number of locations <span className="text-third">*</span>
                    </span>
                    <input
                      name="locations"
                      type="number"
                      min="0"
                      className={`mt-2 ${inputClass}`}
                    />
                    <ErrorText message={firmErrors.locations} />
                  </label>
                </div>
                <label className="block">
                  <span className="text-sm font-semibold text-zinc-800">
                    Head office location <span className="text-third">*</span>
                  </span>
                  <input name="headOffice" type="text" className={`mt-2 ${inputClass}`} />
                  <ErrorText message={firmErrors.headOffice} />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-zinc-800">
                    Profile of the firm <span className="text-third">*</span>
                  </span>
                  <input
                    name="firmProfile"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className={`mt-2 ${fileInputClass}`}
                  />
                  <ErrorText message={firmErrors.firmProfile} />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-zinc-800">
                    Description <span className="text-third">*</span>
                  </span>
                  <textarea
                    name="description"
                    rows={5}
                    placeholder="Leave a message here"
                    className={`mt-2 ${inputClass}`}
                  />
                  <ErrorText message={firmErrors.description} />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-secondary"
                >
                  <Send className="h-4 w-4" aria-hidden />
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
