import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Book your graduation photography session. Fill out the form and we'll be in touch within 24–48 hours.",
};

export default function BookPage() {
  return (
    <div className="pt-0 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Page header */}
        <div className="text-center mb-12">
          <p className="text-brand-blue text-xs font-body font-medium tracking-widest uppercase mb-2">
            Let’s Work Together
          </p>
          <h1 className="text-4xl sm:text-5xl font-heading italic text-brand-deep mb-4">
            Book a Session
          </h1>
          <p className="text-brand-slate font-body max-w-xl mx-auto">
            Fill out the form below and we'll reach out within 24–48 hours to
            confirm availability and discuss the details.
          </p>
        </div>

        {/* Form card */}
        <div className="liquid-glass-strong rounded-2xl p-8 sm:p-10">
          <BookingForm />
        </div>

        {/* Alternative contact info */}
        <p className="mt-8 text-center text-sm font-body text-brand-slate">
          Prefer to call? Reach us at{" "}
          <a
            href="tel:+15551234567"
            className="text-brand-blue hover:underline"
          >
            (555) 123-4567
          </a>{" "}
          or email{" "}
          <a
            href="mailto:hello@capturemoments.com"
            className="text-brand-blue hover:underline"
          >
            hello@capturemoments.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
