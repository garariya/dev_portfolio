// ContactSection.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import SectionHeading from "./SectionHeading";

const ContactSection = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      type: formData.get("type"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      toast.success("Message sent successfully.");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16">
      <SectionHeading line1="GET IN" line2="TOUCH" />

      <motion.form
        onSubmit={handleSubmit}
        className="mt-14 space-y-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Field label="Name">
            <input
              required
              name="name"
              placeholder="YOUR NAME"
              className="input-field"
            />
          </Field>

          <Field label="Email">
            <input
              required
              type="email"
              name="email"
              placeholder="YOUR@EMAIL.COM"
              className="input-field"
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Field label="Inquiry Type">
            <select required name="type" defaultValue="" className="input-field">
              <option value="" disabled>Select Type</option>
              <option>General Inquiry</option>
              <option>Project Idea</option>
              <option>Collaboration</option>
              <option>Just Saying Hi</option>
              <option>Other</option>
            </select>
          </Field>

          <Field label="Subject">
            <input
              required
              name="subject"
              placeholder="WHAT'S THIS ABOUT?"
              className="input-field"
            />
          </Field>
        </div>

        <Field label="Message">
          <textarea
            required
            name="message"
            rows={5}
            placeholder="HOW CAN I HELP YOU?"
            className="input-field resize-none"
          />
        </Field>

        <button type="submit" disabled={submitting} className="btn-neon w-full py-6">
          {submitting ? "SENDING..." : "SAY HELLO"}
        </button>
      </motion.form>
    </section>
  );
};

const Field = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <label className="block">
    <span className="block mb-3 text-xs font-bold uppercase">{label}</span>
    {children}
  </label>
);

export default ContactSection;