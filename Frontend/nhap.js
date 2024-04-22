// app.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Sử dụng middleware để phục vụ các tệp tĩnh từ thư mục public
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
