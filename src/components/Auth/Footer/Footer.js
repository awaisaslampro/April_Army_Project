import React from 'react';
import {Grid, Cell} from 'react-mdl';
import '../../../layout/style/Footer.css';
import { Link } from 'react-router-dom';
// import StickyFooter from 'react-sticky-footer';
// import SidenavTesting from '../../Auth/SidenavTesting/SidenavTesting';
  function Footer(){
      return (


// <StickyFooter
//     bottomThreshold={50}
//     normalStyles={{

//     }}
//     stickyStyles={{
  
  
//     }}
// >
//     	<div className="footer">
		
// 		<div className="footerPara">
// 		<p>© 2019 Copyright Amril Army.</p>
// 		</div>

// 		<div className="footerLinks">
// 		<p><Link to="/" className="footerLink">Privacy</Link> | <Link className="footerLink" to="/">Terms</Link> | <Link className="footerLink"to="/LandingPage">Contact us</Link></p>
// 		</div>
// 		</div>
// </StickyFooter>
<>
		<footer className="footerMainContainer ">
		<div  className="seperateFooterContainer">
		<div className="seperatedFooter">
        <div className="seperateFooter">

		<div className="footerCopyright">
		<p>© 2019 Copyright April Army.</p>
		</div>
		<div className="footerPrivacy">
		<p><Link to="/" className="footerLink">Privacy</Link> | <Link className="footerLink" to="/">Terms</Link> | <Link className="footerLink"to="/LandingPage">Contact us</Link></p>
		</div>
		</div>
		</div>
	
		</div>
		</footer> 
		{/* <SidenavTesting/> */}
   
</>
      );
  }
export default Footer;