import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json({ type: "application/json" }));
app.use(logs);

let products = [
  {
    id: 6,
    book_title: "Spring boot",
    book_description:
      "Spring Boot Descrition Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias. ",
    book_cost: "101",
    book_url:
      "https://kbimages1-a.akamaihd.net/ecd5db80-72c2-4b84-9e1b-feffb6e91bb9/353/569/90/False/spring-microservices-with-spring-boot.jpg",
  },
  {
    id: 5,
    book_title: "Express",
    book_description:
      "Express Descrition Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias. ",
    book_cost: "78",
    book_url:
      "https://images-na.ssl-images-amazon.com/images/I/51MFfESp-KL._SX384_BO1,204,203,200_.jpg",
  },
  {
    id: 4,
    book_title: "JavaScript",
    book_description:
      "JavaScript Descrition Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias. ",
    book_cost: "10",
    book_url: "https://eloquentjavascript.net/img/cover.jpg",
  },
  {
    id: 3,
    book_title: "Java",
    book_description:
      "Java Descrition Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
    book_cost: "30",
    book_url:
      "https://www.codejava.net/images/articles/books/beginner-java/SamsTeachYourSelfJava.jpg",
  },
  {
    id: 2,
    book_title: "Node JS",
    book_description:
      "Node Descrition Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
    book_cost: "40",
    book_url: "https://m.media-amazon.com/images/I/51tPFqRdrjL._SL500_.jpg",
  },
  {
    id: 1,
    book_title: "React JS",
    book_description:
      "React Descrition Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias. ",
    book_cost: "15",
    book_url:
      "https://reactjsexample.com/content/images/2019/04/React-and-React-Native.jpg",
  },
];
app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === id);

  if (!product) {
    res.status(404);
    res.json({ message: "Product not found" });
  } else {
    res.status(200);
    res.json(product);
  }
});

app.listen(5500, () => {
  console.log("Server listen to port 5500");
});

function logs(req, res, next) {
  console.log(`${req.method}: ${req.originalUrl}`);
  next();
}
