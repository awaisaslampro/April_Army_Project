import React from 'react';
import '../../../layout/style/Notification.css';
import { Link } from 'react-router-dom';
import AuthNavbar from '../../Auth/AuthNavbar/AuthNavbar';
import Footer from '../../Auth/Footer/Footer';
  function Notification(){
    
    return (
  <>
 <AuthNavbar/>
 {/* End AuthNavbar */}
        <div className=" row notificationContainerOnHead">
            <div className="col-md-8">
                <div className="notificationStatusContainer">
                    <ul>
                        <li className="notificationImagesList">
                            <img src={"./assets/img/singer2.png"} alt=""></img>
                        </li>
                        <li className="notificationStatus">
                            <strong>Toni Passanin </strong>
                            <span> Lorem ipsum dolor sit </span>
                            <strong>"Nice Weekend Wishes" </strong>
                            <span> Lorem ipsum dolor sit on ipsum to the floor to ground.</span>
                            <span className="notificationTimeRight">17 hours ago</span>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="col-md-8">
                <div className=" notificationStatusContainer">
                    <ul>
                        <li className="notificationImagesList">
                            <img src={"./assets/img/msg5.png"} alt=""></img>
                        </li>
                        <li className="notificationStatus">
                            <strong>Toni Passanin </strong>
                            <span> Lorem ipsum dolor sit </span>
                            <strong>"Nice Weekend Wishes" </strong>
                            <span> Lorem ipsum dolor sit on ipsum to the floor to ground.</span>
                            <span className="notificationTimeRight">19 hours ago</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-md-8">
                <div className="notificationStatusContainer">
                    <ul>
                        <li className="notificationImagesList">
                            <img src={"./assets/img/singer1.png"} alt=""></img>
                        </li>
                        <li className="notificationStatus">
                            <strong>Toni Passanin </strong>
                            <span> Lorem ipsum dolor sit </span>
                            <strong>"Nice Weekend Wishes" </strong>
                            <span> Lorem ipsum dolor sit on ipsum to the floor to ground.</span>
                            <span className="notificationTimeRight">17 hours ago</span>
                        </li>
                    </ul>

                </div>
            </div>

            <div className="col-md-8">
                <div className="notificationStatusContainer ">
                    <ul>
                        <li className="notificationImagesList">
                            <img src={"./assets/img/msg5.png"} alt=""></img>
                        </li>
                        <li className="notificationStatus">
                            <strong>Toni Passanin </strong>
                            <span> Lorem ipsum dolor sit </span>
                            <strong>"Nice Weekend Wishes" </strong>
                            <span> Lorem ipsum dolor sit on ipsum to the floor to ground.</span>
                            <span className="notificationTimeRight">17 hours ago</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-8 col-md-8 ">
                <div className="notificationStatusContainer ">
                    <ul>
                        <li className="notificationImagesList">
                            <img src={"./assets/img/singer1.png"} alt=""></img>
                        </li>
                        <li className="notificationStatus">
                            <strong>Toni Passanin </strong>
                            <span> Lorem ipsum dolor sit </span>
                            <strong>"Nice Weekend Wishes" </strong>
                            <span> Lorem ipsum dolor sit on ipsum to the floor to ground.</span>
                            <span className="notificationTimeRight">17 hours ago</span>
                        </li>
                    </ul>

                </div>
                </div>

                <div className="col-lg-8 col-md-8 ">
                <div className="notificationStatusContainer ">
                    <ul>
                        <li className="notificationImagesList">
                            <img src={"./assets/img/singer1.png"} alt=""></img>
                        </li>
                        <li className="notificationStatus">
                            <strong>Toni Passanin </strong>
                            <span> Lorem ipsum dolor sit </span>
                            <strong>"Nice Weekend Wishes" </strong>
                            <span> Lorem ipsum dolor sit on ipsum to the floor to ground.</span>
                            <span className="notificationTimeRight">1 month ago</span>
                        </li>
                    </ul>

                </div>
                </div>
            </div>
            <Footer/>
            </>
        
    )
}

export default Notification;