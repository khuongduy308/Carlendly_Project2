// controllers/userController.js
const User = require('../models/user');
const mongoose = require('mongoose')

// Hàm kiểm tra xem tài khoản đã tồn tại hay chưa
const isUserExist = async (username, email) => {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    return !!existingUser;
};

// Hàm kiểm tra xem có trường nào trống không
const isEmptyField = (fields) => {
    for (const field in fields) {
        if (!fields[field]) {
            return true; // Trả về true nếu có ít nhất một trường trống
        }
    }
    return false; // Trả về false nếu tất cả các trường đều không trống
};

exports.registerUser = async (req, res) => {
    try {
        const { fullname, username, email, phone, studentId, password, repass } = req.body;

        // Kết nối với database
        const UserDB = mongoose.model('users', {
            fullname: String,
            username: String,
            email: String,
            phone: String,
            studentId: String,
            password: String
          });

        if(password != repass) {
            res.status(400).json({ success: false, message: 'Mật khẩu không trùng khớp!' });
            return;
        }

        if (isEmptyField({fullname, username, email, phone, studentId, password, repass})) {
            res.status(400).json({ success: false, message: 'Vui lòng điền đầy đủ thông tin!' });
            return;
        }
        
        const userExists = await isUserExist(username, email);
        if (userExists) {
            res.status(400).json({ success: false, message: 'Tài khoản đã tồn tại!' });
            return;
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
    
            res.status(201).json({ success: true, message: 'Đăng ký thành công!' });
        }
    } catch (error) {
        console.error('Lỗi khi đăng ký:', error);
        res.status(500).json({ success: false, message: 'Đã xảy ra lỗi khi đăng ký.' });
    }
};
