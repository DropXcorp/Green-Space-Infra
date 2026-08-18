"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send } from "lucide-react";

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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to send your enquiry.");

      setStatus("success");
      setFeedback("Thank you. Your enquiry has been sent successfully.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "mt-2 h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-[#151715] outline-none transition placeholder:text-black/30 focus:border-[#43a324] focus:ring-4 focus:ring-[#43a324]/10";

  return (
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

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#43a324] px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#2f7f1d] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? <Loader2 className="animate-spin" size={17} /> : <Send size={17} />}
          {status === "sending" ? "Sending..." : "Send enquiry"}
        </button>
        {feedback && (
          <p className={`text-sm ${status === "success" ? "text-[#2f7f1d]" : "text-red-600"}`}>{feedback}</p>
        )}
      </div>
    </form>
  );
}