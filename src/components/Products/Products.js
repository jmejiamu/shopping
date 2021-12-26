import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../action/products";
// import product from "../../assets/products.jpg";

const products = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/736x/bc/f3/30/bcf330bb9a25741122f132c29a72a4ea.jpg",
    price: 10,
    description: "Lorem ipsum...",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/736x/bc/f3/30/bcf330bb9a25741122f132c29a72a4ea.jpg",
    price: 10,
    description: "Lorem ipsum...",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/736x/bc/f3/30/bcf330bb9a25741122f132c29a72a4ea.jpg",
    price: 10,
    description: "Lorem ipsum...",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/736x/bc/f3/30/bcf330bb9a25741122f132c29a72a4ea.jpg",
    price: 10,
    description: "Lorem ipsum...",
  },
  {
    id: 5,
    image:
      "https://i.pinimg.com/736x/bc/f3/30/bcf330bb9a25741122f132c29a72a4ea.jpg",
    price: 10,
    description: "Lorem ipsum...",
  },
];
const Products = () => {
  const dispatch = useDispatch();

  const dta = useSelector((state) => state);
  console.log(dta);
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
          {products.map((product, index) => {
            return (
              <div key={product.id} className="col-md-4 mb-5">
                <div className="thumbnail card card-style">
                  <a href="./pages/product-details/index.html">
                    <div className="bg-image hover-zoom">
                      <img
                        src={product.image}
                        alt="Lights"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </a>
                  <div className="caption d-flex justify-content-between">
                    <p>{product.description}</p>
                    <p>${product.price}</p>
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
