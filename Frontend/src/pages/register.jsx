// Register.js
import React, { useState } from 'react';
import axios from 'axios';
import '../../public/fonts/material-icon/css/material-design-iconic-font.min.css';
import '../App.css'

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
    if (password !== repass) {
        alert("Passwords do not match");
        return;
    }
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
      alert("Đăng ký thành công")
    } catch (error) {
        alert(error.response.data.message);
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
                        <form method="POST" className="register-form" id="register-form"
                        onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label for="fullname"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input 
                                    type="text" 
                                    placeholder="Nhập Họ và tên"
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label for="name"><i className="zmdi zmdi-account-circle"></i></label>
                                <input 
                                    type="text" 
                                    placeholder="Nhập Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label for="email"><i className="zmdi zmdi-email"></i></label>
                                <input 
                                    type="email" 
                                    placeholder="Nhập Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label for="phone"><i className="zmdi zmdi-phone"></i></label>
                                <input 
                                    type="number" 
                                    placeholder="Nhập Số điện thoại"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label for="student-id"><i className="zmdi zmdi-card"></i></label>
                                <input 
                                    type="number" 
                                    placeholder="Nhập Mã Số Sinh Viên"
                                    value={studentId}
                                    onChange={(e) => setStudentId(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input 
                                    type="password" 
                                    placeholder="Nhập Mật Khẩu"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input 
                                    type="password" 
                                    placeholder="Nhập lại Mật Khẩu"
                                    value={repass}
                                    onChange={(e) => setRepass(e.target.value)}/>
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
                        <figure><img src="../public/images/signup-image.jpg" alt="sing up image"></img></figure>
                        <p className="signup-image-link">Đã có tài khoản, <a data-toggle="tab" href="./login">Đăng nhập</a></p>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
}

export default Register;
