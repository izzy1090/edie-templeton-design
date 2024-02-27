import Route from './components/route';
import NavMenuPage from "./pages/NavMenuPage";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import FooterPage from './pages/FooterPage';

function App() {
  return (
  <>
    <Route path="/">
      <NavMenuPage/>
      <HomePage/>
      <FooterPage/>
    </Route>
    <Route path="/gallery">
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
