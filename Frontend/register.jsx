import React, { useState } from 'react';

function SignUpForm() {
    const [formData, setFormData] = useState({
        fullname: '',
        username: '',
        email: '',
        phone: '',
        studentId: '',
        pass: '',
        re_pass: '',
        agreeTerm: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your form submission logic here
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            // Handle response from server
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error
        });
    };
    
    document.getElementById("register-form").addEventListener("signup", function(event) {
        // Ngăn chặn hành động mặc định của form (không gửi request)
        event.preventDefault();
        
        // Lấy các giá trị từ các trường input
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var studentId = document.getElementById("student-id").value;
        var password = document.getElementById("pass").value;
        var confirmPassword = document.getElementById("re_pass").value;
    
        // Tạo một object chứa dữ liệu
        var data = {
            name: name,
            email: email,
            studentId: studentId,
            password: password,
            confirmPassword: confirmPassword
        };
    
        // Gửi request POST đến endpoint /register trên server
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            // Xử lý kết quả trả về từ server
        })
        .catch(error => {
            console.error('Error:', error);
            // Xử lý lỗi nếu có
        });
    });

    return (
        <div className="main">
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Đăng ký</h2>
                            <form onSubmit={handleSubmit} className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="fullname"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="fullname" id="fullname" placeholder="Nhập Họ và tên" onChange={handleChange} value={formData.fullname}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username"><i className="zmdi zmdi-account-circle"></i></label>
                                    <input type="text" name="username" id="username" placeholder="Nhập Username" onChange={handleChange} value={formData.username}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Nhập Email" onChange={handleChange} value={formData.email}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone"><i className="zmdi zmdi-phone"></i></label>
                                    <input type="number" name="phone" id="phone" placeholder="Nhập Số điện thoại" onChange={handleChange} value={formData.phone}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="student-id"><i className="zmdi zmdi-card"></i></label>
                                    <input type="number" name="studentId" id="student-id" placeholder="Nhập Mã Số Sinh Viên" onChange={handleChange} value={formData.studentId}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="pass" id="pass" placeholder="Nhập Mật Khẩu" onChange={handleChange} value={formData.pass}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="re_pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input type="password" name="re_pass" id="re_pass" placeholder="Nhập lại Mật Khẩu" onChange={handleChange} value={formData.re_pass}/>
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="agreeTerm" id="agree-term" className="agree-term" onChange={handleChange} checked={formData.agreeTerm}/>
                                    <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>Tôi đồng ý với  <a href="#" className="term-service">Terms of service</a></label>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Đăng ký"/>
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src="images/signup-image.jpg" alt="sing up image"/></figure>
                            <p className="signup-image-link">Đã có tài khoản, <a data-toggle="tab" href="./login.html">Đăng nhập</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SignUpForm;
