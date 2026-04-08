import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";
import { sendContactEmail } from "../../lib/emailjs";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await sendContactEmail({
        name: form.name,
        from_email: form.email,
        message: form.message,
        time: new Date().toLocaleString("en-US", {
          weekday: "short", year: "numeric", month: "short",
          day: "numeric", hour: "2-digit", minute: "2-digit",
        }),
      });
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Email send failed:", err);
      setStatus("error");
    }
  };

  const isDisabled = status === "loading" || !form.name || !form.email || !form.message;

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center justify-center p-12 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 text-center space-y-4 shadow-xl"
      >
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t("contact.form.success.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{t("contact.form.success.desc")}</p>
        <button
          onClick={() => setStatus("idle")}
          className="text-blue-600 font-medium hover:underline pt-2"
        >
          {t("contact.form.success.again")}
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden"
    >
      {/* Loading Overlay */}
      {status === "loading" && (
        <div className="absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-sm z-10 flex items-center justify-center rounded-2xl">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Error Message */}
      {status === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-400">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          <p className="text-sm">{t("contact.form.error")}</p>
        </div>
      )}

      {/* Input Fields */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {t("contact.form.name")}
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder={t("contact.form.name.placeholder")}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {t("contact.form.email")}
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder={t("contact.form.email.placeholder")}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          {t("contact.form.message")}
        </label>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          placeholder={t("contact.form.message.placeholder")}
          className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isDisabled}
        className="group w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 disabled:opacity-50"
      >
        {status === "loading" ? t("contact.form.sending") : t("contact.form.send")}
        <Send
          size={18}
          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
        />
      </button>
    </form>
  );
}