import type { IconType } from "react-icons";

export type Category = "Frontend" | "Backend" | "Fullstack";

export type TechStack = {
  name: string;
  icon: IconType;
  color: string;
};

export type Project = {
  title: string;
  description: string;
  tech: TechStack[];
  image: string;
  github: string;
  demo: string;
  category: Category;
};