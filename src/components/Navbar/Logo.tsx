import { scrollToSection } from "../../utils/scroll";

interface LogoProps {
  onClickHome?: () => void;
}

export default function Logo({ onClickHome }: LogoProps) {
  return (
    <button
      onClick={onClickHome ? onClickHome : () => scrollToSection("home")}
      className="text-[17px] font-black tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex-shrink-0"
    >
      Sokpanha<span className="text-blue-600">.</span>
    </button>
  );
}