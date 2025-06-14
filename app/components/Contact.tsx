"use client";
import { slideIn } from "@/app/utils/motion";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { SectionWrapper } from "./HigherOrderComponents";

// Types for form data and validation
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      message: "",
    });
    setRecaptchaToken(null);
    recaptchaRef.current?.reset();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!recaptchaToken) {
      alert("Please verify that you are not a robot.");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Sompa Rani Das",
          from_email: form.email,
          to_email: "omunite21@gmail.com",
          message: form.message,
          g_recaptcha_response: recaptchaToken,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );

      setSuccess(true);
      resetForm();
    } catch (error) {
      console.error("Email send error:", error);
      setSuccess(false);
      alert("Sorry! Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.95] w-full max-w-3xl bg-black-100 p-12 rounded-3xl mx-auto"
      >
        <p className="heroSubText">Get in Touch</p>
        <h3 className="heroHeadText">Contact.</h3>

        {success && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
            Thank you for reaching out! I will respond to you as soon as possible.
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 ${
                errors.name ? "border-red-500" : "border-transparent"
              } font-medium transition-colors`}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">{errors.name}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 ${
                errors.email ? "border-red-500" : "border-transparent"
              } font-medium transition-colors`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 ${
                errors.message ? "border-red-500" : "border-transparent"
              } font-medium transition-colors`}
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">{errors.message}</span>
            )}
          </label>

          <div className="mt-2">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={handleRecaptchaChange}
              theme="dark"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-tertiary hover:bg-tertiary/80"
            } transition-colors`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
