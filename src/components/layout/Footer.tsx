import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    // REMOVED bg-gray-900 to inherit from MainLayout (White or Black)
    // ADDED h-14 to match Navbar height for symmetry
    <footer className="w-full border-t border-gray-200 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright - Simplified typography */}
        <p className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} <span className="text-gray-900 dark:text-white">Sokpanha Prak</span>. All rights reserved.
        </p>

        {/* Social Links - Matching your Contact page icons style */}
        <div className="flex items-center space-x-6">
          <a
            href="https://www.linkedin.com/in/sokpanha-prak-b88540350"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/JACKAS5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="mailto:praksokpanha12@gmail.com"
            className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-all duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;