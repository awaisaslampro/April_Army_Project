import React, {Component} from 'react';
import '../../../layout/style/AuthNavbar.css';
import {
    Layout, Header, Navigation, Drawer,
    HeaderRow, Textfield, Content
} from 'react-mdl';
import { Link } from 'react-router-dom';

class AuthNavbar extends Component{
    render(){
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
                      <li className="notiFooter">
                        <Link to="/Notification" className="notiFontEqual">See All</Link>
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
      <Link to="/Profile"><i className="fas fa-user profileUser"></i>  </Link>
      </div>
      </div>
      </div>
    
                    </HeaderRow>
                </Header>
                <Drawer title=" " className="drawer">
                    <Navigation className="Navigation">
                        <div className="sideLogos">
                            <div className="upLogos">
                            <div className="home"><img src={"/assets/img/home.png"} /><Link to="/VideoAlbum">Home</Link></div>
                            <div className="contact"><img src={"/assets/img/contact.png"}></img><Link to="/VideoAlbum">Video</Link></div>
                            <div className="games"><img src={"/assets/img/games.png"}></img><Link to="/VideoAlbum">Images</Link></div>
                            <div className="login"><img src={"/assets/img/login.png"}></img><Link to="/Audio">Audio</Link> </div>
                            <div className="register"><img src={"/assets/img/register.png"}></img><Link to="/Music">Music</Link></div>
                            <div className="home"><img src={"/assets/img/home.png"} /><Link to="/TheBand">The Band</Link></div>
                            <div className="games"><img src={"/assets/img/games.png"}></img><Link to="/Games">Games</Link></div>
                            <div className="login"><img src={"/assets/img/login.png"}></img><Link to="/Forum">Forums</Link> </div>
                            <div className="register"><img src={"/assets/img/register.png"}></img><Link to="/Quizes">Quizes</Link></div>
                            <div className="home"><img src={"/assets/img/home.png"} /><Link to="/FanArt">Fan Art</Link></div>
                            </div>
                             <hr className="sideLogosLine"></hr>
                            <div className="downLogos">
                            <div className="contact"><img src={"/assets/img/contact.png"}></img><Link to="/VideoAlbum">My Account</Link></div>
                            <div className="games"><img src={"/assets/img/games.png"}></img><Link to="/Membership">Membership</Link></div>
                            <div className="login"><img src={"/assets/img/login.png"}></img><Link to="/VideoAlbum">Contact us</Link> </div>
                            <div className="register"><img src={"/assets/img/register.png"}></img><Link to="/LandingPage">Log out</Link></div>
                        </div>
                        </div>
                    </Navigation>
                </Drawer>

            </Layout>
        </div>
</>
    );
    }

}

export default AuthNavbar;
