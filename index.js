import express from "express";
import ejs from "ejs";
import path from "path";

const app = express();
const port = 3000;
const __dirname = import.meta.dirname;

//This is the path for the header.ejs and footer.ejs
app.use(express.static("partials"));
//This is the path for the public foler that contains the styles/main.css
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/publications", (req, res) => {
    res.render("index.ejs");
});

app.get("/teaching", (req, res) => {
    res.render("index.ejs");
});

app.get("/media", (req, res) => {
    res.render("index.ejs");
});

app.get("/contact", (req, res) => {
    res.render("index.ejs");
});

app.listen( port, (err) => {
    if (err) console.log(err);
    console.log(`Server stated at port: ${port}`);
});
