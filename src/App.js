import Route from './components/route';
import NavMenuPage from "./pages/NavMenuPage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import FooterPage from './pages/FooterPage';

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
