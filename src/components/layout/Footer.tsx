import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Sokpanha Prak. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-white transition"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;