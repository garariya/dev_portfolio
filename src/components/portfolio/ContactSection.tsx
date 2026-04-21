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
    <section id="contact" className="py-16">
      <SectionHeading line1="LET'S WORK" line2="TOGETHER" />

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-14 space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Field label="Name">
            <input
              required
              name="name"
              placeholder="YOUR NAME"
              className="input-field uppercase font-bold tracking-widest text-[10px]"
            />
          </Field>
          <Field label="Email">
            <input
              required
              type="email"
              name="email"
              placeholder="YOUR@EMAIL.COM"
              className="input-field uppercase font-bold tracking-widest text-[10px]"
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Field label="Project Type">
            <select required name="type" className="input-field uppercase font-bold tracking-widest text-[10px]" defaultValue="">
              <option value="" disabled>SELECT TYPE…</option>
              <option>Web App / SaaS</option>
              <option>AI Automation</option>
              <option>Landing Page</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Budget">
            <select required name="budget" className="input-field uppercase font-bold tracking-widest text-[10px]" defaultValue="">
              <option value="" disabled>SELECT BUDGET…</option>
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
            placeholder="TELL ME ABOUT YOUR PROJECT GOALS…"
            className="input-field resize-none uppercase font-bold tracking-widest text-[10px]"
          />
        </Field>

        <button
          type="submit"
          disabled={submitting}
          className="btn-neon w-full py-6"
        >
          {submitting ? "SENDING…" : "INITIATE PROJECT"}
        </button>
      </motion.form>
    </section>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="block text-[10px] font-black tracking-[0.3em] text-primary uppercase mb-3">
      {label}
    </span>
    {children}
  </label>
);

export default ContactSection;
