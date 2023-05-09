const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('upload'));
const cors = require("cors");
app.use(cors());
const auth = require("./routes/athan");
const books = require("./routes/books");
const chapters = require("./routes/chapters");
const history = require("./routes/history");
const requsets = require("./routes/requsets");
const showpdf = require("./routes/showpdf");

app.listen(4000, "localhost", () => {
    console.log("SERVER IS RUNNING");

});

app.use("/auth", auth);
app.use("/books", books);
app.use("/chapters", chapters);
app.use("/history", history);
app.use("/requsets", requsets);
app.use("/showpdf", showpdf);