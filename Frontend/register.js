// routes/register.js
const express = require('express');
const path = require('path');
const router = express.Router();
const mongoose = require("mongoose");

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

router.post('/', (req, res) => {
  // Lấy dữ liệu từ body của yêu cầu
  const {
    email: email,
    studentId: studentId,
    password: password,
    confirmPassword: confirmPassword
    } = req.body;

    if (password != confirmPassword) {
        return res.json({ success: false, message: 'Mật khẩu không trùng khớp!' });
    }

    const userSchema = new mongoose.Schema({
        name: String,
        email: String,
        studentId: Number,
        password: String,
        confirmPassword: String
    });

    const Calendly = mongoose.model('Calendly', userSchema);
    
    // Định nghĩa model từ schema
    Calendly.findOne({ email: email })
        .then(u => {
            if (u) {
                console.log('Found user:', u);
                return res.json({ success: false, message: 'Tài khoản đã tồn tại!' });
            } else {
                // Tạo một instance mới của Calendly model
                const newUser = new Calendly({
                    name: String,
                    email: String,
                    studentId: Number,
                    password: String,
                    confirmPassword: String
                });

                // Lưu bản ghi vào cơ sở dữ liệu
                console.log(newUser);
                return newUser.save();

            }
        })
        .then(() => {
            console.log('User saved successfully');
            res.json({ success: true, message: 'Đăng ký thành công!' });
        })
        .catch(err => {
            console.error('Error:', err);
            res.json({ success: false, message: 'Đã xảy ra lỗi!' });
        });


  // Thực hiện xử lý đăng ký ở đây, ví dụ:
  // Lưu thông tin người dùng vào cơ sở dữ liệu, gửi email xác nhận, vv.

  // Trả về dữ liệu JSON với thông báo thành công
  res.json({ success: true, message: 'Đăng ký thành công!' });
});

module.exports = router;
