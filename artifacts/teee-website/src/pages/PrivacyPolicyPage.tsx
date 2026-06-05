"use client";

import { FadeIn } from "../components/FadeIn";

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full pt-32 pb-48">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-serif mb-12">Privacy Policy</h1>
          
          <div className="prose prose-invert prose-p:text-muted-foreground prose-p:font-light prose-h2:font-serif prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 max-w-none">
            <p>Last updated: October 2023</p>

            <p>
              At TEEE (The Employee Experience Experiment), we take your privacy seriously. This Privacy Policy describes how we collect, use, and handle your personal information when you use our website or engage our consulting services.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when expressing interest in our services. This includes:
            </p>
            <ul>
              <li>Contact information (name, email address, phone number)</li>
              <li>Professional information (organization name, job title)</li>
              <li>Information you provide in the context of describing your organizational challenges</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect strictly for the purpose of conducting our business and providing you with our consulting services. Specifically, we use it to:
            </p>
            <ul>
              <li>Respond to your inquiries and schedule diagnostic calls</li>
              <li>Provide, operate, and maintain our consulting services</li>
              <li>Send administrative information, such as service updates or policy changes</li>
            </ul>

            <h2>Third-Party Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners and trusted affiliates. We may use third-party service providers to help us operate our business (e.g., email providers, CRM systems), provided that these parties agree to keep this information confidential.
            </p>

            <h2>Cookies and Tracking</h2>
            <p>
              Our website may use standard analytics tools (like basic cookies) to enhance user experience and understand how our site is being used. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or the practices of this site, please contact us at: <a href="mailto:hello@teee.in" className="text-primary hover:underline">hello@teee.in</a>
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
