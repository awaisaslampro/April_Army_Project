import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom';
import {Grid, Cell} from 'react-mdl';
import Stepper from '../../components/Auth/Stepper/Stepper';
import Sidenav from '../../components/Auth/Sidenav/Sidenav';
import "../../layout/style/LandingPage.css";

class LandingPage extends Component{
  render(){
    return(
    <>
      <Sidenav/>
        {/* End Navbar */}
  
		  {/* Start Home page */}
		<Grid className="landing-grid">
		<Cell col={12}  className="innerMain">

		<div  className="topHomePage" style={{mainParaAlign: "center"}} >
		<img className="devicesImage" src={"./assets/img/devices.png"} />
		
		<h3 className="devicesText">Let's Built it Together</h3>
		
		<h3 className="devicesText">The Future of Dead by April is here</h3>

		<div className="midPage">
		<div className= "innerMidPage">
		<div className="para">
		<h3 className="praHead">Why April Army, and what is it?</h3>
		<p className="mainPara">First and foremost April Army is a subscription based platform that we, the band members, built in order 
to connect more with our fans/followers/supporters. We’re uploading new exclusive content such as 
music, videos, images, live-streams, apps, games, confidential information, each month.

		</p>
		<p className="mainPara">
		Secondly, we believe that there are big changes coming to the music industry. Without speculating too 
much, we believe that the big corporations running the show business today, will soon play a less 
important role to artists and bands – and that connecting fans directly to artists will be more important 
than ever. This platform is based on an idea that will carry Dead by April into the future. Regardless of 
what it has in store for us.
		</p>

		<p className="mainPara">
		Because together we are so much more powerful than any label, booker, agent, manager, can ever claim 
themselves to be. Together we can take on the world, take Dead by April to places we’ve never been, 
fund tours in new territories, make new exclusive content available at a faster pace, release music more 
often etc. Feel free to explore the 4 milestones we've set up below.
		</p>
		
		<p className="mainPara">
		April Army already has members from all over the world – join our community and let’s build for 
the future.
		</p>
		
		</div>

<div className="document">
    <Stepper/>
	</div>

	</div>
	</div>

{/*/////////////////////////////////      MemberShip    /////////////////////////////////////////////////////////////////*/}
		
<div className="pricing-table">
		<h3>Membership</h3>
		
 
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
        <Link  className="priceButtonLink" to="/Login">Buy Now</Link>
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
        <Link  className="middleButtonLink" to="/Login">Buy Now</Link>
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
        <Link  className="priceButtonLink" to="/Login">Buy Now</Link>
      </div>
    </div>
  </div>
  <div className="gameHeading">
  <h3>Looking for our games?</h3>
		<p style={{textAlign: 'center'}} ><Link to="/" className="gamesLink">Click here</Link></p>
	
    </div>
</div>

		
		<div className="footer">
		<div className="footerPara">
		<p>© 2019 Copyright Amril Army.</p>
		</div>

		<div className="footerLinks">
		<p><Link to="/" className="footerLink">Privacy</Link> | <Link className="footerLink" to="/">Terms</Link> | <Link className="footerLink"to="/LandingPage">Contact us</Link></p>
		</div>
		</div>
		
		</div>
		</Cell>
		</Grid>
    </>
		)
}
}

export default LandingPage;














