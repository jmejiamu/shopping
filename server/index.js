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
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
  },
  {
    id: 5,
    book_title: "Express",
    book_description:
      "Express Descrition Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias. ",
    book_cost: "78",
    book_url:
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
  },
  {
    id: 4,
    book_title: "JavaScript",
    book_description:
      "JavaScript Descrition Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias. ",
    book_cost: "10",
    book_url:
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
  },
  {
    id: 3,
    book_title: "Java",
    book_description:
      "Java Descrition Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
    book_cost: "30",
    book_url:
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
  },
  {
    id: 2,
    book_title: "Node JS",
    book_description:
      "Node Descrition Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
    book_cost: "40",
    book_url:
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
  },
  {
    id: 1,
    book_title: "React JS",
    book_description:
      "React Descrition Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias. ",
    book_cost: "15",
    book_url:
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
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
