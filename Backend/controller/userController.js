// controllers/userController.js
const User = require('../models/user');
const mongoose = require('mongoose')

exports.registerUser = async (req, res) => {
    try {
        const { fullname, username, email, phone, studentId, password, repass } = req.body;

        if(password != repass) {
            return res.status(400).json({ success: false, message: 'Mật khẩu không trùng khớp!' });
        }

        else {
            const newUser = new User({
                fullname,
                username,
                email,
                phone,
                studentId,
                password
            });
    
            await newUser.save();
    
            return res.status(201).json({ success: true, message: 'Đăng ký thành công!' });
        }
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ success: false, message: 'Một trong các trường không hợp lệ!' });
        } else if (error.code === 11000) { 
            return res.status(400).json({ success: false, message: 'Tài khoản đã tồn tại!' });
        }
        console.error('Lỗi khi đăng ký:', error);
        return res.status(500).json({ success: false, message: 'Đã xảy ra lỗi khi đăng ký.' });
    }
};
