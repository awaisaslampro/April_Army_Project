import React from 'react';
import '../../../layout/style/SystemRequirements.css';
import { Link } from 'react-router-dom';

import {
    Layout, Header, Navigation, Drawer,
    HeaderRow, Textfield, Content
  } from 'react-mdl';
  import Footer from '../../Auth/Footer/Footer';
  import AuthNavbar from '../../Auth/AuthNavbar/AuthNavbar';
  function SystemRequirements(){
      return (
  <>
      <AuthNavbar/>
    {/* End AuthNavbar */}

 <div className="gamesContainer container">
                <div className="gameHeader ">
                    <div> <hr className="gamesHrLeft forLeft"></hr></div>
                    <div><h3>Games</h3></div>
                    <div> <hr className="gamesHrRight forRight"></hr></div>
                </div>

                <div className="container">
                    <div className="downloadimg row d-flex justify-content-center align-items-center">

                        <img className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9" src={"/assets/img/downloadimg.png"} />
                    </div>

                    <div className="downHeader">
                        <div> <hr className="downHrLeft"></hr></div>
                        <div><h3>Download Now</h3></div>
                        <div> <hr className="downHrRight"></hr></div>
                    </div>
                </div>

                {/* downloading Sources */}
                <div className="container">
                    <div className="downloadSources">
                        <div>
                            <div className="d-flex justify-content-center align-items-center flex-column">

                                <div>
                                    <h3>Windows</h3>
                                </div>
                                <div>
                                  <Link to="/Download"><i className="downloadIcons fab fa-windows"></i></Link>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div>
                                    <h3>Mac</h3>
                                </div>
                                <div>
                                    <Link to="/Download"><i className="downloadIcons fab fa-apple"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

<div className="systemRequirements">
<div className="systemHeader container">
                <div><hr className="systemHrLeft"></hr></div>
                <div><h3>About Game</h3></div>
                <div> <hr className="systemHrRight"></hr></div>
            </div>
           

{/* About Game Version */}
<div className="row">
    <div className="container">
        <div className="gameVersion col-md-10 col-sm-10 col-10 mx-auto">
            
            <div className="gameVersionDescription">
            <h3>Version: 1.0</h3>
                <p>Counter-Strike: Global Offensive (CS: GO)
                expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago.</p>
           <p>It took the gaming industry by surprise when the unlikely MOD became the most
                played online PC action game immediately after its release in August 1999,</p>
           <p>It has continued to be one of the most-played games in the world, 
               headline competitive gaming tournaments</p>
               <p>It took the gaming industry by surprise when the unlikely MOD became the most
                played online PC action game immediately after its release in August 1999,</p>
           <p>It has continued to be one of the most-played games in the world, 
               headline competitive gaming tournaments</p>
            </div>
        </div>
    </div>
</div>
<div className="requireHeader container">
                <div> <hr className="requireHrLeft"></hr></div>
                <div><h3>System Requirements</h3></div>
                <div> <hr className="requireHrRight"></hr></div>
            </div>

{/* About Game Version */}
<div className="row">
    <div className="container">
        <div className="gameVersion col-md-10 col-sm-10 col-10 mx-auto">
           
            <div className="gameVersionDescription">
           
                <p>Counter-Strike: Global Offensive (CS: GO)
                expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago.</p>
           <p>It took the gaming industry by surprise when the unlikely MOD became the most
                played online PC action game immediately after its release in August 1999,</p>
           <p>It has continued to be one of the most-played games in the world, 
               headline competitive gaming tournaments</p>
               <p>It took the gaming industry by surprise when the unlikely MOD became the most
                played online PC action game immediately after its release in August 1999,</p>
           <p>It has continued to be one of the most-played games in the world, 
               headline competitive gaming tournaments</p>
            </div>
        </div>
    </div>
</div>

</div>
<Footer/>
</>
    );
    }
    export default SystemRequirements;