import type { LucideIcon } from "lucide-react";

export interface ContactItem {
  label: string;
  value: string;
  href: string | null;
  icon: LucideIcon;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

// Helper type for the form keys
export type ContactFormField = keyof ContactFormValues;

export type FormStatus = "idle" | "loading" | "success" | "error";