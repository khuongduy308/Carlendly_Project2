// Register.js
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [repass, setRepass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', {
        fullname,
        username,
        email,
        phone,
        studentId,
        password,
        repass,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main">
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Đăng ký</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label for="fullname"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="fullname" id="fullname" placeholder="Nhập Họ và tên"/>
                            </div>
                            <div className="form-group">
                                <label for="name"><i className="zmdi zmdi-account-circle"></i></label>
                                <input type="text" name="username" id="username" placeholder="Nhập Username"/>
                            </div>
                            <div className="form-group">
                                <label for="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Nhập Email"/>
                            </div>
                            <div className="form-group">
                                <label for="phone"><i className="zmdi zmdi-phone"></i></label>
                                <input type="number" name="phone" id="phone" placeholder="Nhập Số điện thoại"/>
                            </div>
                            <div className="form-group">
                                <label for="student-id"><i className="zmdi zmdi-card"></i></label>
                                <input type="number" name="student-id" id="student-id" placeholder="Nhập Mã Số Sinh Viên"/>
                            </div>
                            <div className="form-group">
                                <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Nhập Mật Khẩu"/>
                            </div>
                            <div className="form-group">
                                <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Nhập lại Mật Khẩu"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                <label for="agree-term" className="label-agree-term"><span><span></span></span>Tôi đồng ý với  <a href="#" className="term-service">Terms of service</a></label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Đăng ký"/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src="images/signup-image.jpg" alt="sing up image"></img></figure>
                        <p className="signup-image-link">Đã có tài khoản, <a data-toggle="tab" href="./login.html">Đăng nhập</a></p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Register;
