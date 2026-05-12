"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Award,
  Briefcase,
  CheckCircle2,
  Loader2,
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

export default function CareersPageContent() {
  const [applyTab, setApplyTab] = useState("articleship");
  const [artErrors, setArtErrors] = useState({});
  const [artResult, setArtResult] = useState("");
  const [artResultType, setArtResultType] = useState("");
  const [isArtSubmitting, setIsArtSubmitting] = useState(false);
  const [isArtSuccess, setIsArtSuccess] = useState(false);
  const [profErrors, setProfErrors] = useState({});
  const [profResult, setProfResult] = useState("");
  const [profResultType, setProfResultType] = useState("");
  const [isProfSubmitting, setIsProfSubmitting] = useState(false);
  const [isProfSuccess, setIsProfSuccess] = useState(false);
  const [firmErrors, setFirmErrors] = useState({});
  const [firmResult, setFirmResult] = useState("");
  const [firmResultType, setFirmResultType] = useState("");
  const [isFirmSubmitting, setIsFirmSubmitting] = useState(false);
  const [isFirmSuccess, setIsFirmSuccess] = useState(false);
  const SCRIPT_URL = process.env.NEXT_PUBLIC_CAREERS_SCRIPT_URL || "";

  function validateArticleship(form) {
    const e = {};
    const get = (name) => String(form.elements.namedItem(name)?.value ?? "").trim();

    if (!get("name")) e.name = "Name field is required.";
    if (!get("email")) e.email = "Email field is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email")))
      e.email = "Please enter a valid email address.";
    if (!get("contact")) e.contact = "Contact field is required.";
    else if (!/^\d{10,15}$/.test(get("contact")))
      e.contact = "Contact must contain 10 to 15 digits.";
    if (!get("gender")) e.gender = "This field is required.";
    if (!get("city")) e.city = "City/town/village field is required.";

    return e;
  }

  function validateProfessionals(form) {
    const e = {};
    const get = (name) => String(form.elements.namedItem(name)?.value ?? "").trim();

    if (!get("name")) e.name = "Name field is required.";
    if (!get("email")) e.email = "Email field is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email")))
      e.email = "Please enter a valid email address.";
    if (!get("contact")) e.contact = "Contact field is required.";
    else if (!/^\d{10,15}$/.test(get("contact")))
      e.contact = "Contact must contain 10 to 15 digits.";
    if (!form.elements.namedItem("cv")?.files?.length)
      e.cv = "Resume file is required.";
    if (!get("description")) e.description = "Description is required.";

    return e;
  }

  const onArticleshipSubmit = async (e) => {

    e.preventDefault();
    const form = e.currentTarget;
    const errs = validateArticleship(form);
    setArtErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setArtErrors({});

    if (!SCRIPT_URL) {
      setArtResult("Form is not configured yet. Add NEXT_PUBLIC_CAREERS_SCRIPT_URL.");
      setArtResultType("error");
      return;
    }
  
    try {
  
      setIsArtSubmitting(true);
  
      const formData = new FormData(form);
  
      const file = formData.get("resume");
  
      let fileData = "";
      let fileName = "";
      let fileType = "";
  
      // FILE CONVERT BASE64
      if (file && file.size > 0) {
  
        fileName = file.name;
  
        fileType = file.type;
  
        fileData = await new Promise((resolve) => {
  
          const reader = new FileReader();
  
          reader.onload = () => {
  
            resolve(
              reader.result.split(",")[1]
            );
          };
  
          reader.readAsDataURL(file);
        });
      }
  
      // PAYLOAD
      const payload = {
        // Keys kept in sync with Google Apps Script doPost mapping.
        formType: "Articleship",
        name: formData.get("name"),
        email: formData.get("email"),
        contact: formData.get("contact"),
        gender: formData.get("gender"),
        city: formData.get("city"),

        // keep raw file data fields for Apps Script upload handling
        fileName,
        fileType,
        fileData,
      };
  
      // API CALL
      const response = await fetch(
        SCRIPT_URL,
        {
          method: "POST",
          body: JSON.stringify(payload)
        }
      );
  
      const result = await response.json();
  
      if (result.status === "success") {
  
        setArtResult(
          "Application submitted successfully!"
        );
  
        setArtResultType("success");
  
        setIsArtSuccess(true);
  
        form.reset();
  
      } else {
  
        setArtResult(result.message);
  
        setArtResultType("error");
      }
  
    }
  
    catch (err) {
  
      setArtResult(
        "Something went wrong"
      );
  
      setArtResultType("error");
    }
  
    finally {
  
      setIsArtSubmitting(false);
    }
  };

  const onProfessionalsSubmit = async (e) => {

    e.preventDefault();
    const form = e.currentTarget;
    const errs = validateProfessionals(form);
    setProfErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setProfErrors({});

    if (!SCRIPT_URL) {
      setProfResult("Form is not configured yet. Add NEXT_PUBLIC_CAREERS_SCRIPT_URL.");
      setProfResultType("error");
      return;
    }
  
    try {
      setIsProfSubmitting(true);
      setProfResultType("sending");
      setProfResult("Sending...");
  
      const formData = new FormData(form);
  
      const file = formData.get("cv");
  
      let fileData = "";
      let fileName = "";
      let fileType = "";
  
      // FILE BASE64
      if (file && file.size > 0) {
  
        fileName = file.name;
  
        fileType = file.type;
  
        fileData = await new Promise((resolve) => {
  
          const reader = new FileReader();
  
          reader.onload = () => {
  
            resolve(
              reader.result.split(",")[1]
            );
          };
  
          reader.readAsDataURL(file);
        });
      }
  
      // PAYLOAD
      const payload = {
        // Keys kept in sync with Google Apps Script doPost mapping.
        formType: "Professional",
        name: formData.get("name"),
        email: formData.get("email"),
        contact: formData.get("contact"),
        description: formData.get("description"),

        // keep raw file data fields for Apps Script upload handling
        fileName,
        fileType,
        fileData,
      };
  
      // API CALL
      const response = await fetch(
        SCRIPT_URL,
        {
          method: "POST",
          body: JSON.stringify(payload)
        }
      );
  
      const result = await response.json();
  
      if (result.status === "success") {
        setProfResult("Success! Your message has been sent.");
        setProfResultType("success");
        setIsProfSuccess(true);
        form.reset();
      } else {
        setProfResult(result.message || "Error: Unable to send application.");
        setProfResultType("error");
      }
  
    }
  
    catch (err) {
      setProfResult("Something went wrong");
      setProfResultType("error");
    } finally {
      setIsProfSubmitting(false);
    }
  };

  function validateFirm(form) {
    const e = {};
    const get = (name) => String(form.elements.namedItem(name)?.value ?? "").trim();

    if (!get("firmName")) e.firmName = "Firm Name field is required.";
    if (!get("email")) e.email = "Email field is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email")))
      e.email = "Please enter a valid email address.";
    if (!get("contact")) e.contact = "Contact field is required.";
    else if (!/^\d{10,15}$/.test(get("contact")))
      e.contact = "Contact must contain 10 to 15 digits.";
    if (!get("partners")) e.partners = "Number of partners field is required.";
    if (!get("staff")) e.staff = "Number of staff member field is required.";
    if (!get("locations")) e.locations = "Number of location field is required.";
    if (!get("headOffice")) e.headOffice = "Head office location field is required.";
    if (!get("description")) e.description = "Description field is required.";

    return e;
  }

  async function onFirmSubmit(ev) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const errs = validateFirm(form);
    setFirmErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setFirmErrors({});

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_FIRMCOLLABORATION_ACCESS_KEY || "";
    if (!accessKey) {
      setFirmResultType("error");
      setFirmResult(
        "Form is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_FIRMCOLLABORATION_ACCESS_KEY."
      );
      return;
    }

    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("from_name", "Parwal & Associates Careers");
    formData.append("subject", "Career application - Firm collaborations");
    formData.append("application_type", "Firm collaborations");

    try {
      setIsFirmSubmitting(true);
      setFirmResultType("sending");
      setFirmResult("");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setFirmResultType("success");
        setFirmResult("Success! Your message has been sent.");
        setIsFirmSuccess(true);
        form.reset();
      } else {
        setFirmResultType("error");
        setFirmResult(data.message || "Error: Unable to send application.");
      }
    } catch {
      setFirmResultType("error");
      setFirmResult("Error: Please try again in a moment.");
    } finally {
      setIsFirmSubmitting(false);
    }
  }

  function resetApplicationPanels() {
    setArtErrors({});
    setArtResult("");
    setArtResultType("");
    setIsArtSubmitting(false);
    setIsArtSuccess(false);
    setProfErrors({});
    setProfResult("");
    setProfResultType("");
    setIsProfSubmitting(false);
    setIsProfSuccess(false);
    setFirmErrors({});
    setFirmResult("");
    setFirmResultType("");
    setIsFirmSubmitting(false);
    setIsFirmSuccess(false);
  }

  function handleApplyTabChange(nextTab) {
    if (nextTab === applyTab) return;
    resetApplicationPanels();
    setApplyTab(nextTab);
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
            Join a team of driven professionals dedicated to excellence,
            integrity, and continuous growth — offering opportunities from
            articleship to experienced roles and strategic firm partnerships.
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
                  className="rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-sm shadow-zinc-200/50 transition hover:shadow-md sm:text-left"
                >
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center self-center rounded-xl bg-gradient-to-br from-secondary to-primary text-white shadow-md shadow-primary/20 sm:self-start"
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

          <div className="mt-10 -mx-1 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div
              className="mx-1 inline-flex min-w-full gap-2 rounded-2xl border border-zinc-200 bg-white p-1.5 shadow-sm sm:flex"
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
                  onClick={() => handleApplyTabChange(t.id)}
                  className={`min-h-[44px] whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-semibold transition sm:min-h-[48px] sm:flex-1 sm:px-4 sm:py-3 sm:text-base ${
                    applyTab === t.id
                      ? "bg-primary text-white shadow-md shadow-primary/25"
                      : "text-zinc-700 hover:bg-zinc-50 hover:text-primary"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-100 bg-white p-6 shadow-lg shadow-zinc-200/60 sm:p-10">
            {applyTab === "articleship" && (
              isArtSuccess ? (
                <div
                  className="min-h-[510px] rounded-2xl border border-zinc-100 bg-zinc-50/80 p-6 shadow-sm sm:p-8"
                  role="status"
                  aria-live="polite"
                >
                  <div className="mt-10 flex justify-center sm:mt-12">
                    <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 sm:h-24 sm:w-24">
                      <CheckCircle2
                        className="h-10 w-10 sm:h-12 sm:w-12"
                        aria-hidden
                      />
                    </span>
                  </div>
                  <div className="mt-10 text-center sm:mt-12">
                    <h3 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                      Message sent!
                    </h3>
                    <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-700 sm:text-lg">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 1-2 business days.
                    </p>
                  </div>
                </div>
              ) : (
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
                      <input
                        name="name"
                        type="text"
                        autoComplete="name"
                        className={`mt-2 ${inputClass}`}
                      />
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
                        inputMode="numeric"
                        pattern="[0-9]{10,15}"
                        minLength={10}
                        maxLength={15}
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(
                            /\D/g,
                            ""
                          );
                        }}
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

                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-800">
                      City/Town/Village <span className="text-third">*</span>
                    </span>
                    <input
                      name="city"
                      type="text"
                      className={`mt-2 ${inputClass}`}
                    />
                    <ErrorText message={artErrors.city} />
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-800">
                      Upload CV / resume (optional)
                    </span>
                    <input
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className={`mt-2 ${fileInputClass}`}
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={isArtSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-third px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-third/25 transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isArtSubmitting ? (
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    ) : (
                      <Send className="h-4 w-4" aria-hidden />
                    )}
                    {isArtSubmitting ? "Sending..." : "Send application"}
                  </button>

                  {artResult ? (
                    <p
                      className={`rounded-xl border px-4 py-3 text-sm font-medium ${
                        artResultType === "error"
                          ? "border-red-200 bg-red-50 text-red-700"
                          : "border-zinc-200 bg-zinc-100 text-zinc-700"
                      }`}
                      role="status"
                      aria-live="polite"
                    >
                      {artResult}
                    </p>
                  ) : null}
                </form>
              )
            )}

            {applyTab === "professionals" && (
              isProfSuccess ? (
                <div
                  className="min-h-[510px] rounded-2xl border border-zinc-100 bg-zinc-50/80 p-6 shadow-sm sm:p-8"
                  role="status"
                  aria-live="polite"
                >
                  <div className="mt-10 flex justify-center sm:mt-12">
                    <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 sm:h-24 sm:w-24">
                      <CheckCircle2
                        className="h-10 w-10 sm:h-12 sm:w-12"
                        aria-hidden
                      />
                    </span>
                  </div>
                  <div className="mt-10 text-center sm:mt-12">
                    <h3 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                      Message sent!
                    </h3>
                    <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-700 sm:text-lg">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 1-2 business days.
                    </p>
                  </div>
                </div>
              ) : (
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
                        inputMode="numeric"
                        pattern="[0-9]{10,15}"
                        minLength={10}
                        maxLength={15}
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(
                            /\D/g,
                            ""
                          );
                        }}
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
                    disabled={isProfSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-third px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-third/25 transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isProfSubmitting ? (
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    ) : (
                      <Send className="h-4 w-4" aria-hidden />
                    )}
                    {isProfSubmitting ? "Sending..." : "Send application"}
                  </button>
                  {profResultType === "error" && profResult ? (
                    <p
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                      role="status"
                      aria-live="polite"
                    >
                      {profResult}
                    </p>
                  ) : null}
                </form>
              )
            )}

            {applyTab === "firm" && (
              isFirmSuccess ? (
                <div
                  className="min-h-[510px] rounded-2xl border border-zinc-100 bg-zinc-50/80 p-6 shadow-sm sm:p-8"
                  role="status"
                  aria-live="polite"
                >
                  <div className="mt-10 flex justify-center sm:mt-12">
                    <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 sm:h-24 sm:w-24">
                      <CheckCircle2
                        className="h-10 w-10 sm:h-12 sm:w-12"
                        aria-hidden
                      />
                    </span>
                  </div>
                  <div className="mt-10 text-center sm:mt-12">
                    <h3 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                      Message sent!
                    </h3>
                    <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-700 sm:text-lg">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 1-2 business days.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={onFirmSubmit} className="space-y-6" noValidate>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-semibold text-zinc-800">
                        Firm name <span className="text-third">*</span>
                      </span>
                      <input
                        name="firmName"
                        type="text"
                        className={`mt-2 ${inputClass}`}
                      />
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
                        inputMode="numeric"
                        pattern="[0-9]{10,15}"
                        minLength={10}
                        maxLength={15}
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(
                            /\D/g,
                            ""
                          );
                        }}
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
                    <input
                      name="headOffice"
                      type="text"
                      className={`mt-2 ${inputClass}`}
                    />
                    <ErrorText message={firmErrors.headOffice} />
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
                    disabled={isFirmSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isFirmSubmitting ? (
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    ) : (
                      <Send className="h-4 w-4" aria-hidden />
                    )}
                    Send message
                  </button>
                  {firmResultType === "error" && firmResult ? (
                    <p
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                      role="status"
                      aria-live="polite"
                    >
                      {firmResult}
                    </p>
                  ) : null}
                </form>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
