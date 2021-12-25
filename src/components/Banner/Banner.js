import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <header class="masthead">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12 text-center">
            <h1 class="fw-light text-white">Buy More</h1>
            <p class="lead text-white">Pay Less</p>
            <a href="#checkitout" class="btn btn-danger custom-css-btn">
              Check it out!
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
