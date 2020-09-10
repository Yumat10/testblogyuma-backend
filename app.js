const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

app.use(cors());
app.use(bodyParser.json());

const blogsRoute = require("./handlers/blogPosts");

app.use("/blogs", blogsRoute);

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });

app.listen(process.env.PORT || 3000);
