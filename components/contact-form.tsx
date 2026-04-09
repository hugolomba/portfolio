"use client";
import { motion } from "framer-motion";
import { useState } from "react";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get("content-type") || "";

      if (!contentType.includes("application/json")) {
        const text = await response.text();
        throw new Error(
          text.startsWith("<!DOCTYPE")
            ? "The /api/contact route is returning HTML instead of JSON. Check whether app/api/contact/route.ts exists and whether the server is throwing an error."
            : "Unexpected response from the server.",
        );
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.section
      className="mx-auto mt-20 mb-40 max-w-5xl px-1"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="rounded-[2rem] border border-gray-200/70 bg-white/85 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-sm md:p-8">
        <div className="mb-8 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/90" />
          <span className="h-3 w-3 rounded-full bg-amber-400/90" />
          <span className="h-3 w-3 rounded-full bg-green-400/90" />
        </div>

        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
          <div className="flex flex-col justify-between">
            <div>
               
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Contact
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl md:leading-[1.02]">
                Let’s build something together.
              </h1>
              <p className="mt-5 max-w-md text-base leading-7 text-zinc-600">
                I’m open to new opportunities, freelance projects, and good
                conversations about web development, design, and product ideas.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="mailto:hugo@hugolomba.com"
                className="flex items-center justify-between rounded-[1.5rem] border border-gray-200/80 bg-white/90 px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)]"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                    Email
                  </p>
                  <p className="mt-1 text-sm font-medium text-zinc-800">
                    hugo@hugolomba.com
                  </p>
                </div>
                <span className="text-lg text-zinc-500">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/hugo-lomba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-[1.5rem] border border-gray-200/80 bg-white/90 px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)]"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                    LinkedIn
                  </p>
                  <p className="mt-1 text-sm font-medium text-zinc-800">
                    linkedin.com/in/hugo-lomba
                  </p>
                </div>
                <span className="text-lg text-zinc-500">↗</span>
              </a>

              <a
                href="https://github.com/hugolomba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-[1.5rem] border border-gray-200/80 bg-white/90 px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)]"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                    GitHub
                  </p>
                  <p className="mt-1 text-sm font-medium text-zinc-800">
                    github.com/hugolomba
                  </p>
                </div>
                <span className="text-lg text-zinc-500">↗</span>
              </a>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-gray-200/80 bg-white/90 p-5 shadow-sm md:p-6">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Send a message
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
                Start the conversation
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-zinc-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-[1.25rem] border border-zinc-200 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-zinc-900 focus:shadow-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-zinc-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-[1.25rem] border border-zinc-200 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-zinc-900 focus:shadow-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-zinc-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project, opportunity, or just saying hi"
                  value={formData.subject}
                  onChange={handleChange}
                  className="rounded-[1.25rem] border border-zinc-200 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-zinc-900 focus:shadow-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-zinc-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me a bit about your project or message"
                  value={formData.message}
                  onChange={handleChange}
                  className="resize-none rounded-[1.25rem] border border-zinc-200 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-zinc-900 focus:shadow-sm"
                />
              </div>

              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {status && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={`rounded-[1.5rem] border px-4 py-4 shadow-sm backdrop-blur-sm ${
                    status.type === "success"
                      ? "border-emerald-200 bg-emerald-50/80"
                      : "border-red-200 bg-red-50/80"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                        status.type === "success"
                          ? "bg-emerald-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {status.type === "success" ? "✓" : "!"}
                    </div>

                    <div>
                      <p className="text-sm font-medium text-zinc-900">
                        {status.type === "success"
                          ? "Message sent successfully"
                          : "Something went wrong"}
                      </p>
                      <p className="mt-0.5 text-sm leading-6 text-zinc-600">
                        {status.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.20)] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting
                    ? "Sending..."
                    : status?.type === "success"
                      ? "Sent ✓"
                      : "Send message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
