const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const filmRouter = require("./routes/film.routes");

const PORT = process.env.PORT || 8081;

dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(filmRouter);

app.get("/ping", (req, res) => {
  res.json({ message: "PING SUCCESS" });
});

app.listen(PORT, () => {
  console.log(`APPLICATIN RUNNING in http://localhost:${PORT}`);
});
