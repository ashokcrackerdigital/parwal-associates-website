import LegalPageHero from "../../components/LegalPageHero";

export const metadata = {
  title: "Privacy Policy | Parwal & Associates",
};

export default function PrivacyPage() {
  const lastUpdated = "May 7, 2026";

  return (
    <div className="bg-white">
      <LegalPageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How we handle information when you use our website and services."
      />
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="space-y-10 text-zinc-700">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Introduction</h2>
            <p className="leading-relaxed">
              Parwal &amp; Associates is committed to safeguarding the privacy
              of our clients, website visitors, and enquiry submitters. This
              Privacy Policy explains how we collect, use, maintain, and
              disclose information collected through our website and related
              services.
            </p>
            <p className="leading-relaxed">
              By using this website, you agree to the practices described in
              this Privacy Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              Personal Information We Collect
            </h2>
            <p className="leading-relaxed">
              We may collect personal identification information in ways
              including when you:
            </p>
            <ul className="list-disc space-y-1 pl-5 leading-relaxed">
              <li>visit our website or contact pages,</li>
              <li>fill enquiry, career, or consultation forms,</li>
              <li>communicate with us by phone or email,</li>
              <li>request professional services or submit documents,</li>
              <li>subscribe to updates (where applicable).</li>
            </ul>
            <p className="leading-relaxed">
              This may include your name, email address, phone number, city,
              and any details or files you voluntarily provide.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              Non-Personal Information
            </h2>
            <p className="leading-relaxed">
              We may automatically collect non-personal technical information
              such as browser type, device type, operating system, pages
              visited, and basic usage data to improve website performance and
              user experience.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              Cookies and Tracking
            </h2>
            <p className="leading-relaxed">
              Our website may use cookies and similar technologies to support
              core functionality and improve usability. Cookies help us:
            </p>
            <ul className="list-disc space-y-1 pl-5 leading-relaxed">
              <li>understand user behavior and improve website content,</li>
              <li>remember user preferences,</li>
              <li>monitor traffic and website performance trends.</li>
            </ul>
            <p className="leading-relaxed">
              You can disable cookies from your browser settings. Some site
              features may not function correctly if cookies are disabled.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              How We Use Information
            </h2>
            <p className="leading-relaxed">
              We use collected information for legitimate business and service
              purposes, including to:
            </p>
            <ul className="list-disc space-y-1 pl-5 leading-relaxed">
              <li>respond to enquiries and provide professional support,</li>
              <li>deliver requested services and communications,</li>
              <li>improve website quality, relevance, and reliability,</li>
              <li>send updates or important service-related information,</li>
              <li>maintain records for internal administration and compliance.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              Data Protection and Security
            </h2>
            <p className="leading-relaxed">
              We adopt reasonable security controls to protect personal
              information from unauthorized access, alteration, disclosure, or
              destruction. These controls may include restricted access, secure
              storage, and periodic technical monitoring.
            </p>
            <p className="leading-relaxed">
              While we strive to protect data, no method of internet
              transmission or electronic storage is fully secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              Sharing of Information
            </h2>
            <p className="leading-relaxed">
              We do not sell, rent, or trade your personal information. We may
              share information only in limited circumstances:
            </p>
            <ul className="list-disc space-y-1 pl-5 leading-relaxed">
              <li>
                with trusted service providers supporting website or business
                operations,
              </li>
              <li>
                when required by law, regulation, legal process, or government
                request,
              </li>
              <li>
                to protect our rights, prevent fraud, or ensure safety and
                legal compliance.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              Third-Party Links
            </h2>
            <p className="leading-relaxed">
              Our website may contain links to external websites. We do not
              control their content, privacy practices, or security standards.
              Users should review third-party privacy policies independently
              before sharing personal information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              Changes to This Policy
            </h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. Any revision
              will be posted on this page with an updated date. Continued use
              of the website after updates indicates acceptance of the revised
              policy.
            </p>
          </section>

          <section className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <h2 className="text-2xl font-bold text-primary">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy or how your
              information is handled, please contact us:
            </p>
            <div className="space-y-1 text-sm leading-relaxed sm:text-base">
              <p className="font-semibold text-zinc-900">Parwal &amp; Associates</p>
              <p>Jaipur, Rajasthan, India</p>
              <p>
                Phone:{" "}
                <a
                  href="tel:01414006702"
                  className="font-medium text-secondary hover:text-third"
                >
                  0141-4006702
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:parwalandassociates@gmail.com"
                  className="font-medium text-secondary hover:text-third break-all"
                >
                  parwalandassociates@gmail.com
                </a>
              </p>
            </div>
          </section>

          <p className="border-t border-zinc-200 pt-6 text-sm text-zinc-500">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>
    </div>
  );
}
