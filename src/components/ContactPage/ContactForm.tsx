import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700"
    >
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300 shadow-md"
      >
        Send Message
      </button>
    </form>
  );
}