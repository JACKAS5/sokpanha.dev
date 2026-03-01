import { Routes, Route } from "react-router-dom";
import type { AppRoute } from "../types/routes";

interface AppRoutesProps {
  routes: AppRoute[];
}

export const AppRoutes = ({ routes }: AppRoutesProps) => {
  const renderRoutes = (routes: AppRoute[]) =>
    routes.map((route) => {
      const Layout = route.layout ?? (({ children }: { children: React.ReactNode }) => <>{children}</>);
      return (
        <Route key={route.path} path={route.path} element={<Layout>{route.element}</Layout>}>
          {route.children && renderRoutes(route.children)}
        </Route>
      );
    });

  return <Routes>{renderRoutes(routes)}</Routes>;
};