import React from 'react';
import '../../../layout/style/Awards.css';
import { Link } from 'react-router-dom';
import Footer from '../../Auth/Footer/Footer';

import {
    Layout, Header, Navigation, Drawer,
    HeaderRow, Textfield, Content
  } from 'react-mdl';
  function Awards(){
      return (
  <>
  <div className="demo-big-content">
              <Layout className="main-landing">
                  <Header className="header">
                      <HeaderRow title=" " className="header-color">
                          <div  className="logoIn divStyle">
                              <Link to="/LandingPage"><img src={"/assets/img/logo.png"} ></img></Link>
                          </div>
  
                  {/* Profile Right Icons */}
                          <div className="profileRightIcons">
  
              <div>
              <i className="fa fa-search profileSearch"></i>
              </div>
  
                       
         <div>      
        <div className="row notificationContainer">
          <div className="col-lg-10 col-sm-10 col-12 offset-lg-1 offset-sm-1">
            <nav className="">
             
              <div className="">
                <ul className="nav nav-pills mr-auto justify-content-end">
                 
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="notiBell" className="fa fa-bell"></i>
                    </a>
                      <ul className="dropdown-menu">
                        <li className="notiHead ">
                          <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                              <span className="fontEqual">Notifications</span>
                              <span className="float-right">25</span>
                            </div>
                            </div>
                        </li>
                        <li className="notification-box bg-darkgrey">
                          <div className="row">
                             
                          <div className="col-lg-12 col-sm-12 col-12">
                              <strong className="">David John</strong>
                              <div>
                                Lorem ipsum dolor sit amet, consectetur
                              </div>
                              
                            </div>    
                          </div>
                        </li>
                        <li className="notification-box bg-darkgrey">
                          <div className="row">
                               
                          <div className="col-lg-12 col-sm-12 col-12">
                              <strong className="">David John</strong>
                              <div>
                                Lorem ipsum dolor sit amet, consectetur
                              </div>
                              
                            </div>    
                          </div>
                        </li>
                        <li className="notification-box bg-darkgrey">
                          <div className="row">
                             
                          <div className="col-lg-12 col-sm-12 col-12">
                              <strong className="">David John</strong>
                              <div>
                                Lorem ipsum dolor sit amet, consectetur
                              </div>
                              
                            </div>    
                          </div>
                        </li>
                        
                        <li className="notification-box bg-darkgrey">
                          <div className="row">
                             
                          <div className="col-lg-12 col-sm-12 col-12">
                              <strong className="">David John</strong>
                              <div>
                                Lorem ipsum dolor sit amet, consectetur
                              </div>
                              
                            </div>    
                          </div>
                        </li>
                        <li className="notification-box bg-darkgrey">
                          <div className="row">
                             
                          <div className="col-lg-12 col-sm-12 col-12">
                              <strong className="">David John</strong>
                              <div>
                                Lorem ipsum dolor sit amet, consectetur
                              </div>
                              
                            </div>    
                          </div>
                        </li>
                        <li className="bg-darkgrey">
                          <div className="row">
                             
                          <div className="col-lg-12 col-sm-12 col-12">
                              <strong className="">David John</strong>
                              <div>
                                Lorem ipsum dolor sit amet, consectetur
                              </div>
                              
                            </div>    
                          </div>
                        </li>
                        <li className="Footer text-center">
                          <a href="/Notification" className="fontEqual">See All</a>
                        </li>
                      </ul>
                  </li>
                </ul>
              </div>
    
            </nav>
          </div>
      </div>
  
      </div>
  
      <div>
      <div className="profileIcon">
        <Link to="/Profile"><i class="fas fa-user profileUser"></i>  </Link>
        </div>
        </div>
        </div>
                      </HeaderRow>
                  </Header>
                  <Drawer title=" " className="drawer">
                      <Navigation className="Navigation">
                          <div className="sideLogos">
                              <div className="upLogos">
                              <div className="home"><img src={"/assets/img/home.png"} /><Link to="/LandingPage">Home</Link></div>
                              <div className="contact"><img src={"/assets/img/contact.png"}></img><Link to="/AuthNavBar">Video</Link></div>
                              <div className="games"><img src={"/assets/img/games.png"}></img><Link to="/AuthNavBar">Images</Link></div>
                              <div className="login"><img src={"/assets/img/login.png"}></img><Link to="/AuthNavBar">Audio</Link> </div>
                              <div className="register"><img src={"/assets/img/register.png"}></img><Link to="/AuthNavBar">Music</Link></div>
                              <div className="home"><img src={"/assets/img/home.png"} /><Link to="/AuthNavBar">The Band</Link></div>
                              <div className="games"><img src={"/assets/img/games.png"}></img><Link to="/Games">Games</Link></div>
                              <div className="login"><img src={"/assets/img/login.png"}></img><Link to="/AuthNavBar">Forums</Link> </div>
                              <div className="register"><img src={"/assets/img/register.png"}></img><Link to="/Quizes">Quizes</Link></div>
                              <div className="home"><img src={"/assets/img/home.png"} /><Link to="/AuthNavBar">Fan Art</Link></div>
                              </div>
                               <hr className="sideLogosLine"></hr>
                              <div className="downLogos">
                              <div className="contact"><img src={"/assets/img/contact.png"}></img><Link to="/AuthNavBar">My Account</Link></div>
                              <div className="games"><img src={"/assets/img/games.png"}></img><Link to="/AuthNavBar">Membership</Link></div>
                              <div className="login"><img src={"/assets/img/login.png"}></img><Link to="/AuthNavBar">Contact us</Link> </div>
                              <div className="register"><img src={"/assets/img/register.png"}></img><Link to="/AuthNavBar">Log out</Link></div>
                          </div>
                          </div>
                      </Navigation>
                  </Drawer>
  
              </Layout>
          </div>
          {/* End AuthNavbar */}


        <div className="topAwardsContainer">

            <div className="row d-flex justify-content-center align-items-center ">
                <div className="awardsContainer col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                <div>
                        <p className="awardsFontSize"><Link className="awardsCategory hvr-underline-from-center" to="/Awards">Awards</Link></p>
                    </div>
                    <div>
                        <p><Link className="awardsCategory " to="/Awards"><i style={{ fontSize: "20px" }} className="fas fa-arrow-right awardsArrowRight"></i></Link></p>
                    </div>

                    <div >
                        <p ><Link className="awardsCategory awardsAll hvr-underline-from-center" to="/Awards">All in</Link></p>
                    </div>

                    <div>
                        <p><Link className="awardsCategory awardsBronze hvr-underline-from-center" to="/Bronze">Bronze</Link></p>
                    </div>
                    <div>
                        <p><Link className="awardsCategory awardsSilver hvr-underline-from-center" to="/Silver">Silver</Link></p>
                    </div>

                    <div>
                        <p><Link className="awardsCategory awardsGold hvr-underline-from-center" to="/Gold">Gold</Link></p>
                    </div>
                    <div>
                        <p><Link className="awardsCategory awardsPlatinum hvr-underline-from-center" to="/Platinum">Platinum</Link></p>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="awardsListContainer col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                    <div className="awardsDiv">
                        <div className="listContainer">

                            {/* Left Medal List */}
                            <div className="listLeft">
                                <div >
                                    <div className="checkPostContainer firstPost">
                                        <img className="awardsMedal" src={"./assets/img/quiz-25.png"} />

                                        <div className="unLockButtonContainer">
                                            <div>
                                                <Link to="/Awards"><input className="unlockButton" type="button" value="Locked" ></input></Link>
                                            </div>
                                           <div className="checkPost">
                                            <div className="checkPostInner">
                                                <h3>Post 10 comments on the site</h3>
                                                <p>to unlock this award</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="checkPostContainer">
                                            <img className="awardsMedal" src={"./assets/img/quiz-25.png"} />
                                           
                                            <div className="unLockButtonContainer">
                                            <div>
                                                <Link to="/Awards"><input className="unlockButton" type="button" value="Locked" ></input></Link>
                                            </div>
                                           <div className="checkPost">
                                            <div className="checkPostInner">
                                                <h3>Post 10 comments on the site</h3>
                                                <p>to unlock this award</p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                </div>
                                <div className="">
                                    <div className="checkPostContainer">
                                        <img className="awardsMedal" src={"./assets/img/posts-50.png"} />
                                        <div className="unLockButtonContainer">
                                            <div>
                                                <Link to="/Awards"><input className="unlockButton" type="button" value="Locked" ></input></Link>
                                            </div>
                                           <div className="checkPost">
                                            <div className="checkPostInner">
                                                <h3>Post 10 comments on the site</h3>
                                                <p>to unlock this award</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="checkPostContainer">
                                            <img className="awardsMedal" src={"./assets/img/quiz-25.png"} />
                                            <div className="unLockButtonContainer">
                                            <div>
                                                <Link to="/Awards"><input className="unlockButton" type="button" value="Locked" ></input></Link>
                                            </div>
                                           <div className="checkPost">
                                            <div className="checkPostInner">
                                                <h3>Post 10 comments on the site</h3>
                                                <p>to unlock this award</p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                </div>
                                <div >
                                    <div className="checkPostContainer">
                                        <img className="awardsMedal" src={"./assets/img/posts-10.png"} />
                                        <div className="unLockButtonContainer">
                                            <div>
                                                <Link to="/Awards"><input className="unlockButton" type="button" value="Locked" ></input></Link>
                                            </div>
                                           <div className="checkPost">
                                            <div className="checkPostInner">
                                                <h3>Post 10 comments on the site</h3>
                                                <p>to unlock this award</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="checkPostContainer">
                                            <img className="awardsMedal" src={"./assets/img/quiz-25.png"} />
                                            <div className="unLockButtonContainer">
                                            <div>
                                                <Link to="/Awards"><input className="unlockButton" type="button" value="Locked" ></input></Link>
                                            </div>
                                           <div className="checkPost">
                                            <div className="checkPostInner">
                                                <h3>Post 10 comments on the site</h3>
                                                <p>to unlock this award</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                {/* Right Medal List */}
                            <div className="listRight">
                                <div >
                                    <div className="checkPostContainer">
                                        <img className="awardsMedal" src={"./assets/img/quiz-25.png"} />
                                        <div className="unLockButtonContainer">
                                            <div>
                                                <Link to="/Awards"><input className="unlockButton" type="button" value="Locked" ></input></Link>
                                            </div>
                                           <div className="checkPost">
                                            <div className="checkPostInner">
                                                <h3>Post 10 comments on the site</h3>
                                                <p>to unlock this award</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="checkPostContainer">
                                            <img className="awardsMedal" src={"./assets/img/posts-50.png"} />
                                            <div className="unLockButtonContainer">
                                            <div>
                                                <Link to="/Awards"><input className="unlockButton" type="button" value="Locked" ></input></Link>
                                            </div>
                                           <div className="checkPost">
                                            <div className="checkPostInner">
                                                <h3>Post 10 comments on the site</h3>
                                                <p>to unlock this award</p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="checkPostContainer">
                                        <img className="awardsMedal" src={"./assets/img/quiz-25.png"} />
                                        <div className="unLockButtonContainer">
                                            <div>
                                                <Link to="/Awards"><input className="unlockButton" type="button" value="Locked" ></input></Link>
                                            </div>
                                           <div className="checkPost">
                                            <div className="checkPostInner">
                                                <h3>Post 10 comments on the site</h3>
                                                <p>to unlock this award</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="checkPostContainer">
                                            <img className="awardsMedal" src={"./assets/img/posts-50.png"} />
                                            <div className="unLockButtonContainer">
                                            <div>
                                                <Link to="/Awards"><input className="unlockButton" type="button" value="Locked" ></input></Link>
                                            </div>
                                           <div className="checkPost">
                                            <div className="checkPostInner">
                                                <h3>Post 10 comments on the site</h3>
                                                <p>to unlock this award</p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <div className="checkPostContainer">
                                        <img className="awardsMedal" src={"./assets/img/quiz-25.png"} />
                                        <div className="unLockButtonContainer">
                                            <div>
                                                <Link to="/Awards"><input className="unlockButton" type="button" value="Locked" ></input></Link>
                                            </div>
                                           <div className="checkPost">
                                            <div className="checkPostInner">
                                                <h3>Post 10 comments on the site</h3>
                                                <p>to unlock this award</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="checkPostContainer">
                                            <img className="awardsMedal" src={"./assets/img/quiz-25.png"} />
                                            <div className="unLockButtonContainer">
                                            <div>
                                                <Link to="/Awards"><input className="unlockButton" type="button" value="Locked" ></input></Link>
                                            </div>
                                           <div className="checkPost">
                                            <div className="checkPostInner">
                                                <h3>Post 10 comments on the site</h3>
                                                <p>to unlock this award</p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default Awards;