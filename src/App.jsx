import About from "./Component/About";
import "./App.css";
import Navbar from "./Component/Navbar";
import Skill from "./Component/Skill";
import ContactFooter from "./Component/ContactFooter";
import ThemeProvider from "./Context/Theme";
import TimeLine from "./Component/TimeLine";
// import { Timeline } from "./HelperComponent/TimeLineUI";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="">
          <section id="About">
            <Navbar />
            <About />
          </section>
          <section id="Skill">
            <Skill />
          </section>
          <section id="contact">
            <TimeLine/>
          </section>

          <section id="contact">
            <ContactFooter />
          </section>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
