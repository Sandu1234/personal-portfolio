import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Qualifications } from "./components/Qualifications"; 
import {Achievements} from "./components/Achievements"
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Qualifications /> 
      <Achievements/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
