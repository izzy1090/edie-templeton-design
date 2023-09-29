import Route from './components/Route';
import NavMenuPage from "./pages/NavMenuPage";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
  <>
    <Route path="/">
      <NavMenuPage/>
    </Route>
    <Route path="/work">
      <NavMenuPage/>
      <WorkPage/>
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
