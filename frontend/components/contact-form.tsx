"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send, CheckCircle2, X, Sparkles, MailCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string } | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || data.message || "Unable to send your enquiry.");

      setSubmittedData({ name: form.name, email: form.email });
      setStatus("success");
      setShowModal(true);
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "mt-2 h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-[#151715] outline-none transition placeholder:text-black/30 focus:border-[#43a324] focus:ring-4 focus:ring-[#43a324]/10";

  return (
    <>
      <form onSubmit={onSubmit} className="rounded-[28px] border border-black/8 bg-[#f7f9f6] p-6 shadow-[0_18px_60px_rgba(20,32,18,.06)] sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-bold text-[#343834]">
            Full name *
            <input
              required
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
              placeholder="Your name"
              maxLength={80}
            />
          </label>
          <label className="text-sm font-bold text-[#343834]">
            Email address *
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
              placeholder="you@example.com"
              maxLength={120}
            />
          </label>
          <label className="text-sm font-bold text-[#343834]">
            Phone
            <input
              name="phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClass}
              placeholder="+91 ..."
              maxLength={30}
            />
          </label>
          <label className="text-sm font-bold text-[#343834]">
            Subject
            <input
              name="subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className={inputClass}
              placeholder="Project enquiry"
              maxLength={120}
            />
          </label>
        </div>

        <label className="mt-5 block text-sm font-bold text-[#343834]">
          Message *
          <textarea
            required
            name="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="mt-2 min-h-40 w-full resize-y rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-[#151715] outline-none transition placeholder:text-black/30 focus:border-[#43a324] focus:ring-4 focus:ring-[#43a324]/10"
            placeholder="Tell us about your requirement..."
            maxLength={3000}
          />
        </label>

        <input
          type="text"
          name="website"
          value={form.website}
          onChange={(e) => setForm({ ...form, website: e.target.value })}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {errorMessage && (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-600">
            {errorMessage}
          </div>
        )}

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#43a324] px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#2f7f1d] disabled:cursor-not-allowed disabled:opacity-60 shadow-[0_10px_25px_rgba(67,163,36,0.25)]"
          >
            {status === "sending" ? <Loader2 className="animate-spin" size={17} /> : <Send size={17} />}
            {status === "sending" ? "Sending enquiry..." : "Send enquiry"}
          </button>
          <span className="text-xs text-[#687068]">We usually respond within 24 business hours.</span>
        </div>
      </form>

      {/* LUXURY SUCCESS POPUP MODAL */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-black/10 bg-white p-8 text-center shadow-[0_25px_70px_rgba(0,0,0,0.3)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-black/5 text-[#687068] transition hover:bg-black/10 hover:text-[#111711]"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Animated Success Badge */}
              <div className="relative mx-auto mt-2 grid h-20 w-20 place-items-center rounded-3xl bg-[#eef8eb] text-[#43a324] shadow-[0_10px_30px_rgba(67,163,36,0.18)]">
                <MailCheck size={40} className="stroke-[2.2]" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#43a324] opacity-75"></span>
                  <span className="relative inline-flex h-4 w-4 rounded-full bg-[#43a324]"></span>
                </span>
              </div>

              {/* Title & Message */}
              <h3 className="mt-6 font-[var(--font-playfair)] text-2xl font-bold text-[#111711]">
                Enquiry Sent Successfully!
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#555e55]">
                Thank you{submittedData?.name ? `, ${submittedData.name}` : ""}! Your message has been directly dispatched to our corporate office.
              </p>

              <div className="mt-5 rounded-2xl border border-[#43a324]/15 bg-[#f7faf6] p-4 text-xs text-[#425041]">
                <p className="font-semibold text-[#2f7f1d] flex items-center justify-center gap-1.5">
                  <Sparkles size={14} /> Quick Response Promise
                </p>
                <p className="mt-1 text-[#687068]">
                  Our advisory team in Hyderabad will review your requirement and reach out to you shortly.
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-7 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="w-full rounded-full bg-[#43a324] py-3.5 text-sm font-extrabold text-white shadow-[0_10px_25px_rgba(67,163,36,0.25)] transition hover:bg-[#2f7f1d]"
                >
                  Great, thank you!
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}