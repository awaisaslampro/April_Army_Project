import React from 'react';
import '../../../layout/style/Audio.css';
import { Link } from 'react-router-dom';
import AuthNavbar from '../../Auth/AuthNavbar/AuthNavbar';
import Footer from '../../Auth/Footer/Footer';

  function Audio(){
      return (

        <>
        <AuthNavbar/>

        <div className="audioTopContainer">
          <div className="row">
            <div className="col-md-12">
            
              <div className="audioTabButtons">
               <Link to="/Audio"><button id="defaultOpen" className="AudioTablinks" style={{margin:'3px', backgroundImage: 'linear-gradient(to top, #eedc8290, #decd7990, #cebe7090, #beaf6890, #aea15f90)'}}>
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
               <Link to="/AudioSynth"> <button id="defaultOpen" className="AudioTablinks">
                <b>SYNTH </b>
                  PRESETS  
                  <i className="fa fa-chevron-down" style={{paddingLeft:'10px'}}></i>
               </button>
               </Link>
            
              <h3>Stem-files</h3>
              <p style={{color:'lightgrey', textAlign:'center'}}>
              Stem-files are all of the tracks for one song, bundled into one single stereo track for each instrument group. 
              <br></br>
               Download and play around with them in your DAW to create your own remix.
              <br></br>
               Or simply enjoy listening to them as they are. 
              </p>
              </div>






            <h3 className="audioHeader">Worlds Collide</h3>
            <div className="scrollmenu">
              <div className="audioRectanglewc">
                <img src="/assets/img/wc_rounded_big.png" alt=""></img>
                <h5>1. Crying Over You</h5>
                <p>Worlds Collide</p>
                <hr className=""></hr>
                <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
               </div>

               <div className="audioRectanglewc">
                <img src="/assets/img/wc_rounded_big.png" alt=""></img>
                <h5>2. Crying Over You</h5>
                <p>Worlds Collide</p>
                <hr className=""></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
               </div>

               <div className="audioRectanglewc">
                <img src="/assets/img/wc_rounded_big.png" alt=""></img>
                <h5>3. Crying Over You</h5>
                <p>Worlds Collide</p>
                <hr className=""></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
               </div>

               <div className="audioRectanglewc">
                <img src="/assets/img/wc_rounded_big.png" alt=""></img>
                <h5>4. Crying Over You</h5>
                <p>Worlds Collide</p>
                <hr className=""></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
               </div>

               <div className="audioRectanglewc">
                <img src="/assets/img/wc_rounded_big.png" alt=""></img>
                <h5>5. Crying Over You</h5>
                <p>Worlds Collide</p>
                <hr className=""></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
               </div>

               <div className="audioRectanglewc">
                <img src="/assets/img/wc_rounded_big.png" alt=""></img>
                <h5>6. Crying Over You</h5>
                <p>Worlds Collide</p>
                <hr className=""></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
               </div>

            </div>

              {/* Let the world Know Audio*/}
              <h3 className="audioHeader">Let The World Know</h3>
              <div className="scrollmenu">
                <div className="rectangleltwk">
                  <img src="/assets/img/ltwk_rounded_big.png" alt=""></img>
                  <h5>1. Beautiful Nightmare</h5>
                  <p>Let The World Know</p>
                  <hr></hr>
                   <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
                </div>

                <div className="rectangleltwk">
                  <img src="/assets/img/ltwk_rounded_big.png" alt=""></img>
                  <h5>1. Beautiful Nightmare</h5>
                  <p>Let The World Know</p>
                  <hr></hr>
                   <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
                </div>

                <div className="rectangleltwk">
                  <img src="/assets/img/ltwk_rounded_big.png" alt=""></img>
                  <h5>1. Beautiful Nightmare</h5>
                  <p>Let The World Know</p>
                  <hr></hr>
                   <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
                </div>

                <div className="rectangleltwk">
                  <img src="/assets/img/ltwk_rounded_big.png" alt=""></img>
                  <h5>1. Beautiful Nightmare</h5>
                  <p>Let The World Know</p>
                  <hr></hr>
                   <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
                </div>

                <div className="rectangleltwk">
                  <img src="/assets/img/ltwk_rounded_big.png" alt=""></img>
                  <h5>1. Beautiful Nightmare</h5>
                  <p>Let The World Know</p>
                  <hr></hr>
                   <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
                </div>

                <div className="rectangleltwk">
                  <img src="/assets/img/ltwk_rounded_big.png" alt=""></img>
                  <h5>1. Beautiful Nightmare</h5>
                  <p>Let The World Know</p>
                  <hr></hr>
                   <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
                </div>

              </div>


             {/* Dead by April Audio*/}
              <h3 className="audioHeader">Dead by April</h3>
              <div className="scrollmenu">
                <div className="rectangledba">
                  <img src="/assets/img/debut_rounded_big.png" alt=""></img>
                  <h5>1. Trapped</h5>
                  <p>Dead by April</p>
                  <hr></hr>
                   <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
                </div>

                <div className="rectangledba">
                  <img src="/assets/img/debut_rounded_big.png" alt=""></img>
                  <h5>1. Trapped</h5>
                  <p>Dead by April</p>
                  <hr></hr>
                   <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
                </div>

                <div className="rectangledba">
                  <img src="/assets/img/debut_rounded_big.png" alt=""></img>
                  <h5>1. Trapped</h5>
                  <p>Dead by April</p>
                  <hr></hr>
                   <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
                </div>

                <div className="rectangledba">
                  <img src="/assets/img/debut_rounded_big.png" alt=""></img>
                  <h5>1. Trapped</h5>
                  <p>Dead by April</p>
                  <hr></hr>
                   <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
                </div>

                  <div className="rectangledba">
                  <img src="/assets/img/debut_rounded_big.png" alt=""></img>
                  <h5>1. Trapped</h5>
                  <p>Dead by April</p>
                  <hr></hr>
                   <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
                </div>

                <div className="rectangledba">
                  <img src="/assets/img/debut_rounded_big.png" alt=""></img>
                  <h5>1. Trapped</h5>
                  <p>Dead by April</p>
                  <hr></hr>
                   <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
                </div>
                </div>
              


                {/* Re-recordings Audio*/}
              <h3 className="audioHeader">Re-recordings</h3>
              <div className="scrollmenu">
                <div className="rectanglerr">
                  <img src="/assets/img/rr_rounded_big.png" alt=""></img>
                  <h5>1. As A Butterfly</h5>
                  <p>Re-recordings</p>
                  <hr></hr>
                   <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
                </div>

                <div className="rectanglerr">
                  <img src="/assets/img/debut_rounded_big.png" alt=""></img>
                  <h5>1. Trapped</h5>
                  <p>Dead by April</p>
                  <hr></hr>
                   <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
                </div>

                <div className="rectanglerr">
                  <img src="/assets/img/debut_rounded_big.png" alt=""></img>
                  <h5>1. Trapped</h5>
                  <p>Dead by April</p>
                  <hr></hr>
                   <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
                </div>
                </div>


                 {/* Miscellaneous Audio*/}
              <h3 className="audioHeader">Miscellaneous</h3>
              <div className="scrollmenu">
                <div className="rectanglemisc">
                  <img src="/assets/img/misc_rounded_big.png" alt=""></img>
                  <h5>1. As A Butterfly</h5>
                  <p>Re-recordings</p>
                  <hr></hr>
                   <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
                </div>

                <div className="rectanglemisc">
                  <img src="/assets/img/misc_rounded_big.png" alt=""></img>
                  <h5>1. Trapped</h5>
                  <p>Dead by April</p>
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
  export default Audio;
        