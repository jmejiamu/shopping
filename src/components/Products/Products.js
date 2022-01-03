import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct, fetchData } from "../../action/products";
// import ProductCard from "./components/ProductCard/ProductCard";

const Products = () => {
  const dispatch = useDispatch();

  const { productsList, cart } = useSelector((state) => state.products);
  console.log(cart);

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  if (cart.lenght > 0) {
    sessionStorage.setItem("pro", JSON.stringify(cart));
  }

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
                  <Link to={`/details/${product.id}`}>
                    <div className="bg-image hover-zoom">
                      <img
                        src={product.book_url}
                        alt="Lights"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </Link>
                  <div className="caption d-flex justify-content-between">
                    <p>{product.book_title}</p>
                    <p>${product.book_cost}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(
                        addProduct(
                          product.id,
                          product.book_title,
                          product.book_url,
                          product.book_cost
                        )
                      );
                    }}
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
