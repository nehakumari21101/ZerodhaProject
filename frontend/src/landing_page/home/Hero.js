import React from "react";

const Hero = () => {
  return (
    <div className="container mb-5 mt-5 ">
      <div className="row text-center p-5 m-5">

        <img src="media/images/homeHero.png" alt="Hero image" className="mb-5"/>

        <h1 className="mt-5">Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs,bonds, and more
        </p>

        <button style={{width:"23%", margin:"0 auto"}} className="btn btn-primary fs-5 mb-5">Signup Now</button>
      </div>
    </div>
  );
};

export default Hero;