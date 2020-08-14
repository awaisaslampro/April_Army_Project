import React from 'react';
import '../../../layout/style/AudioSynth.css';
import { Link } from 'react-router-dom';
import AuthNavbar from '../../Auth/AuthNavbar/AuthNavbar';
import Footer from '../../Auth/Footer/Footer';

  function AudioSynth(){
      return (
        <>
        <AuthNavbar/>
       
        <div className="AudioSynthTopContainer">
        <div className="row">
          <div className="col-md-12">
          
            <div className="audioTabButtons">
            <Link to="/Audio"><button id="defaultOpen" style={{margin:'3px'}} className="AudioTablinks">
                <b>STEM</b>
                  -FILES 
                  <i className="fa fa-chevron-down" style={{paddingLeft:'10px'}}></i>
               </button>
               </Link>

               <Link to="/AudioGuitar"><button id="defaultOpen" style={{margin:'3px'}} className="AudioTablinks">
                <b>GUITAR </b>
                  PRESETS  
                  <i className="fa fa-chevron-down" style={{paddingLeft:'10px'}}></i>
               </button>
               </Link>
               <Link to="/AudioSynth"> <button id="defaultOpen" className="AudioTablinks" style={{backgroundImage: 'linear-gradient(to top, #eedc8290, #decd7990, #cebe7090, #beaf6890, #aea15f90)'}}>
                <b>SYNTH </b>
                  PRESETS  
                  <i className="fa fa-chevron-down" style={{paddingLeft:'10px'}}></i>
               </button>
               </Link>
          
            <h3>Synth presets</h3>
            <p style={{color:'lightgrey', textAlign:'center'}}>
            Stem-files are all of the tracks for one song, bundled into one single stereo track for each instrument group. 
            <br></br>
             Download and play around with them in your DAW to create your own remix.
            <br></br>
             Or simply enjoy listening to them as they are. 
            </p>
            </div>


            {/*  */}
            <div className="guitarDownloads">
            <h3>ReFX Nexus 2 
            <a href="https://www.fractalaudio.com/axe-fx-ii-downloads/">
            <div className="mini-button" title="Download the latest firmware for Sylenth">Download firmware</div>
            </a>  

            <a href="https://wiki.fractalaudio.com/gen1/index.php?title=How_to_download/upload_patches">
            <div className="mini-button-install" title="How to install the presets">Installation</div>
            </a> 

            </h3> 
            </div>


            <div className="scrollmenu">

              <div className="rectanglenex"> 
              <img src="/assets/img/synth_rounded.png" alt=""></img>
              <h5>Coming soon.</h5>
                <p>Sylenth</p>
                <hr></hr>
                <p className="commingSoonAudioSynth">
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
              </div>

              <div className="rectanglenex"> 
              <img src="/assets/img/synth_rounded.png" alt=""></img>
              <h5>Coming soon.</h5>
                <p>Sylenth</p>
                <hr></hr>
                <p className="commingSoonAudioSynth">
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
              </div>
              <div className="rectanglenex"> 
              <img src="/assets/img/synth_rounded.png" alt=""></img>
              <h5>Coming soon.</h5>
                <p>Sylenth</p>
                <hr></hr>
                <p className="commingSoonAudioSynth">
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
              </div>

            </div>










            {/*  */}

            {/*  */}
            <div className="guitarDownloads">
            <h3>Sylenth 
            <a href="https://www.fractalaudio.com/axe-fx-ii-downloads/">
            <div className="mini-button" title="Download the latest firmware for Sylenth">Download firmware</div>
            </a>  

            <a href="https://wiki.fractalaudio.com/gen1/index.php?title=How_to_download/upload_patches">
            <div className="mini-button-install" title="How to install the presets">Installation</div>
            </a> 

            </h3> 
            </div>


            <div className="scrollmenu">

              <div className="rectanglesyl"> 
              <img src="/assets/img/synth_rounded.png" alt=""></img>
              <h5>Coming soon.</h5>
                <p>Sylenth</p>
                <hr></hr>
                <p className="commingSoonAudioSynth">
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
              </div>

              <div className="rectanglesyl"> 
              <img src="/assets/img/synth_rounded.png" alt=""></img>
              <h5>Coming soon.</h5>
                <p>Sylenth</p>
                <hr></hr>
                <p className="commingSoonAudioSynth">
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
              </div>
              <div className="rectanglesyl"> 
              <img src="/assets/img/synth_rounded.png" alt=""></img>
              <h5>Coming soon.</h5>
                <p>Sylenth</p>
                <hr></hr>
                <p className="commingSoonAudioSynth">
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
              </div>

            </div>



             {/*  */}
             <div className="guitarDownloads">
            <h3>Sylenth 
            <a href="https://www.fractalaudio.com/axe-fx-ii-downloads/">
            <div className="mini-button" title="Download the latest firmware for Sylenth">Download firmware</div>
            </a>  

            <a href="https://wiki.fractalaudio.com/gen1/index.php?title=How_to_download/upload_patches">
            <div className="mini-button-install" title="How to install the presets">Installation</div>
            </a> 

            </h3> 
            </div>


            <div className="scrollmenu">

              <div className="rectangleglad"> 
              <img src="/assets/img/synth_rounded.png" alt=""></img>
              <h5>Coming soon.</h5>
                <p>Sylenth</p>
                <hr></hr>
                <p className="commingSoonAudioSynth">
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
              </div>

              <div className="rectangleglad"> 
              <img src="/assets/img/synth_rounded.png" alt=""></img>
              <h5>Coming soon.</h5>
                <p>Sylenth</p>
                <hr></hr>
                <p className="commingSoonAudioSynth">
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
              </div>
              <div className="rectangleglad"> 
              <img src="/assets/img/synth_rounded.png" alt=""></img>
              <h5>Coming soon.</h5>
                <p>Sylenth</p>
                <hr></hr>
                <p className="commingSoonAudioSynth">
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
              </div>

            </div>


            </div>
            </div>
            </div>

            <Footer/>
            </>

      );
  }
  export default AudioSynth;

