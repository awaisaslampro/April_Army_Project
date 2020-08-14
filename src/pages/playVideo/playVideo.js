import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../../layout/style/playVideo.css";
import AuthNavbar from '../../../src/components/Auth/AuthNavbar/AuthNavbar';
import Footer from '../../../src/components/Auth/Footer/Footer';

class VideoAlbum extends Component {
  render() {
    return (
     <>

<AuthNavbar/>
 {/* End AuthNavbar */}
    
      <div className="playVideoContainer">

       <div className = "leftSection"> 
      {/* <div className="learn"> <h3 >Learn to play</h3></div> */}
        <div className="playVideoPlay">
          <img className="playVideo" src="./assets/img/play.png" />
        </div>


        <div className="commentSection">
          <img className="comment" src="./assets/img/comments.png" />
        </div>
        </div>



        <div className="sideGallery">



          <div className="leftTopVideo">
            <ul>
              <li>
                <li>Up Next  &nbsp;&nbsp;Autoplay&nbsp;<img className="autoPlay" src="./assets/img/autoPlay.png" /></li>
                  <br></br>
                  <br></br>
                  
                <Link  href=""><img className="lightbox" src="./assets/img/video1.png" /></Link>
                <div className="cardBody">
                  <h6>Lorem Ipsum</h6>
                </div>
              </li>

              <li>

                <Link  href=""><img className="lightbox" src="./assets/img/video2.png" /></Link>
                <div className="cardBody">
                  <h6>Lorem Ipsum</h6>
                </div>
              </li>

              <li>

                <Link  href=""><img className="lightbox" src="./assets/img/video3.png" /></Link>
                <div className="cardBody">
                  <h6>Lorem Ipsum</h6>
                </div>
              </li>

              <li>

                <Link  href=""><img className="lightbox" src="./assets/img/video4.png" /></Link>
                <div className="cardBody">
                  <h6>Lorem Ipsum</h6>
                </div>
              </li>

              <li>

                <Link  href=""><img className="lightbox" src="./assets/img/video5.png" /></Link>
                <div className="cardBody">
                  <h6>Lorem Ipsum</h6>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div style={{height:'97px', backgroundColor:'#131413', margin: '-12px 0 -36px 0'}}></div>
      <Footer/>
      
</>


    )
  }
}
export default VideoAlbum;