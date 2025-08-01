import About from "./Component/About";
import "./App.css";
import Navbar from "./Component/Navbar";
import Skill from "./Component/Skill";
import ContactFooter from "./Component/ContactFooter";

function App() {
  return (
    <>
  
    <div className="">

      <Navbar/>
      <About /> 
      <Skill/>
      <ContactFooter/>
    </div>
    </>
  );
}

export default App;
