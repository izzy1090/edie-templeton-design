import Route from './components/route';
import NavMenuPage from "./pages/NavMenuPage";
// import ImagesPage from "./pages/ImagesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { Suspense, lazy } from "react";

const ImagesPage = lazy(() => import('./pages/ImagesPage'))

function App() {
  return (
  <>
    <Route path="/">
      <NavMenuPage/>
        <Suspense fallback={<div>Component1 are loading please wait...</div>}>
        <ImagesPage/>
      </Suspense>
    </Route>
    <Route path="/about">
      <NavMenuPage/>
      <AboutPage/>
    </Route>
    <Route path="/contact">
      <NavMenuPage/>
      <ContactPage/>
    </Route>
  </>
  );
}

export default App;
