export default function SocialLinks() {
  return (
    <div className="text-center">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Connect With Me
      </h3>

      <div className="flex flex-wrap justify-center gap-6">

        <a
          href="https://github.com/"
          target="_blank"
          className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 transition"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 transition"
        >
          LinkedIn
        </a>

        <a
          href="https://t.me/yourusername"
          target="_blank"
          className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 transition"
        >
          Telegram
        </a>

        <a
          href="tel:+85512345678"
          className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 transition"
        >
          Call Me
        </a>

      </div>
    </div>
  );
}