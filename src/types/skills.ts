import type { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  category?: "Frontend" | "Backend" | "Tools" | "DevOps";
  level?: number;
}