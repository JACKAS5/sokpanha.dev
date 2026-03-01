import type { ReactNode } from "react";

export interface AppRoute {
  path: string;
  element: ReactNode;
  layout?: React.ComponentType<{ children: ReactNode }>;
  children?: AppRoute[];
  protected?: boolean; 
  meta?: { title?: string; description?: string }; // for SEO or breadcrumbs
  icon?: ReactNode; 
}