import React from 'react';
import '../../../layout/style/Membership.css';
import { Link } from 'react-router-dom';
import AuthNavbar from '../../Auth/AuthNavbar/AuthNavbar';
import Footer from '../../Auth/Footer/Footer';
  function Membership(){
      return (
  <>

 <AuthNavbar/>
 {/* End AuthNavbar */}

<div className="membershipContainer">

        <div className="membershipHeader">
         <div>
            <h3>Membership Status: <span className="showStatus">Active</span></h3>
            </div>

            <div className="membrBar">
            </div>

            <div>
            <h3>Membership Level: <span className="showStatus">3</span></h3>
            </div>

            <div className="membrBar">
            </div>
            <div>
                <Link to="/Membership"><h3>Cancel Subscription</h3></Link>
            </div>
        </div>

  <div className="plan">
    <div className="plan-inner rightPricing">
      <div className="entry-title">
      
        <div className="price">3€<span>1Month</span>
        </div>
      </div>
      <div className="entry-content">
        <ul>
          <li ><span className="music">Music</span><span><i className="fa fa-check"></i></span></li> 
          <li ><span className="forum">Forum</span><span><i className="fas fa-times"></i></span></li> 
          <li ><span className="images">Images</span><span><i className="fas fa-times"></i></span></li> 
          <li ><span className="posters">Posters</span><span><i className="fas fa-times"></i></span></li>
          <li ><span className="fan">Fan Arts</span><span><i className="fas fa-times"></i></span></li> 
          <li ><span className="videos">Videos</span><span><i className="fas fa-times"></i></span></li> 
          <li ><span className="game">Game Access</span><span><i className="fas fa-times"></i></span></li> 
          <li ><span className="free">Free Merch</span><span><i className="fas fa-times"></i></span></li> 

          <li ><span className="polls">Polls</span><span><i className="fas fa-times"></i></span></li> 
          <li ><span className="polls">Polls</span><span><i className="fas fa-times"></i></span></li>  
        </ul>
      </div>
      <div className="priceButton left-btn">
        <Link  className="priceButtonLink" to="/videoAlbum">Buy Now</Link>
      </div>
    </div>
  </div>
 

  <div className="plan standard">
    <div className="plan-most">
      <div className="entry-middle middle">
       
        <div className="price-middle higher">9€<span>1Month</span>
        </div>
      </div>
      <div className="middle-entry-content">
        <ul>
          <li ><span className="music">Music</span><span><i className="fa fa-check"></i></span></li> 
          <li ><span className="forum">Forum</span><span><i className="fa fa-check"></i></span></li> 
          <li ><span className="images">Images</span><span><i className="fa fa-check"></i></span></li> 
          <li ><span className="posters">Posters</span><span><i className="fa fa-check"></i></span></li>
          <li ><span className="fan">Fan Arts</span><span><i className="fa fa-check"></i></span></li> 
          <li ><span className="videos">Videos</span><span><i className="fa fa-check"></i></span></li> 
          <li ><span className="game">Game Access</span><span><i className="fa fa-check"></i></span></li> 
          <li ><span className="free">Free Merch</span><span><i className="fa fa-check"></i></span></li> 

          <li ><span className="polls">Polls</span><span><i className="fa fa-check"></i></span></li> 
          <li ><span className="polls">Polls</span><span><i className="fa fa-check"></i></span></li> 
        </ul>
      </div>
      <div className="middle-btn">
        <Link  className="middleButtonLink" to="/videoAlbum">Buy Now</Link>
      </div>
    </div>
  </div>
 
  <div className="plan ultimite">
    <div className="plan-inner leftPricing">
      <div className="entry-title">
      
        <div className="price">6€<span>1Month</span>
        </div>
      </div>
      <div className="entry-content good">
        <ul>
          <li ><span className="music">Music</span><span><i className="fa fa-check"></i></span></li> 
          <li ><span className="forum">Forum</span><span><i className="fa fa-check"></i></span></li> 
          <li ><span className="images">Images</span><span><i className="fa fa-check"></i></span></li> 
          <li ><span className="posters">Posters</span><span><i className="fa fa-check"></i></span></li>
          <li ><span className="fan">Fan Arts</span><span><i className="fa fa-check"></i></span></li> 
          <li ><span className="videos">Videos</span><span><i className="fas fa-times"></i></span></li> 
          <li ><span className="game">Game Access</span><span><i className="fas fa-times"></i></span></li> 
          <li ><span className="free">Free Merch</span><span><i className="fas fa-times"></i></span></li> 

          <li ><span className="polls">Polls</span><span><i className="fas fa-times"></i></span></li> 
          <li ><span className="polls">Polls</span><span><i className="fas fa-times"></i></span></li> 
        </ul>
      </div>
      <div className="priceButton right-btn">
        <Link  className="priceButtonLink" to="/videoAlbum">Buy Now</Link>
      </div>
    </div>
  </div>
    </div>

    <Footer/>
    </>

    );
}

export default Membership;