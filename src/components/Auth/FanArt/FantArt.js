import React from 'react';
import '../../../layout/style/FanArt.css';
import { Link } from 'react-router-dom';
  import AuthNavbar from '../../Auth/AuthNavbar/AuthNavbar';
  import Footer from '../../Auth/Footer/Footer';
  import UploadFanArt from '../UploadFanArt/UploadFanArt';
  import Testing from '../../Auth/Testing/Testing';

  function FanArt(){
      return (
  <>
        {/* <AuthNavbar/> */}
        

{/* //////////////   Fan Art Album  /////////*/}
        <Testing/>

          {/* Upload Fan Art Button */}
        <div className="fanArtUpload_btnContainer">
           <Link href="" id="new_discussion_btn"><button  className="fanArtUpload_btn">Upload Your Fan Art</button></Link>

        </div>
        <UploadFanArt/>
        <Footer/>
    </>
      );
    }
export default FanArt;