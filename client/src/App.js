import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import TechStack from "./pages/TechStack/TechStack";
import WorkExp from "./pages/WorkExp/WorkExp";
import Projects from "./pages/projects/Projects";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from 'react-reveal/Tada';

function App() {
  const [theme] = useTheme();

  return (
    <>
      <div id={theme}>
        <Layout />
        <div className="container">
          <About />
          <Education />
          <TechStack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">
              Made With 😍 RaazPortfolio &copy; 2023
            </h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop title="Move to Top" smooth color="#f29f67" style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }} />

    </>
  );
}

export default App;
