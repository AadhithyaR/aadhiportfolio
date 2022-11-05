import React from "react";
import "./about.scss";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="section">
		<div className="container">
			<div className="content-section">
				<div className="title">
					<h1>About Me</h1>
				</div>
				<div className="content">
					<p>I am Aadhithya Rajan, a self taught front end web developer based in Kerala.  I now have experience in programming after I successfully created a portfolio website as a result of determination and hard work. If you decide to recruit me as a front end web developer, I look forward to putting further efforts in developing and nourishing your company's technical support through my passion and experience as a web developer.</p>
					<div className="button">
						<a href="./assets/pdf/Aadhithya Rajan - Updated CV - 2022.pdf" target="_blank">Download CV</a>
					</div>
				</div>
				
			</div>
			<div className="image-section">
				<img src="./assets/aa.jpg" alt=""/>
			</div>
		</div>
	</div>
    </div>
  );
};

export default About;


