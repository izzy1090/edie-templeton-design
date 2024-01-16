import Route from './components/route';
import NavMenuPage from "./pages/NavMenuPage";
import ImagesPage from "./pages/ImagesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
  <>
    <Route path="/">
      <NavMenuPage/>
      <ImagesPage/>
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
