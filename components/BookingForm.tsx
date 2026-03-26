"use client";

// BookingForm — controlled form that POSTs to the /api/contact route.
// Shows a success state after a successful submission.

import { useState } from "react";
import Button from "./Button";

interface FormData {
  name: string;
  email: string;
  date: string;
  groupSize: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-brand-soft bg-white px-4 py-3 text-brand-slate placeholder-brand-soft focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition";

export default function BookingForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    date: "",
    groupSize: "1",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");

      setStatus("success");
      setForm({ name: "", email: "", date: "", groupSize: "1", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Submission failed. Please try again."
      );
    }
  };

  // ── Success state ──────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-mist border-2 border-brand-soft mb-5">
          <svg
            className="w-8 h-8 text-brand-deep"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-heading italic text-brand-deep mb-2">
          Request Received!
        </h2>
        <p className="text-brand-slate font-body mb-8 max-w-sm mx-auto">
          Thank you for reaching out. We'll be in touch within 24–48 hours to
          confirm your booking.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Submit Another Request
        </Button>
      </div>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-body font-medium text-brand-slate mb-1"
          >
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-body font-medium text-brand-slate mb-1"
          >
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 2: Date + Group size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-body font-medium text-brand-slate mb-1"
          >
            Preferred Date <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            value={form.date}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="groupSize"
            className="block text-sm font-body font-medium text-brand-slate mb-1"
          >
            Group Size
          </label>
          <select
            id="groupSize"
            name="groupSize"
            value={form.groupSize}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="1">Just me</option>
            <option value="2">2 people</option>
            <option value="3-5">3 – 5 people</option>
            <option value="6-10">6 – 10 people</option>
            <option value="10+">10+ people</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Additional Notes
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your vision, preferred locations, special requests…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Inline error */}
      {status === "error" && (
        <p role="alert" className="text-red-600 text-sm">
          {errorMsg}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "loading"}
        className="w-full"
      >
        {status === "loading" ? "Sending…" : "Send Booking Request"}
      </Button>
    </form>
  );
}
