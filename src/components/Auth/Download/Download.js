import React from 'react';
import '../../../layout/style/Download.css';
import { Link } from 'react-router-dom';
import {
    Layout, Header, Navigation, Drawer,
    HeaderRow, Textfield, Content
} from 'react-mdl';
import AuthNavbar from '../../Auth/AuthNavbar/AuthNavbar';
import Footer from '../../Auth/Footer/Footer';

function Download() {
    return (
        <>
            <AuthNavbar />
            
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

                {/* Showing System Requirement */}
                <div className="container">

                <div className="showRequirement">
                    <h3>About Game and System Requirements Click Below</h3>

                    <Link to="/SystemRequirements"><input className="showSystem" type="button" value="Click here"></input></Link>

                </div>

                </div>

            </div>
<Footer/>
        </>
    );
}
export default Download;

