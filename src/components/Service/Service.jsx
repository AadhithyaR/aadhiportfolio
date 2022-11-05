import React from "react";
import "./Service.scss";

function Service() {
  return (
    <div className="service" id="service">

    <div className="service component__space" id="Services">

      <div className="heading">
        <h1 className="heading">Services</h1>
        
      </div>

      <div className="containers">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon c1">
              <i className="fa fa-laptop"></i>

              </div>
              
              <div className="service__meta">
                <h1 className="service__text c11">Client Side Development</h1>
                <p className="p service__text p__color">
                Design everything a website user sees and interacts with.
                </p>
                
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon c2">
              <i className="fa fa-users"></i>
              </div>
              <div className="service__meta">
                <h1 className="service__text c22">Responsive Design</h1>
                <p className="p service__text p__color">
                Allow a website to smoothly adapt to various screen sizes
                </p>
                
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon c3">
                <i className="fa fa-image"></i>
                  
               
              </div>
              <div className="service__meta">
                <h1 className="service__text c33">Creative Design</h1>
                <p className="p service__text p__color">
                Innovative Ui design skills for a Website</p>
                
              </div>
            </div>
          </div>

         

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;