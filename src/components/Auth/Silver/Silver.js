import React from 'react';
import '../../../layout/style/Bronze.css';
import { Link } from 'react-router-dom';

import {
    Layout, Header, Navigation, Drawer,
    HeaderRow, Textfield, Content
  } from 'react-mdl';
  import Footer from '../../Auth/Footer/Footer';
  import AuthNavbar from '../../Auth/AuthNavbar/AuthNavbar';
  function Bronze(){
      return (
  <>
      <AuthNavbar/>
    {/* End AuthNavbar */}

        <div className="topAwardsContainer">
           <div className="row d-flex justify-content-center align-items-center ">
                <div className="awardsContainer col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                <div>
                <p className="awardsFontSize"><Link className="awardsCategory hvr-underline-from-center" to="/Awards">Awards</Link></p>
                    </div>
                    <div>
                        <p><Link className="awardsCategory" to="/Awards"><i style={{ fontSize: "20px" }} className="fas fa-arrow-right awardsArrowRight"></i></Link></p>
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

                <div className="row d-flex justify-content-center align-items-center ">
                <div className="bronzeTopContainer col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9   ">
                <div className="bronzeAwardContainer ">

                    <div className="bronzeAward">
                        <img className="bronzeMedal" src={"./assets/img/posts-500.png"} />

                        <div className="bronzeAwardStatus">
                        <div>
                        <Link to="/awards"><input className="bronzeButton" style={{backgroundColor: 'rgb(206, 206, 206)'}} type="button" value="Silver" ></input></Link>
                      </div>  
                      <div>
                        <div className="bronzeStatus">
                            <h3>Achieved atleast 25% in DBA Quiz</h3>
                            <p>unlock 1 month ago</p>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* <Footer/> */}
                </>

    )
}
export default Bronze;