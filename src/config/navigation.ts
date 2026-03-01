import type { NavItem } from "../types/navigation";
import { IconHome, IconUser, IconFolder, IconMail } from '@tabler/icons-react';

export const navigation: NavItem[] = [
  { label: "Home", path: "/", icon: IconHome },
  { label: "About", path: "/about", icon: IconUser },
  { label: "Projects", path: "/projects", icon: IconFolder },
  { label: "Contact", path: "/contact", icon: IconMail },
];