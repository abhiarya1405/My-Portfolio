import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Header from "./MyComponents/header";
import { Home } from "./MyComponents/home";
import { About } from "./MyComponents/about"
import { Skills } from "./MyComponents/skills"
import { Projects } from "./MyComponents/projects"
import { Contacts } from "./MyComponents/contacts"
import { Footer } from "./MyComponents/footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route exact path="/" element={<Home />} render={()=>{
          return <Home />
        }}/>
        <Route exact path="/about" element={<About />} render={()=>{
          return <About />
        }}/>
        <Route exact path="/skills" element={<Skills />} render={()=>{
          return <Skills />
        }}/>
        <Route exact path="/projects" element={<Projects />} render={()=>{
          return <Projects />
        }}/>
        <Route exact path="/contacts" element={<Contacts />} render={()=>{
          return <Contacts />
        }}/>
      </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
