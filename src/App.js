import Route from './components/Route';
import NavMenuPage from "./pages/NavMenuPage";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
  <>
    <Route path="/">
      <NavMenuPage/>
    </Route>
    <Route path="/work">
      <NavMenuPage/>
      <Work/>
    </Route>
    <Route path="/about">
      <NavMenuPage/>
      <About/>
    </Route>
    <Route path="/contact">
      <NavMenuPage/>
      <Contact/>
    </Route>
  </>
  );
}

export default App;
