import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Home.css';
import Typewriter from 'typewriter-effect';
import Resume from '../../assests/docs/resume.pdf'
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';



const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : "light"))
  }
  return (
    <div>
      <>
        <div className="container-fluid home-container" id='home'>
          <div className="theme-btn" onClick={handleTheme}>
            {theme === 'light' ? <BsFillMoonFill size={30} /> : <BsFillSunFill size={30} />}

          </div>
          <div className="container home-content">
            <Fade right>
              <h2>Hi 👋 I'm a</h2>
              <h1><Typewriter
                options={{
                  strings: [
                    'FullStack Developer!',
                    'MERN Stack Developer!',
                    'Frontend Developer!',
                    'ReactJS Developer!'],
                  autoStart: true,
                  loop: true,
                }}
              /></h1>
            </Fade>
            <Fade bottom>
            <div className="home-buttons">
              <button className='btn btn-hire'>Hire Me</button>
              <a href={Resume} download="your_name.pdf" className='btn btn-cv'>My Resume</a>
            </div>
            </Fade>
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;
