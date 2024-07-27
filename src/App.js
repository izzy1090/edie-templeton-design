import Route from './components/route';
import NavMenuPage from "./pages/NavMenuPage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import FooterPage from './pages/FooterPage';
import InstagramPage from './pages/InstagramPage';

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
    <Route path="/instagram">
      <InstagramPage/>
    </Route>
  </>
  );
}

export default App;
