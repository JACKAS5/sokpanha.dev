import type { AppRoute } from "../types/routes";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import AboutPage from "../pages/about/AboutPage";
import ProjectsPage from "../pages/project/ProjectsPage";
import ContactPage from "../pages/contact/ContactPage";
import LandingPage from "../pages/LandingPage";

export const routes: AppRoute[] = [
  {
    path: "/",
    element: <LandingPage />, 
    layout: MainLayout,
    meta: { title: "Home - Sokpanha Prak Portfolio" },
  },
  {
    path: "/home",
    element: <HomePage />, 
    layout: MainLayout,
  },
  {
    path: "/about",
    element: <AboutPage />, 
    layout: MainLayout,
  },
  {
    path: "/projects",
    element: <ProjectsPage />, 
    layout: MainLayout,
  },
  {
    path: "/contact",
    element: <ContactPage />, 
    layout: MainLayout,
  },
];