import { Mail, Phone, MapPin, Send, Github, Linkedin,  } from "lucide-react";
import type { ContactItem, SocialLink } from "../types/contact";

export const CONTACT_CONFIG = {
  header: {
    kicker: "Available for hire",
    title: "Let's build something extraordinary.",
    description: "I'm currently available for freelance projects and full-time roles. If you have an idea, let's make it a reality.",
  },
  details: [
    { 
      label: "Email", 
      value: "praksokpanha12@gmail.com", 
      href: "mailto:praksokpanha12@gmail.com", 
      icon: Mail 
    },
    { 
      label: "Phone", 
      value: "+855 95 742 402", 
      href: "tel:+85595742402", 
      icon: Phone 
    },
    { 
      label: "Telegram", 
      value: "@sokpanha05", 
      href: "https://t.me/sokpanha05", 
      icon: Send 
    },
    { 
      label: "Location", 
      value: "Phnom Penh, Cambodia", 
      href: "https://maps.google.com/?q=Phnom+Penh", 
      icon: MapPin 
    },
  ] as ContactItem[],
  socials: [
    { name: "GitHub", href: "https://github.com/JACKAS5", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/sokpanha-prak-b88540350", icon: Linkedin },
    { name: "Telegram", href: "https://t.me/sokpanha05", icon: Send },
  ] as SocialLink[],
};