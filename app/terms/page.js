import LegalPageHero from "../../components/LegalPageHero";

export const metadata = {
  title: "Terms of Service | Parwal & Associates",
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <LegalPageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Terms that apply when you use this website."
      />
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="text-center text-zinc-600 sm:text-left">
          This page will contain your terms of service. Content can be added when
          ready.
        </p>
      </div>
    </div>
  );
}
