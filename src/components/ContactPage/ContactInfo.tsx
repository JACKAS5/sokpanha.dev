export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Get In Touch
      </h2>

      <p className="text-gray-600 dark:text-gray-300">
        I’m open to freelance work, collaborations, or full-time opportunities.
        Feel free to reach out anytime.
      </p>

      <div className="space-y-4 text-gray-700 dark:text-gray-300">

        {/* Email */}
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
          <a
            href="mailto:sokpanha@example.com"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            sokpanha@example.com
          </a>
        </div>

        {/* Phone */}
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
          <a
            href="tel:+85512345678"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            +855 12 345 678
          </a>
        </div>

        {/* Telegram */}
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Telegram</p>
          <a
            href="https://t.me/yourusername"
            target="_blank"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            @yourusername
          </a>
        </div>

        {/* Location */}
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
          <p>Phnom Penh, Cambodia</p>
        </div>

      </div>
    </div>
  );
}