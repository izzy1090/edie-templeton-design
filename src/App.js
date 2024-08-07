import Route from './components/route.js';
import NavMenuPage from "./pages/NavMenuPage.js";
import AboutPage from "./pages/AboutPage.js";
import GalleryPage from "./pages/GalleryPage.js";
import ContactPage from "./pages/ContactPage.js";
import FooterPage from './pages/FooterPage.js';

function App() {
  return (
  <>
    <Route path="/about">
      <NavMenuPage/>
      <AboutPage/>
      <FooterPage/>
    </Route>
    <Route path="/">
      <NavMenuPage/>
      <GalleryPage/>
      <FooterPage/>
    </Route>
    <Route path="/contact">
      <NavMenuPage/>
      <ContactPage/>
      <FooterPage/>
    </Route>
  </>
  );
}

export default App;
