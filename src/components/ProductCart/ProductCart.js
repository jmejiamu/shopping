import React from "react";
import { useSelector } from "react-redux";

const ProductCart = () => {
  const { cart } = useSelector((state) => state.products);
  return (
    <main>
      <section>
        <div class="px-4 px-lg-0 mt-5">
          <div class="pb-5">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col" class="border-0 bg-light">
                            <div class="p-2 px-3 text-uppercase">Product</div>
                          </th>
                          <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">Price</div>
                          </th>
                          <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">Quantity</div>
                          </th>
                          <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">Remove</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => {
                          return (
                            <tr>
                              <th scope="row" class="border-0">
                                <div class="p-2">
                                  <img
                                    src={item.pro_url}
                                    alt=""
                                    width="70"
                                    class="img-fluid rounded shadow-sm"
                                  />
                                  <div class="ml-3 d-inline-block align-middle">
                                    <h5 class="mb-0">
                                      <a
                                        href="#"
                                        class="
                                      text-dark
                                      d-inline-block
                                      align-middle
                                    "
                                      >
                                        {item.pro_name}
                                      </a>
                                    </h5>
                                    <span
                                      class="
                                    text-muted
                                    font-weight-normal font-italic
                                    d-block
                                  "
                                    >
                                      Category: Technology
                                    </span>
                                  </div>
                                </div>
                              </th>
                              <td class="border-0 align-middle">
                                <strong>${item.price}</strong>
                              </td>
                              <td class="border-0 align-middle">
                                <strong>1</strong>
                              </td>
                              <td class="border-0 align-middle">
                                <a href="#" class="text-dark">
                                  <i class="bi bi-trash"></i>
                                </a>
                              </td>
                            </tr>
                          );
                        })}

                        {/* <tr>
                          <th scope="row" class="border-0">
                            <div class="p-2">
                              <img
                                src="../../asset/products.jpg"
                                alt=""
                                width="70"
                                class="img-fluid rounded shadow-sm"
                              />
                              <div class="ml-3 d-inline-block align-middle">
                                <h5 class="mb-0">
                                  <a
                                    href="#"
                                    class="
                                      text-dark
                                      d-inline-block
                                      align-middle
                                    "
                                  >
                                    product B
                                  </a>
                                </h5>
                                <span
                                  class="
                                    text-muted
                                    font-weight-normal font-italic
                                    d-block
                                  "
                                >
                                  Category: Technology
                                </span>
                              </div>
                            </div>
                          </th>
                          <td class="border-0 align-middle">
                            <strong>$10</strong>
                          </td>
                          <td class="border-0 align-middle">
                            <strong>1</strong>
                          </td>
                          <td class="border-0 align-middle">
                            <a href="#" class="text-dark">
                              <i class="bi bi-trash"></i>
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <th scope="row" class="border-0">
                            <div class="p-2">
                              <img
                                src="../../asset/products.jpg"
                                alt=""
                                width="70"
                                class="img-fluid rounded shadow-sm"
                              />
                              <div class="ml-3 d-inline-block align-middle">
                                <h5 class="mb-0">
                                  <a
                                    href="#"
                                    class="
                                      text-dark
                                      d-inline-block
                                      align-middle
                                    "
                                  >
                                    product C
                                  </a>
                                </h5>
                                <span
                                  class="
                                    text-muted
                                    font-weight-normal font-italic
                                    d-block
                                  "
                                >
                                  Category: Technology
                                </span>
                              </div>
                            </div>
                          </th>
                          <td class="border-0 align-middle">
                            <strong>$10</strong>
                          </td>
                          <td class="border-0 align-middle">
                            <strong>1</strong>
                          </td>
                          <td class="border-0 align-middle">
                            <a href="#" class="text-dark">
                              <i class="bi bi-trash"></i>
                            </a>
                          </td>
                        </tr> */}
                        <tfoot>
                          <tr>
                            <td class="1 border-0 align-middle">
                              <strong>Total:</strong>
                            </td>
                            <td class="border-0 align-middle">
                              <strong id="main-total">$0</strong>
                            </td>
                            <td class="border-0 align-middle">
                              <strong id="product-quantity">0</strong>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-0 align-middle">
                              <button class="btn btn-primary">
                                Check out{" "}
                              </button>
                            </td>
                          </tr>
                        </tfoot>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductCart;
