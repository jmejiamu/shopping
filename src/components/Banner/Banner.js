import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <h1 className="fw-light text-white">Buy More</h1>
            <p className="lead text-white">Pay Less</p>
            <a href="#checkitout" className="btn btn-danger custom-css-btn">
              Check it out!
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
