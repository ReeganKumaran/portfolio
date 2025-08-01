import React, { useEffect } from "react";
import { useTheme } from "../Context/Theme";

function Navbar() {
  const { theme } = useTheme();
  // const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "services", "contact"];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarOffset = 0;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - navbarOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
    // setVisible(false);
  };
  return (
    <div className="absolute top-3 left-0 w-full z-50">
      <div className="flex justify-center items-center">
        <div className=" text-white rounded w-[99%] py-2 px-4">
          <div className="flex justify-between items-center">
            <div
              className="text-4xl font-thin bungee flex items-center"
              style={{ color: theme.text }}
            >
              {" "}
              &#60; <span className="text-xl">Reegan </span>
              /&#62;
            </div>
            <div className="flex justify-between w-[20%]">
              <div className="cursor-pointer caret-transparent select-none">
                Home
              </div>
              <div className="cursor-pointer caret-transparent select-none">
                About
              </div>

              <div
                onClick={() => scrollToSection("contact")}
                className="cursor-pointer caret-transparent select-none"
              >
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
