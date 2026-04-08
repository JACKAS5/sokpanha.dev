import { ThemeProvider } from "./context/ThemeProvider";
import { LanguageProvider } from "./context/LanguageContext.tsx";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";
import ScrollTop from "./components/ScrollTop/ScrollTop.tsx";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainLayout>
          <LandingPage />
        </MainLayout>
        <ScrollTop showAfter={400} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;