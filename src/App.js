import Route from './components/route';
import NavMenuPage from "./pages/NavMenuPage";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/galleryPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
  <>
    <Route path="/">
      <NavMenuPage/>
      <HomePage/>
    </Route>
    <Route path="/gallery">
      <NavMenuPage/>
      <GalleryPage/>
    </Route>
    <Route path="/contact">
      <NavMenuPage/>
      <ContactPage/>
    </Route>
  </>
  );
}

export default App;
