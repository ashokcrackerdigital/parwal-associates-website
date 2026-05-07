import LegalPageHero from "../../components/LegalPageHero";

export const metadata = {
  title: "Terms of Service | Parwal & Associates",
};

export default function TermsPage() {
  const lastUpdated = "May 7, 2026";

  return (
    <div className="bg-white">
      <LegalPageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Terms that apply when you use this website."
      />
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-11 text-[1.02rem] leading-8 text-zinc-700 sm:text-[1.045rem]">
          <section className="space-y-4">
            <h2 className="text-[1.75rem] font-bold leading-tight text-primary sm:text-3xl">
              Introduction
            </h2>
            <p className="leading-8">
              Welcome to Parwal &amp; Associates. By accessing this website and
              using our services, you agree to comply with these Terms &amp;
              Conditions. Please read them carefully.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Disclaimer</h2>
            <p className="leading-8">
              As per professional conduct rules applicable to Chartered
              Accountants in India, this website is intended only to provide
              general information about our firm and services. By visiting this
              website, you acknowledge that you are seeking information on your
              own initiative and there has been no solicitation, advertisement,
              or inducement by Parwal &amp; Associates.
            </p>
            <p className="leading-8">
              Content on this website is for informational purposes only and
              should not be considered legal, tax, audit, or financial advice.
              You should seek specific professional advice before acting on any
              information shown on this website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              Responsible Use and Conduct
            </h2>
            <p className="leading-8">
              By using our website, information, and resources, you agree to
              use them only for lawful purposes and in accordance with these
              Terms &amp; Conditions and generally accepted online practices.
            </p>
            <ul className="list-disc space-y-1.5 pl-6 leading-8 marker:text-zinc-500">
              <li>
                You must not access or attempt to access our systems through
                unauthorized, automated, unethical, or unconventional methods.
              </li>
              <li>
                You must not interfere with website functionality, servers,
                networks, or security controls.
              </li>
              <li>
                You must not copy, reproduce, distribute, sell, or exploit our
                resources without permission.
              </li>
              <li>
                You are responsible for any loss or liability arising from
                misuse, unauthorized activity, or violation of applicable law.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Privacy</h2>
            <p className="leading-8">
              Your privacy is important to us. Please review our Privacy Policy
              to understand how we collect, process, and protect personal
              information. By using our website, you consent to our data
              handling practices described there.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              Limitation of Warranties
            </h2>
            <p className="leading-8">
              All website resources are provided on an &quot;as is&quot; and
              &quot;as available&quot; basis. We do not warrant that website
              access will be uninterrupted, timely, secure, error-free, or that
              all defects will be corrected.
            </p>
            <p className="leading-8">
              We make no warranties, express or implied, including but not
              limited to merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              Limitation of Liability
            </h2>
            <p className="leading-8">
              Parwal &amp; Associates shall not be liable for any direct,
              indirect, incidental, consequential, special, or exemplary loss
              or damages resulting from use of this website, reliance on content,
              service interruption, data loss, or changes in website
              functionality.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              Intellectual Property
            </h2>
            <p className="leading-8">
              All content on this website, including text, graphics, logos,
              design, code, and images, is the intellectual property of Parwal
              &amp; Associates unless otherwise stated, and is protected under
              applicable intellectual property laws in India.
            </p>
            <p className="leading-8">
              Unauthorized copying, reproduction, distribution, modification, or
              reuse of content (in whole or part) without prior written
              permission is strictly prohibited and may lead to civil and/or
              criminal legal action.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              Service-Specific Terms
            </h2>
            <ul className="list-disc space-y-1.5 pl-6 leading-8 marker:text-zinc-500">
              <li>
                <strong>Tax and compliance services:</strong> Clients are
                responsible for providing accurate and timely information.
                Delays or inaccuracies may impact timelines and outcomes.
              </li>
              <li>
                <strong>Advisory and representation:</strong> Opinions are based
                on facts and laws available at the relevant time and may change
                with legal or regulatory updates.
              </li>
              <li>
                <strong>Refunds and cancellations:</strong> Any refund or
                cancellation request is processed subject to our applicable
                internal policy and engagement terms.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Governing Law</h2>
            <p className="leading-8">
              These Terms &amp; Conditions are governed by the laws of India.
              Any disputes arising from use of this website or related services
              shall be subject to the exclusive jurisdiction of courts at
              Jaipur, Rajasthan.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              Changes to These Terms
            </h2>
            <p className="leading-8">
              Parwal &amp; Associates may revise, update, or modify these Terms
              &amp; Conditions at any time without prior notice. Continued use
              of this website after updates constitutes acceptance of the
              revised terms.
            </p>
          </section>

          <section className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <h2 className="text-2xl font-bold text-primary">Contact Us</h2>
            <p className="leading-8">
              For any query regarding these Terms &amp; Conditions, please
              contact:
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
                  className="break-all font-medium text-secondary hover:text-third"
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
