import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/intro"
import Skills from "./components/Skills/Skills"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Service from "./components/Service/Service";
function App() {
  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <About/>
        <Skills />
        <Service />
        <Contact />
      </div>
    </div>
  );
}

export default App;
