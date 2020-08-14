import React from 'react';
import '../../../layout/style/AudioGuitar.css';
import { Link } from 'react-router-dom';
import AuthNavbar from '../../Auth/AuthNavbar/AuthNavbar';
import Footer from '../../Auth/Footer/Footer';

  function AudioGuitar(){
      return (
        <>
        <AuthNavbar/>

        <div className="AudioGuitarTopContainer">
        <div className="row">
          <div className="col-md-12">
          
            <div className="audioTabButtons">
            <Link to="/Audio"><button id="defaultOpen" className="AudioTablinks" style={{margin:'3px'}}>
                <b>STEM</b>
                  -FILES 
                  <i className="fa fa-chevron-down" style={{paddingLeft:'10px'}}></i>
               </button>
               </Link>

               <Link to="/AudioGuitar"><button id="defaultOpen" className="AudioTablinks" style={{margin:'3px',backgroundImage: 'linear-gradient(to top, #eedc8290, #decd7990, #cebe7090, #beaf6890, #aea15f90)'}}>
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
          
            <h3>Guitar presets</h3>
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
            <h3>Axe FX II            
            <a href="https://www.fractalaudio.com/axe-fx-ii-downloads/">
            <div className="mini-button" title="Download the latest firmware for Axe FX II">Download firmware</div>
            </a>  
            <a href="https://wiki.fractalaudio.com/gen1/index.php?title=How_to_download/upload_patches">
            <div className="mini-button-install" title="How to install the presets">Installation</div>
            </a> 
            </h3>
            </div>


            <div className="scrollmenu">
            <div className="rectangleaxe">
            <img src="/assets/img/git_rounded.png" alt=""></img>
                <h5>Rhythm Preset 1</h5>
                <p>Axe FX II</p>
                <hr></hr>
                <p>
                Includes 1 rhythm preset
                <br></br>
                for the hardware preamp Axe FX II.
                <br></br>
                Description coming soon.    
                <br></br>
                <br></br>
                You can still download the patch. 
                <br></br>
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
            </div>

            <div className="rectangleaxe">
            <img src="/assets/img/git_rounded.png" alt=""></img>
                <h5>Rhythm Preset 1</h5>
                <p>Axe FX II</p>
                <hr></hr>
                <p>
                Includes 1 rhythm preset
                <br></br>
                for the hardware preamp Axe FX II.
                <br></br>
                Description coming soon.
                <br></br>
                <br></br>
                You can still download the patch. 
                <br></br>
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
            </div>

            <div className="rectangleaxe">
            <img src="/assets/img/git_rounded.png" alt=""></img>
                <h5>Rhythm Preset 1</h5>
                <p>Axe FX II</p>
                <hr></hr>
                <p>
                Includes 1 rhythm preset
                <br></br>
                for the hardware preamp Axe FX II.
                <br></br>
                Description coming soon.
                <br></br>
                <br></br>
                You can still download the patch. 
                <br></br>
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
            </div>

            <div className="rectangleaxe">
            <img src="/assets/img/git_rounded.png" alt=""></img>
                <h5>Rhythm Preset 1</h5>
                <p>Axe FX II</p>
                <hr></hr>
                <p>
                Includes 1 rhythm preset
                <br></br>
                for the hardware preamp Axe FX II.
                <br></br>
                Description coming soon.
                <br></br>
                <br></br>
                You can still download the patch. 
                <br></br>
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
            </div>

            <div className="rectangleaxe">
            <img src="/assets/img/git_rounded.png" alt=""></img>
                <h5>Rhythm Preset 1</h5>
                <p>Axe FX II</p>
                <hr></hr>
                <p>
                Includes 1 rhythm preset
                <br></br>
                for the hardware preamp Axe FX II.
                <br></br>
                Description coming soon.
                <br></br>
                <br></br>
                You can still download the patch. 
                <br></br>
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
            </div>

            <div className="rectangleaxe">
            <img src="/assets/img/git_rounded.png" alt=""></img>
                <h5>Rhythm Preset 1</h5>
                <p>Axe FX II</p>
                <hr></hr>
                <p>
                Includes 1 rhythm preset
                <br></br>
                for the hardware preamp Axe FX II.
                <br></br>
                Description coming soon.
                <br></br>
                <br></br>
                You can still download the patch. 
                <br></br>
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
            </div>

            </div>







             {/*  */}
             <div className="guitarDownloads">
            <h3>Axe FX ULTRA
            <a href="https://www.fractalaudio.com/axe-fx-ii-downloads/">
            <div className="mini-button" title="Download the latest firmware for Axe FX II">Download firmware</div>
            </a>  

            <a href="https://wiki.fractalaudio.com/gen1/index.php?title=How_to_download/upload_patches">
            <div className="mini-button-install" title="How to install the presets">Installation</div>
            </a> 

            </h3> 
            </div>


            {/*  */}
            <div className="scrollmenu">
            <div className="rectangleultra">
            <img src="/assets/img/git_rounded.png" alt=""></img>
                <h5>Rhythm Preset 1</h5>
                <p>Axe FX ULTRA</p>
                <hr></hr>
                <p>
                Includes 1 rhythm preset for the
                <br></br>
                hardware preamp Axe FX ULTRA.
                <br></br>
                Hi-mid, djenty tone.
                <br></br>
                This preset was used on 
                <br></br>     
                the Incomparable album.
                <br></br>
                Enjoy!
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
            </div>

            <div className="rectangleultra">
            <img src="/assets/img/git_rounded.png" alt=""></img>
                <h5>Rhythm Preset 1</h5>
                <p>Axe FX ULTRA</p>
                <hr></hr>
                <p>
                Includes 1 rhythm preset for the
                <br></br>
                hardware preamp Axe FX ULTRA.
                <br></br>
                Hi-mid, djenty tone.
                <br></br>
                This preset was used on 
                <br></br>     
                the Incomparable album.
                <br></br>
                Enjoy!
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
            </div>

            <div className="rectangleultra">
            <img src="/assets/img/git_rounded.png" alt=""></img>
                <h5>Rhythm Preset 1</h5>
                <p>Axe FX ULTRA</p>
                <hr></hr>
                <p>
                Includes 1 rhythm preset for the
                <br></br>
                hardware preamp Axe FX ULTRA.
                <br></br>
                Hi-mid, djenty tone.
                <br></br>
                This preset was used on 
                <br></br>     
                the Incomparable album.
                <br></br>
                Enjoy!
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
            </div>

           <div className="rectangleultra">
            <img src="/assets/img/git_rounded.png" alt=""></img>
                <h5>Rhythm Preset 1</h5>
                <p>Axe FX ULTRA</p>
                <hr></hr>
                <p>
                Includes 1 rhythm preset for the
                <br></br>
                hardware preamp Axe FX ULTRA.
                <br></br>
                Hi-mid, djenty tone.
                <br></br>
                This preset was used on 
                <br></br>     
                the Incomparable album.
                <br></br>
                Enjoy!
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
            </div>

            <div className="rectangleultra">
            <img src="/assets/img/git_rounded.png" alt=""></img>
                <h5>Rhythm Preset 1</h5>
                <p>Axe FX ULTRA</p>
                <hr></hr>
                <p>
                Includes 1 rhythm preset for the
                <br></br>
                hardware preamp Axe FX ULTRA.
                <br></br>
                Hi-mid, djenty tone.
                <br></br>
                This preset was used on 
                <br></br>     
                the Incomparable album.
                <br></br>
                Enjoy!
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
            </div>

            </div>







              {/*  */}
              <div className="guitarDownloads">
            <h3>POD HD PRO
            <a href="https://www.fractalaudio.com/axe-fx-ii-downloads/">
            <div className="mini-button" title="Download the latest firmware for Axe FX II">Download firmware</div>
            </a>  

            <a href="https://wiki.fractalaudio.com/gen1/index.php?title=How_to_download/upload_patches">
            <div className="mini-button-install" title="How to install the presets">Installation</div>
            </a> 
            </h3> 
            </div>


            {/*  */}
            <div className="scrollmenu">
            <div className="rectanglepod">
            <img src="/assets/img/git_rounded.png" alt=""></img>
                <h5>Rhythm Bundle 1</h5>
                <p>Line 6 POD HD</p>
                <hr></hr>
                <p>
                Includes 1 rhythm preset for the
                <br></br>
                hardware preamp Axe FX ULTRA.
                <br></br>
                Hi-mid, djenty tone.
                <br></br>
                This preset was used on 
                <br></br>     
                the Incomparable album.
                <br></br>
                Enjoy!
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
            </div>

            <div className="rectanglepod">
            <img src="/assets/img/git_rounded.png" alt=""></img>
                <h5>Rhythm Bundle 1</h5>
                <p>Line 6 POD HD</p>
                <hr></hr>
                <p>
                Includes 1 rhythm preset for the
                <br></br>
                hardware preamp Axe FX ULTRA.
                <br></br>
                Hi-mid, djenty tone.
                <br></br>
                This preset was used on 
                <br></br>     
                the Incomparable album.
                <br></br>
                Enjoy!
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
            </div>

            <div className="rectanglepod">
            <img src="/assets/img/git_rounded.png" alt=""></img>
                <h5>Rhythm Bundle 1</h5>
                <p>Line 6 POD HD</p>
                <hr></hr>
                <p>
                Includes 1 rhythm preset for the
                <br></br>
                hardware preamp Axe FX ULTRA.
                <br></br>
                Hi-mid, djenty tone.
                <br></br>
                This preset was used on 
                <br></br>     
                the Incomparable album.
                <br></br>
                Enjoy!
                </p>
                <hr></hr>
                 <a className="fa fa-arrow-circle-down fa-lg grow shadowfilter" href="https://1694402697.rsc.cdn77.org/stem-files/COY-STEMS.zip"  download 
                  style={{color:'lightgrey', margin: '9px 10px 5px 5px', float:'right',   fontSize: '20px'}}
                  title="Download"> </a>
            </div>

            <div className="rectanglepod">
            <img src="/assets/img/git_rounded.png" alt=""></img>
                <h5>Rhythm Bundle 1</h5>
                <p>Line 6 POD HD</p>
                <hr></hr>
                <p>
                Includes 1 rhythm preset for the
                <br></br>
                hardware preamp Axe FX ULTRA.
                <br></br>
                Hi-mid, djenty tone.
                <br></br>
                This preset was used on 
                <br></br>     
                the Incomparable album.
                <br></br>
                Enjoy!
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
  export default AudioGuitar;


