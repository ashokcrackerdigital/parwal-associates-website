import LegalPageHero from "../../components/LegalPageHero";

export const metadata = {
  title: "Privacy Policy | Parwal & Associates",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <LegalPageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How we handle information when you use our website and services."
      />
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="text-center text-zinc-600 sm:text-left">
          This page will contain your privacy policy. Content can be added when
          ready.
        </p>
      </div>
    </div>
  );
}
