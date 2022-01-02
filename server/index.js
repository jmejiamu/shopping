import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json({ type: "application/json" }));
app.use(logs);

app.listen(5500, () => {
  console.log("Server listen to port 5500");
});

function logs(req, res, next) {
  console.log(`${req.method}: ${req.originalUrl}`);
  next();
}
