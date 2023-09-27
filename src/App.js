import Route from './components/Route';
import NavMenuPage from "./pages/NavMenuPage";
import Work from "./pages/Contact";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
  <>
    <Route path="/">
      <NavMenuPage/>
    </Route>
    <Route path="/work">
      <Work/>
    </Route>
    <Route path="/about">
      <About/>
    </Route>
    <Route path="/contact">
      <Contact/>
    </Route>
  </>
  );
}

export default App;
