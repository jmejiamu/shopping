import React from "react";
import product from "../../assets/products.jpg";
const Products = () => {
  return (
    <main>
      <section class="container">
        <h1 id="checkitout" class="text-center mt-5 mb-5">
          Products
        </h1>
        <div class="row">
          <div class="col-md-4 mb-5">
            <div class="thumbnail card card-style">
              <a href="./pages/product-details/index.html">
                <div class="bg-image hover-zoom">
                  <img src={product} alt="Lights" style={{ width: "100%" }} />
                </div>
              </a>
              <div class="caption d-flex justify-content-between">
                <p>Lorem ipsum..T.</p>
                <p>$10</p>
              </div>
              <button
                type="button"
                onclick="updateCartItem();"
                class="btn btn-primary btn-block"
              >
                Add
              </button>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="thumbnail card card-style">
              <a href="./pages/product-details/index.html">
                <div class="bg-image hover-zoom">
                  <img src={product} alt="Lights" style={{ width: "100%" }} />
                </div>
              </a>
              <div class="caption d-flex justify-content-between">
                <p>Lorem ipsum...</p>
                <p>$10</p>
              </div>
              <button
                type="button"
                onclick="updateCartItem();"
                class="btn btn-primary btn-block"
              >
                Add
              </button>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="thumbnail card card-style">
              <a href="./pages/product-details/index.html">
                <div class="bg-image hover-zoom">
                  <img src={product} alt="Lights" style={{ width: "100%" }} />
                </div>
              </a>
              <div class="caption d-flex justify-content-between">
                <p>Lorem ipsum...</p>
                <p>$10</p>
              </div>
              <button
                type="button"
                onclick="updateCartItem();"
                class="btn btn-primary btn-block"
              >
                Add
              </button>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="thumbnail card card-style">
              <a href="./pages/product-details/index.html">
                <div class="bg-image hover-zoom">
                  <img src={product} alt="Lights" style={{ width: "100%" }} />
                </div>
              </a>
              <div class="caption d-flex justify-content-between">
                <p>Lorem ipsum...</p>
                <p>$10</p>
              </div>
              <button
                type="button"
                onclick="updateCartItem();"
                class="btn btn-primary btn-block"
              >
                Add
              </button>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="thumbnail card card-style">
              <a href="./pages/product-details/index.html">
                <div class="bg-image hover-zoom">
                  <img src={product} alt="Lights" style={{ width: "100%" }} />
                </div>
              </a>
              <div class="caption d-flex justify-content-between">
                <p>Lorem ipsum...</p>
                <p>$10</p>
              </div>
              <button
                type="button"
                onclick="updateCartItem();"
                class="btn btn-primary btn-block"
              >
                Add
              </button>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="thumbnail card card-style">
              <a href="./pages/product-details/index.html">
                <div class="bg-image hover-zoom">
                  <img src={product} alt="Lights" style={{ width: "100%" }} />
                </div>
              </a>
              <div class="caption d-flex justify-content-between">
                <p>Lorem ipsum...</p>
                <p>$10</p>
              </div>
              <button
                type="button"
                onclick="updateCartItem();"
                class="btn btn-primary btn-block"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
