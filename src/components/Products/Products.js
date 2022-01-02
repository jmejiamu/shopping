import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../action/products";
// import ProductCard from "./components/ProductCard/ProductCard";

const Products = () => {
  const dispatch = useDispatch();

  const { productsList } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <main>
      <section className="container">
        <h1 id="checkitout" className="text-center mt-5 mb-5">
          Products
        </h1>
        <div className="row">
          {productsList.map((product, index) => {
            return (
              <div key={product.id} className="col-md-4 mb-5">
                <div className="thumbnail card card-style">
                  <a href="./pages/product-details/index.html">
                    <div className="bg-image hover-zoom">
                      <img
                        src={product.book_url}
                        alt="Lights"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </a>
                  <div className="caption d-flex justify-content-between">
                    <p>{product.book_description}</p>
                    <p>${product.book_cost}</p>
                  </div>
                  <button
                    type="button"
                    // onClick="updateCartItem();"
                    className="btn btn-primary btn-block"
                  >
                    Add
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Products;
