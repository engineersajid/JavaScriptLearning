import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBaby,
  faMicrochip,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div className="greetings">
        <h2>Hello Dear</h2>
        <Greeting
          skill={"Mobile Application Developer and Computer Vision Researcher"}
          name={"Md. Sajedur Rahman"}
          hobby={"sining a song"}
        />

        <section className="services-section">
          <h3>Our Services</h3>
          <div className="ourServices">
            <OurServices
              icon={faMobileScreenButton}
              title={"Mobile Application"}
              description={
                "Mobile application built with flutter frameworks for cross-platform(os,android, web etc.)"
              }
            />
            <OurServices
              icon={faBaby}
              title={"UI/UX Design"}
              description={
                "Creating modern and user-friendly interfaces with focus on simplicity."
              }
            />
            <OurServices
              icon={faMicrochip}
              title={"AI Research"}
              description={
                "Focused on computer vision and deep learning model implementation."
              }
            />
            <OurServices
              icon={faMobileScreenButton}
              title={"Mobile Application"}
              description={
                "Mobile application built with flutter frameworks for cross-platform(os,android, web etc.)"
              }
            />
            <OurServices
              icon={faBaby}
              title={"UI/UX Design"}
              description={
                "Creating modern and user-friendly interfaces with focus on simplicity."
              }
            />
            <OurServices
              icon={faMicrochip}
              title={"AI Research"}
              description={
                "Focused on computer vision and deep learning model implementation."
              }
            />
          </div>
        </section>
      </div>
    </>
  );
}

function Greeting({ name, skill, hobby }) {
  return (
    <div className="greeting-text">
      <p>
        Hi, I'm <strong>{name}</strong>. I am a professional {skill}.
      </p>
      <p>My favourite hobby is {hobby}</p>
    </div>
  );
}

function OurServices({ icon, title, description }) {
  return (
    <div className="serviceInfo">
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={icon} />
      </div>
      <p className="service-title">{title}</p>
      <p className="service-desc">{description}</p>
    </div>
  );
}

export default App;
