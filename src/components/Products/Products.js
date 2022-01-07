import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct, fetchData } from "../../action/products";
// import ProductCard from "./components/ProductCard/ProductCard";

const Products = () => {
  const [search, setSearch] = useState("");
  const [cartAdded, setCartAdded] = useState(0);
  const dispatch = useDispatch();

  const { productsList, cart } = useSelector((state) => state.products);
  console.log(cart);

  useEffect(() => {
    dispatch(fetchData());
    setCartAdded(cart.length);
    //This add to session store-  I may not need it
    // sessionStorage.setItem("products", JSON.stringify(cart));
  }, [cart]);

  //Use date to create a unique id
  const uniqueId = new Date();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const searcBooks = productsList.filter((booksname) =>
    booksname.book_title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <main>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Shopping Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <i className="bi bi-cart"></i>
                  <span id="addItem" className="badge badge-pill bg-danger">
                    {cartAdded}
                  </span>
                </Link>
              </li>

              <li className="nav-item mx-2">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={handleChange}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="container">
        <h1 id="checkitout" className="text-center mt-5 mb-5">
          Products
        </h1>
        <div className="row">
          {searcBooks.map((product, index) => {
            return (
              <div key={product.id} className="col-md-4 mb-5">
                <div className="thumbnail card card-style">
                  <Link to={`/details/${product.id}`}>
                    <div className="bg-image hover-zoom">
                      <img
                        src={product.book_url}
                        alt="Lights"
                        style={{ width: "100%", height: 500 }}
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
                          parseFloat(product.book_cost),
                          1,
                          uniqueId.getTime()
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
