import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import SectionHeading from "./SectionHeading";

const ContactSection = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent — I'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  };

  return (
    <section id="contact" className="min-h-screen py-24">
      <SectionHeading line1="LET'S WORK" line2="TOGETHER" />

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-14 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Name">
            <input
              required
              name="name"
              placeholder="Your Name"
              className="input-field"
            />
          </Field>
          <Field label="Email">
            <input
              required
              type="email"
              name="email"
              placeholder="your@email.com"
              className="input-field"
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Project Type">
            <select required name="type" className="input-field" defaultValue="">
              <option value="" disabled>Select…</option>
              <option>Web App / SaaS</option>
              <option>AI Automation</option>
              <option>Landing Page</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Budget">
            <select required name="budget" className="input-field" defaultValue="">
              <option value="" disabled>Select…</option>
              <option>$1k — $5k</option>
              <option>$5k — $15k</option>
              <option>$15k — $50k</option>
              <option>$50k+</option>
            </select>
          </Field>
        </div>

        <Field label="Message">
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Tell me about your project…"
            className="input-field resize-none"
          />
        </Field>

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-lg shadow-glow hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Submit"}
        </button>
      </motion.form>
    </section>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="block text-sm text-muted-foreground mb-2 font-medium">
      {label}
    </span>
    {children}
  </label>
);

export default ContactSection;
