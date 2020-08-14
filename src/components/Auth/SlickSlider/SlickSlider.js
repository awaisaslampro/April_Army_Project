import React from 'react';
import $ from 'jquery';
import "../../../layout/style/SlickSlider.css";
import { Link } from 'react-router-dom';
// import Footer from '../../Auth/Footer/Footer';


function SlickSlider() {
  return (
<>
    <div className="page-wrapper">

    <div className="post-slider">
       

        <i className="fas fa-chevron-left prev"></i>
        <i className="fas fa-chevron-right next"></i>


        <div className="post-wrapper">
            <div className="post">
                <img className="slider-img" src="sunny.png"/>
            </div>
        
        <div className="post">
            <img className="slider-img" src="assets/img/csgo.jpg"/>
        </div>
        <div className="post">
            <img className="slider-img" src="downloadimg.png"/>
        </div>
        <div className="post">
            <img className="slider-img" src="msg3.png"/>
        </div>
    </div>
    </div>
    </div>
  
  

    
    </>
  )
}
export default SlickSlider;
