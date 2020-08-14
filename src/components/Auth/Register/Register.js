import Flexbox from 'flexbox-react';
import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../../../layout/style/Register.css";
// import UnAuthNavbar from "../../Auth/UnAuthNavbar/UnAuthNavbar";
import Sidenav from "../../Auth/Sidenav/Sidenav";
import { Sidebar } from 'semantic-ui-react';
class Register extends Component{
  render(){
    return(
   <>
   <Sidenav/>
   {/* End Navbar */}
  
 <div className="flex">
 <div className="flexDiv">
<h3 className="form-center">Sign up</h3>
  <div className="flexContainer">
  <div className="flexLeft">
  <div className="logIn-box">
  <div className="textBox">

    <i className="fas fa-user"></i>
    <input type="email" placeholder="Enter email" />
  </div>

  <div className="textBox  ">
    <i className="fas fa-lock"></i>
    <input type="password" placeholder="Enter password" /> 
  </div>
  </div>

<div className="logIn-box">
  <div className="textBox ">
    <i className="fas fa-user"></i>
    <input type="email" placeholder="Enter email" />
  </div>

  <div className="textBox ">
    <i className="fas fa-lock"></i>
    <input type="password" placeholder="Enter password" /> 
  </div>
  </div>

<div className="logIn-box">
  <div className="textBox">
    <i className="fas fa-user"></i>
    <input type="email" placeholder="Enter email" />
  </div>

  <div className="textBox">
    <i className="fas fa-lock"></i>
    <input type="password" placeholder="Enter password" /> 
  </div>
  </div>
  </div>

  <div className="flexRight">
  <div className="logIn-box">
  <div className="textBox">
    <i className="fas fa-user"></i>
    <input type="email" placeholder="Enter email" />
  </div>

  <div className="textBox">
    <i className="fas fa-lock"></i>
    <input type="password" placeholder="Enter password" /> 
  </div>
  </div>

<div className="logIn-box">
  <div className="textBox">
    <i className="fas fa-user"></i>
    <input type="email" placeholder="Enter email" />
  </div>

  <div className="textBox">
    <i className="fas fa-lock"></i>
    <input type="password" placeholder="Enter password" /> 
  </div>
  </div>

<div className="logIn-box">
  <div className="textBox">
    <i className="fas fa-user"></i>
    <input type="email" placeholder="Enter email" />
  </div>

  <div className="textBox">
    <i className="fas fa-lock"></i>
    <input type="password" id="password" namae="password" placeholder="Enter password" /> 
  </div>
  </div>
  </div>
  </div>
  
  <div className="form-center signOption">
  <Link to="/LandingPage"><input  type="button" className="registerbutton" value="Sign up" /></Link>
  <p>Already have an account? <Link to="/Login" className="loginFont">Log in</Link></p>
  
</div>


</div>
</div>

</>

);
}
}
export default Register;