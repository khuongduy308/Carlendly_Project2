
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const registerRoute = require('./register.js');

const DB_URI = 'mongodb+srv://adung1703:Adung_2003@project2.8aaaent.mongodb.net/?retryWrites=true&w=majority&appName=Project2';

const app = express();
const port = 3000;

const mongoose = require("mongoose");

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection successful...");
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err.message);
  })


// Sử dụng middleware để phục vụ các tệp tĩnh từ thư mục public
app.use(express.static(path.join(__dirname)));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/register', registerRoute);

// Khởi động server
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
