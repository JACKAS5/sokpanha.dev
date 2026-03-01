import { AppRoutes } from "./routes/AppRoutes";
import { routes } from "./routes/routesConfig";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function App() {
  return (
    <>
      <AppRoutes routes={routes} />
      <ScrollTop showAfter={400} /> 
    </>
  );
}

export default App;