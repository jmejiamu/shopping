import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../helper/constants ";

const ProDetails = () => {
  const [products, setProducts] = useState([]);

  let { id } = useParams();

  const getOneProduct = async () => {
    try {
      const res = await fetch(BASE_URL + `/products/${id}`);
      const resJson = await res.json();

      setProducts(resJson);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getOneProduct();
  }, []);
  return (
    <main class="container mt-5">
      <section class="mb-5">
        <hr />
        <h1 class="mt-5 mb-5 text-center">Products Details</h1>
        <div class="row">
          <div class="col-md-6 mb-4 mb-md-0">
            <div id="mdb-lightbox-ui"></div>

            <div class="mdb-lightbox">
              <div class="row product-gallery mx-1">
                <div class="col-12 mb-0">
                  <figure class="view overlay rounded z-depth-1 main-img">
                    <a href="../../asset/products.jpg" data-size="710x823">
                      <img
                        src={products.book_url}
                        class="img-fluid z-depth-1"
                      />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h5>{products.book_title}</h5>
            <p class="mb-2 text-muted text-uppercase small">Book</p>

            <div class="star-rating">
              <span class="bi bi-star-fill text-warning" data-rating="1"></span>
              <span class="bi bi-star-fill text-warning" data-rating="2"></span>
              <span class="bi bi-star-fill text-warning" data-rating="3"></span>
              <span class="bi bi-star-fill text-warning" data-rating="4"></span>
              <span class="bi bi-star-half text-warning" data-rating="5"></span>
              <input
                type="hidden"
                name="whatever1"
                class="rating-value"
                value="2.56"
              />
            </div>
            <p>
              <span class="mr-1">
                <strong>$12.99</strong>
              </span>
            </p>
            <p class="pt-1">{products.book_description}</p>
            <div class="table-responsive">
              <table class="table table-sm table-borderless mb-0">
                <tbody>
                  <tr>
                    <th class="pl-0 w-25" scope="row">
                      <strong>Model</strong>
                    </th>
                    <td>Shirt 5407X</td>
                  </tr>
                  <tr>
                    <th class="pl-0 w-25" scope="row">
                      <strong>Color</strong>
                    </th>
                    <td>Black</td>
                  </tr>
                  <tr>
                    <th class="pl-0 w-25" scope="row">
                      <strong>Delivery</strong>
                    </th>
                    <td>USA, Europe</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
            <div class="table-responsive mb-2">
              <table class="table table-sm table-borderless">
                <tbody>
                  <tr>
                    <td class="pl-0 pb-0 w-25">Quantity</td>
                  </tr>
                  <tr>
                    <td class="pl-0">
                      <div
                        class="
                          def-number-input
                          number-input
                          safari_only
                          mb-0
                          btn-group
                          "
                      >
                        <a
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          <i class="bi bi-dash"></i>
                        </a>
                        <input
                          class="quantity form-control"
                          min="0"
                          name="quantity"
                          value="1"
                          type="number"
                        />
                        <a
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          <i class="bi bi-plus"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button type="button" class="btn btn-primary btn-md mr-1 mb-2">
              Add to cart
            </button>
          </div>
        </div>
      </section>

      <section>
        <h1 class="text-center">Most Viewed</h1>
        <div class="row">
          <div class="col-md-4 mb-5">
            <div class="thumbnail card card-style">
              <a href="../../asset/products.jpg">
                <div class="bg-image hover-zoom">
                  <img
                    src="../../asset/products.jpg"
                    alt="Lights"
                    style={{ width: "100%" }}
                  />
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
              <a href="../../asset/products.jpg">
                <div class="bg-image hover-zoom">
                  <img
                    src="../../asset/products.jpg"
                    alt="Lights"
                    style={{ width: "100%" }}
                  />
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
              <a href="../../asset/products.jpg">
                <div class="bg-image hover-zoom">
                  <img
                    src="../../asset/products.jpg"
                    alt="Lights"
                    style={{ width: "100%" }}
                  />
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

export default ProDetails;
