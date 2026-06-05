"use client";

import { FadeIn } from "../components/FadeIn";

export default function TermsPage() {
  return (
    <div className="w-full pt-32 pb-48">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-serif mb-12">Terms of Service</h1>
          
          <div className="prose prose-invert prose-p:text-muted-foreground prose-p:font-light prose-h2:font-serif prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 max-w-none">
            <p>Last updated: October 2023</p>

            <p>
              Welcome to TEEE (The Employee Experience Experiment). By accessing our website and utilizing our services, you agree to comply with and be bound by the following terms and conditions of use.
            </p>

            <h2>Use of Website</h2>
            <p>
              The content of the pages of this website is for your general information and use only. It is subject to change without notice. We provide no warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose.
            </p>

            <h2>Services</h2>
            <p>
              TEEE provides consulting, advisory, and training services related to employee experience, HR transformation, and operational automation. Specific engagements are governed by separate Master Services Agreements (MSAs) or Statements of Work (SOWs) executed between TEEE and the client. The information on this website does not constitute binding consulting advice.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, frameworks (including our 6-phase methodology), and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
            </p>

            <h2>Disclaimers</h2>
            <p>
              Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
            </p>
            <p>
              In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about the Terms of Service should be sent to us at: <a href="mailto:hello@teee.in" className="text-primary hover:underline">hello@teee.in</a>
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
