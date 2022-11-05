import "./intro.scss";
import { Typewriter } from "react-simple-typewriter";
import { GitHub, LinkedIn } from "@material-ui/icons";

export default function Intro() {
  
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="i-bg">
          <img src="assets/k.jpg" alt="" className="i-img" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hey, I'm</h2>
          <h1>Aadhithya Rajan</h1>
          <h3>
            self-taught{" "}
            <span>
              <Typewriter
                words={[
                  " Front End Web Developer.",
                  " React Js Developer.",
                  " UI Designer.",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={67}
                delaySpeed={1000}
              />
            </span>
          </h3>

          <div className="icons">
            <GitHub
              className="icon"
              onClick={() =>
                window.open("https://github.com/AadhithyaR", "_blank")
              }
            />
            <LinkedIn className="icon" onClick={() =>
                window.open("https://www.linkedin.com/in/aadhithya-rajan-9a91241a1/", "_blank")
              }/>
          </div>
        </div>
       
      </div>
    </div>
  );
}
