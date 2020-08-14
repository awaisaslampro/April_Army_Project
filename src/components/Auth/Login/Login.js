import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "../../../layout/style/Login.css";
// import UnAuthNavbar from "../../Auth/UnAuthNavbar/UnAuthNavbar";
import Sidenav from "../../Auth/Sidenav/Sidenav";

class Login extends Component{
  render(){
    return(
   <>
   <Sidenav/>
   {/* End Navbar */}
  
<div className="loginContainer">
<div className="center">
<div className="login-box">

  <h3 className="form-center">Log in</h3>
  <p >Please sign in</p>

  <div className="textbox">
    <i className="fas fa-user"></i>
    <input type="email" placeholder="Enter email" />
  </div>

  <div className="textbox">
    <i className="fas fa-lock"></i>
    <input type="password" placeholder="Enter password" />
   
  </div>

  <div className="form-center">
  <Link to="/videoAlbum"><input  type="button" className="Loginbutton" value="Log in" /></Link>
  <p>Don't have any account? <Link to="/Register" className="loginFont">Please sign up</Link></p>
  <p>Do you not received any activation code?</p><p><Link to="/"  className="loginFont">Contact us </Link></p>
</div>
</div>
</div>
</div>
</>
)
}
}

export default Login;