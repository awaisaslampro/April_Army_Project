import React, { Component } from "react";
import Slider from "react-slick";

import {
  Layout, Header, Navigation, Drawer,
  HeaderRow, Textfield, Content
} from 'react-mdl';
import { Link } from 'react-router-dom';
import "../../layout/style/VideoAlbum.css";
import VideoStepper from "../../components/Auth/VideoStepper/VideoStepper";
import AuthNavbar from '../../../src/components/Auth/AuthNavbar/AuthNavbar';
import Footer from '../../../src/components/Auth/Footer/Footer';

class VideoAlbum extends Component {
  render() {
    return (
<>
{/* AuthNavbar */}
<AuthNavbar/>

{/* Video Stepper */}
<VideoStepper/>

      {/* Video Gallery Container */}
      <div className="topVideoContainer">
        {/*/////////////// FEATURED VIDEO ///////////////*/}
        <div className="seperator">
          <ul>
            <li><img className="rectangle" src="./assets/img/featured.png" /></li>
            <li><img className="middleLine" src="./assets/img/line3.png" /></li>
            <li><img className="fourBoxes" src="./assets/img/fourBoxes.png" /></li>
          </ul>
        </div>
        <div className="videosAlbum ">
          <div className="album transform-on-hover">
            <img src="./assets/img/video4.png" alt="" />
            <div className="card-body">
              <h6>Lorem Ipsum</h6>
            </div>
          </div>
          <div className="album transform-on-hover">
            <img src="./assets/img/video1.png" alt="" />
            <div className="card-body">
              <h6>Lorem Ipsum</h6>
            </div>
          </div>
          <div className="album transform-on-hover">
            <img src="./assets/img/video3.png" alt="" />
            <div className="card-body">
              <h6>Lorem Ipsum</h6>
            </div>
          </div>
          <div className="album transform-on-hover">
            <img src="./assets/img/video2.png" alt="" />
            <div className="card-body">
              <h6>Lorem Ipsum</h6>
            </div>
          </div>
        </div>
        {/* View all videos arrow */}
        <div className="view">
          <ul>
            <li><p>View all</p></li>
            <li> <Link to="/videoAlbum" ><img className="viewArrow" src={"./assets/img/rightSeperatedArrow.png"} /></Link></li>
          </ul>
        </div>
        {/*/////////////// TRENDING  ///////////////*/}
        <div className="seperator">
          <ul>
            <li><img className="rectangle" src="./assets/img/trending.png" /></li>
            <li><img className="middleLine" src="./assets/img/line3.png" /></li>
            <li><img className="fourBoxes" src="./assets/img/fourBoxes.png" /></li>
          </ul>
        </div>
        <div className="videosAlbum ">
          <div className="album transform-on-hover">
            <Link to="/PlayVideo"><img src="./assets/img/video4.png" alt="" /></Link>
            <div className="card-body">
              <h6>Lorem Ipsum</h6>
            </div>
          </div>
          <div className="album transform-on-hover">
          <Link to="/PlayVideo"><img src="./assets/img/video1.png" alt="" /></Link>
            <div className="card-body">
              <h6>Lorem Ipsum</h6>
            </div>
          </div>
          <div className="album transform-on-hover">
          <Link to="/PlayVideo"><img src="./assets/img/video3.png" alt="" /></Link>
            <div className="card-body">
              <h6>Lorem Ipsum</h6>

            </div>
          </div>
          <div className="album transform-on-hover">
          <Link to="/PlayVideo"><img src="./assets/img/video2.png" alt="" /></Link>
            <div className="card-body">
              <h6>Lorem Ipsum</h6>
            </div>
          </div>
        </div>
 {/* View all videos arrow */}
 <div className="view">
          <ul>
            <li><p>View all</p></li>
            <li> <Link to="/videoAlbum" ><img className="viewArrow" src={"./assets/img/rightSeperatedArrow.png"} /></Link></li>
          </ul>
        </div>
          {/*//////////// LATEST VIDEOS   /////////////////////// */}
          <div className="seperator">
          <ul>
            <li><img className="rectangle" src="./assets/img/latestVideo.png" /></li>
            <li><img className="middleLine" src="./assets/img/line3.png" /></li>
            <li><img className="fourBoxes" src="./assets/img/fourBoxes.png" /></li>
          </ul>
        </div>
{/* //////////////   First Album  /////////*/}
        <div className="videosAlbum ">
          <div className="album transform-on-hover">
          <Link to="/PlayVideo"><img src="./assets/img/video4.png" alt="" /></Link>
            <div className="card-body">
              <h6>Lorem Ipsum</h6>
            </div>
          </div>
          <div className="album transform-on-hover">
            <Link to="/PlayVideo"><img src="./assets/img/video1.png" alt="" /></Link>
            <div className="card-body">
              <h6>Lorem Ipsum</h6>
            </div>
          </div>
          <div className="album transform-on-hover">
          <Link to="/PlayVideo"><img src="./assets/img/video3.png" alt="" /></Link>
            <div className="card-body">
              <h6>Lorem Ipsum</h6>
            </div>
          </div>
          <div className="album transform-on-hover">
          <Link to="/PlayVideo"><img src="./assets/img/video4.png" alt="" /></Link>
            <div className="card-body">
              <h6>Lorem Ipsum</h6>
            </div>
          </div>
        </div>
{/* //////////////   Second Album  /////////*/}
<div className="videosAlbum ">
          <div className="album transform-on-hover">
          <Link to="/PlayVideo"><img src="./assets/img/video1.png" alt="" /></Link>
            <div className="card-body">
              <h6>Lorem Ipsum</h6>
            </div>
          </div>
          <div className="album transform-on-hover">
          <Link to="/PlayVideo"><img src="./assets/img/video2.png" alt="" /></Link>
            <div className="card-body">
              <h6>Lorem Ipsum</h6>
            </div>
          </div>
          <div className="album transform-on-hover">
          <Link to="/PlayVideo"><img src="./assets/img/video4.png" alt="" /></Link>
            <div className="card-body">
              <h6>Lorem Ipsum</h6>
            </div>
          </div>
          <div className="album transform-on-hover">
          <Link to="/PlayVideo"><img src="./assets/img/video4.png" alt="" /></Link>
            <div className="card-body">
              <h6>Lorem Ipsum</h6>
            </div>
          </div>
        </div>
        
{/* //////////////   Third Album  /////////*/}
<div className="videosAlbum ">
          <div className="album transform-on-hover">
          <Link to="/PlayVideo"><img src="./assets/img/video2.png" alt="" /></Link>
            <div className="card-body">
              <h6>Lorem Ipsum</h6>
            </div>
          </div>
          <div className="album transform-on-hover">
          <Link to="/PlayVideo"><img src="./assets/img/video4.png" alt="" /></Link>
            <div className="card-body">
              <h6>Lorem Ipsum</h6>
            </div>
          </div>
          <div className="album transform-on-hover">
          <Link to="/PlayVideo"><img src="./assets/img/video3.png" alt="" /></Link>
            <div className="card-body">
              <h6>Lorem Ipsum</h6>
            </div>
          </div>
          <div className="album transform-on-hover">
          <Link to="/PlayVideo"><img src="./assets/img/video2.png" alt="" /></Link>
            <div className="card-body">
              <h6>Lorem Ipsum</h6>
            </div>
          </div>
        </div>

{/* Next page */}
        <div className="nextPage">
         <ul>
         <li> <Link to="/videoAlbum" ><img  className="solidArrow" src={"./assets/img/leftSolidArrow.png"}/></Link></li>  
         <li><p>1</p></li>
         <li><p>2</p></li>
         <li><p>3</p></li>
         <li><p>4</p></li>
         <li><p>5</p></li>
         <li> <Link to="/videoAlbum" ><img  className="solidArrow" src={"./assets/img/rightSolidArrow.png"}/></Link></li>
         </ul>
        </div> 
      </div>
      <Footer/>
      </>
    )
  }
}
export default VideoAlbum;