const path = require("node:path");
const express = require("express");
const indexRouter = require("./routes/indexRouter");

const PORT = 3000;
const app = express();
const viewsPath = path.join(__dirname, "views");
const staticFilesPath = path.join(__dirname, "public");

app.set("views", viewsPath);
app.set("view engine", "ejs");
app.use(express.static(staticFilesPath));
app.use(express.urlencoded({ extended: true }));

app.use(indexRouter);

app.use("/", (req, res) => {
  res.status(404).send("Bad Request");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
