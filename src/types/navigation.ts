import type { SVGProps } from "react";

export interface NavItem {
  label: string;
  path: string;
  icon?: React.ComponentType<SVGProps<SVGSVGElement>>; 
  children?: NavItem[];
  protected?: boolean;
}