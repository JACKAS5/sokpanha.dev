import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
// Import the types you just defined
import type { FormStatus, ContactFormValues } from "../../types/contact";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  
  // Use ContactFormValues here
  const [form, setForm] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // This is now type-safe thanks to ContactFormValues
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call logic
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted successfully:", form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 text-center space-y-4 shadow-xl animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Sent Successfully!</h3>
        <p className="text-gray-600 dark:text-gray-400">Thanks for reaching out. I'll get back to you shortly.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="text-blue-600 font-medium hover:underline pt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden"
    >
      {/* Loading State Overlay */}
      {status === "loading" && (
        <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-[2px] z-10 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Input Fields */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="email@example.com"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Tell me about your project..."
          className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-500 dark:text-white outline-none transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>
    </form>
  );
}