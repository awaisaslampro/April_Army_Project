import React from 'react';
import $ from 'jquery';
import "../../../layout/style/Sidenav.css";
import { Link } from 'react-router-dom';
// import Footer from '../../Auth/Footer/Footer';

// Sidenav bar
$(document).ready(function () {
  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("menuDisplayed");
  });
});

function Sidenav() {
  return (
    <>

      {/* Top Navbar  */}

      <div class="topnav ">

        <div>
          <a href="" className="sidenavToggle" id="menu-toggle">
            <span className=""><i className="fa fa-bars navBars"></i></span></a>
        </div>


        {/* logo */}
        <div className="logoIn divStyle">
          <Link to="/LandingPage"><img src={"/assets/img/logo.png"} ></img></Link>
        </div>


        {/* Search bar */}
        <div>
          <form className="searchbarForm">

            {/* <i className="fas fa-search"></i> */}
            <input className="searchbarInsideText" type="text" name="search" />
          </form>

        </div>
      </div>
      {/* // End Navbar */}
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <div id="sidebar-wrapper">
          <div className="sidernavContainer">
        <div><Link to="/LandingPage"><img className="sidernavLogo" src={"/assets/img/logo.png"}></img></Link></div>
                        <div className="sidenavLogo">

                            <div className="home"><img src={"/assets/img/home.png"} /><Link to="/LandingPage">Home</Link></div>
                            <div className="contact"><img src={"/assets/img/contact.png"}></img><Link to="/LandingPage">Contact us</Link></div>
                            <div className="games"><img src={"/assets/img/games.png"}></img><Link to="/LandingPage">Games</Link></div>
                            <div className="login"><img src={"/assets/img/login.png"}></img><Link to="/Login">Log in</Link> </div>
                            <div className="register"><img src={"/assets/img/register.png"}></img><Link to="/Register">Register</Link></div>
                        </div>
        </div>
        </div>

        {/* <!-- Page Content -->  */}
      </div>
    </>

  );
}
export default Sidenav;