import React from 'react'
import { useNavigate } from "react-router-dom";

function Hero() {

    let navigate = useNavigate();
    const navigationTo = () => {
        navigate('/recipe');
    }

     let activeImageId = 1;
     let nextImageId = 1;
  
     setInterval(function () {
       nextImageId = nextImageId + 1;
       if (nextImageId < 2) {
         document.getElementById("content" + activeImageId).classList.replace("visible", "hidden");
         document.getElementById("content" + nextImageId).classList.replace("hidden", "visible");
         activeImageId = nextImageId;
  
       } else {
         document.getElementById("content" + activeImageId).classList.replace("visible", "hidden");
         document.getElementById("content" + nextImageId).classList.replace("hidden", "visible");
         activeImageId = 2;
         nextImageId = 0;
  
       }
     }, 20000);

    return (
        <>
            <section id="hero" className="hero">
                <div className="container py-5 ">
                    <div className="overlay_shape">
                        <div className="row flex-column-reverse flex-lg-row  py-4 visible"  id="content1">
                            <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12 m-auto ">
                                <h5>Welcome To <span> Foody</span></h5>
                                <h1> Hungry... You know what A hungry man is an angry man!</h1>
                                 <p>Food is the ingredients that binds Us together...
                                 Nothing brings people together like Good Food...
                                 Food is any substance consumed to provide nutritional support for an organism.</p>
                                    <button className="hero-btn" onClick={navigationTo}>Get Started</button>
                            </div>
                            <div className=" col-xl-6 col-lg-4 col-md-6 col-sm-12 col-12  m-auto ">
                                <img src="../images/h1.png" alt="svf"  className='img-fluid ' />
                            </div>
                        </div>
                        <div className="row flex-column-reverse flex-lg-row  py-4 hidden"  id="content2">
                            <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12 m-auto ">
                                <h5>Welcome To <span> Foody</span></h5>
                                <h1 >No one is born a great cook, one learns by doing</h1>
                                 <p>Food is the ingredients that binds Us together...
                                 Nothing brings people together like Good Food...
                                 Food is any substance consumed to provide nutritional support for an organism.</p>
                                    <button className="hero-btn" onClick={navigationTo}>Get Started</button>
                            </div>
                            <div className=" col-xl-6 col-lg-4 col-md-6 col-sm-12 col-12  m-auto ">
                                <img src="../images/h2.png" alt="svf"  className='img-fluid ' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero