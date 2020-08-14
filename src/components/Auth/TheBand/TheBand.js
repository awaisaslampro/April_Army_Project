import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../../layout/style/TheBand.css";
import AuthNavbar from '../../Auth/AuthNavbar/AuthNavbar';
import Footer from '../../Auth/Footer/Footer';
// import Sidenav from "../../Auth/Sidenav/Sidenav";

class TheBand extends Component {
    render() {
        return (
            <>
            <AuthNavbar/>

                <div className="topBandContainer">

                    <div className="topBandDividedContainer">
                        <div className="row">
                            <div className="bandContainer mx-auto col-md-11 col-sm-11 col-11">
                                    
                                    {/* Top Profile  */}
                                <div className="topbrandImg">
                                
                                    <img src="assets/img/jimmieProfile.png" />
                                   
                                    <br></br>
                                    <br></br>
                              
                                    <h3> Jimmie Strimell</h3>
                                    <h4>Vocals</h4>
                                    <p>
                                    <a href="https://www.facebook.com/jimmie.strimell.9828"  target="_blank"><i className="fa fa-facebook-square" 
                                      style={{ fontFamily: 'FontAwesome', color: '#cecaca',fontSize: '19px'}}title="Follow me on Facebook">
                                        </i></a>
                                        <a href="https://www.instagram.com/dba_jimmie/?hl=en"  target="_blank"><i className="fa fa-instagram" style={{ fontFamily: 'FontAwesome',marginLeft: '7px', color: '#cecaca',
                                         fontSize: '19px'}} title="Follow me on Instagram">
                                        </i></a>
                                    </p>
                             
                                </div>
                                 {/* End Top Profile  */}
                                <div className="bandDescriptionContainer">
                                    <div className="bandDescription">
                                        <h3>Sennheiser E945
                                        <img src="assets/img/band-mic.png" alt=""/>     
                                        </h3>
                                        <ul className="bandDescriptionPoints">
                                            <li><i className="fa fa-circle circleStyle"></i>Supercardioid</li>
                                            <li><i className="fa fa-circle circleStyle"></i>Frequency range: 40-18,000 Hz</li>
                                            <li><i className="fa fa-circle circleStyle"></i>In-ears: Ultimate Ears</li>
                                            <li><i className="fa fa-circle circleStyle"></i> Awesome voice</li>
                                        </ul>

                                        {/* Personal interests */}
                                        <hr className="bandDescriptionSeperator"></hr>

                                    </div>
                                    <div className="remarks">
                                        <h3>Personal interests</h3>
                                        <div className="scrollbar" id="musicScrollerStyle">
                                            
                                        <p>
                                            Music in general, hang around in the studio to create and record new songs.
                                            Eating good food – I LOVE mexican food! I have always been interested in fashion and different
                                            clothing. I like to mix different styles and colors. And of course – tattoos!
                                            I also FREAKING love to tour around the world to play our music and meet to all of you wonderfull people/fans out there.
                                      </p>
                                      </div>
                                    </div>

                                    {/* Most memorable DBA moment */}
                                    <hr className="bandDescriptionSeperator"></hr>


                                    <div className="remarks">
                                        <h3>Most memorable DBA moment</h3>
                                        <p>
                                            I would say when Dead by April won best song 2009 (Losing You) at Bandit Radio Awards.
                                             And this was before we had signed a record deal. That was mindblowing, and of course when me and Pontus won ”Best Newcomer/Songwriter".
                                             This also with our first single Losing You.
                                     </p>
                                    </div>
                                    {/* Favorite DBA Concert */}
                                    <hr className="bandDescriptionSeperator"></hr>

                                    <div className="remarks">
                                        <h3>Favorite DBA Concert</h3>
                                        <p>
                                            Playing at a sold out Sonisphere in the summer of 2011 in Stockholm, Sweden.
                                            It was a dream come true to be able to share the stage with bands like Slipknot and In Flames.
                                             And we got the honor to open up the whole festival!
                                         </p>
                                    </div>
                                    {/* Seperated Line */}
                                    <hr className="bandDescriptionSeperator"></hr>

                                    <div className="remarks">
                                        <h3>Favorite DBA Concert</h3>
                                        <ul className="bandInterest">
                                            <li><i className="fa fa-film bandInterestStyle"></i>Best movie:<Link to={'https://www.imdb.com/title/tt0407887/'}
                                                target="_blank" className="bandInterestLink">The Departed</Link>
                                            </li>
                                            <li><i className="fa fa-tv bandInterestStyle"></i>Best series:<Link to={'https://www.imdb.com/title/tt0407887/'}
                                                target="_blank" className="bandInterestLink"> Breaking Bad</Link>
                                            </li>
                                            <li><i className="fa fa-music bandInterestStyle" style={{marginRight:'13px'}}></i>Best song:<Link to={'https://www.imdb.com/title/tt0407887/'}
                                                target="_blank" className="bandInterestLink">Meshuggah – Sickening</Link>
                                            </li>
                                            <li><i className="fa fa-check-circle bandInterestStyle" style={{marginRight:'10px'}}></i> Motto: Never give up.
                                          </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* next singer */}

                        <div className="row">
                            <div className="bandContainer mx-auto col-md-11 col-sm-11 col-11">
                                      {/* Top Profile  */}
                                      <div className="topbrandImg">
                                   
                                    <img src="assets/img/pontusProfile.png" />
                                    <br></br>
                                    <br></br>
                                  
                                    <h3> Jimmie Strimell</h3>
                                    <h4>Vocals</h4>
                                    <p>
                                    <a href="https://www.facebook.com/jimmie.strimell.9828"  target="_blank"><i className="fa fa-facebook-square" 
                                      style={{ fontFamily: 'FontAwesome', color: '#cecaca',fontSize: '19px'}}title="Follow me on Facebook">
                                        </i></a>
                                        <a href="https://www.instagram.com/dba_jimmie/?hl=en"  target="_blank"><i className="fa fa-instagram" style={{ fontFamily: 'FontAwesome',marginLeft: '7px', color: '#cecaca',
                                         fontSize: '19px'}} title="Follow me on Instagram">
                                        </i></a>
                                    </p>
                                  
                                </div>
                                 {/* End Top Profile  */}
                                
                                <div className="bandDescriptionContainer">
                                    <div className="bandDescription">
                                        <h3>Sennheiser E945
                                        <img src="assets/img/band-guitar.png" alt=""/>    
                                        </h3>
                                        <ul className="bandDescriptionPoints">
                                            <li><i className="fa fa-circle circleStyle"></i>Supercardioid</li>
                                            <li><i className="fa fa-circle circleStyle"></i>Frequency range: 40-18,000 Hz</li>
                                            <li><i className="fa fa-circle circleStyle"></i>In-ears: Ultimate Ears</li>
                                            <li><i className="fa fa-circle circleStyle"></i> Awesome voice</li>
                                        </ul>

                                        {/* Personal interests */}
                                        <hr className="bandDescriptionSeperator"></hr>

                                    </div>
                                    <div className="remarks">
                                        <h3>Personal interests</h3>
                                        <div className="scrollbar" id="musicScrollerStyle">
                                        <p>
                                            Music in general, hang around in the studio to create and record new songs.
                                            Eating good food – I LOVE mexican food! I have always been interested in fashion and different
                                            clothing. I like to mix different styles and colors. And of course – tattoos!
                                            I also FREAKING love to tour around the world to play our music and meet to all of you wonderfull people/fans out there.
                                     </p>
                                     </div>
                                    </div>

                                    {/* Most memorable DBA moment */}
                                    <hr className="bandDescriptionSeperator"></hr>


                                    <div className="remarks">
                                        <h3>Most memorable DBA moment</h3>
                                        <p>
                                            I would say when Dead by April won best song 2009 (Losing You) at Bandit Radio Awards.
                                             And this was before we had signed a record deal. That was mindblowing, and of course when me and Pontus won ”Best Newcomer/Songwriter".
                                             This also with our first single Losing You.
                                          </p>
                                    </div>
                                    {/* Favorite DBA Concert */}
                                    <hr className="bandDescriptionSeperator"></hr>

                                    <div className="remarks">
                                        <h3>Favorite DBA Concert</h3>
                                        <p>
                                            Playing at a sold out Sonisphere in the summer of 2011 in Stockholm, Sweden.
                                            It was a dream come true to be able to share the stage with bands like Slipknot and In Flames.
                                             And we got the honor to open up the whole festival!
                                         </p>
                                    </div>
                                    {/* Seperated Line */}
                                    <hr className="bandDescriptionSeperator"></hr>

                                    <div className="remarks">
                                        <h3>Favorite DBA Concert</h3>
                                        <ul className="bandInterest">
                                            <li><i className="fa fa-film bandInterestStyle"></i>Best movie:<Link to={'https://www.imdb.com/title/tt0407887/'}
                                                target="_blank" className="bandInterestLink">The Departed</Link>
                                            </li>
                                            <li><i className="fa fa-tv bandInterestStyle"></i>Best series:<Link to={'https://www.imdb.com/title/tt0407887/'}
                                                target="_blank" className="bandInterestLink"> Breaking Bad</Link>
                                            </li>
                                            <li><i className="fa fa-music bandInterestStyle" style={{marginRight:'13px'}}></i>Best song:<Link to={'https://www.imdb.com/title/tt0407887/'}
                                                target="_blank" className="bandInterestLink">Meshuggah – Sickening</Link>
                                            </li>
                                            <li><i className="fa fa-check-circle bandInterestStyle" style={{marginRight:'10px'}}></i> Motto: Never give up.
                                       </li>
                                        </ul>


                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="row">
                            <div className="bandContainer mx-auto col-md-11 col-sm-11 col-11">
                                      {/* Top Profile  */}
                                      <div className="topbrandImg">
                                    <div>      
                                    <img src="assets/img/marcusProfile.png" />
                                    </div>
                                    <br></br>
                                    <br></br>
                                   <div>
                                    <h3> Jimmie Strimell</h3>
                                    <h4>Vocals</h4>
                                    <p>
                                    <a href="https://www.facebook.com/jimmie.strimell.9828"  target="_blank"><i className="fa fa-facebook-square" 
                                      style={{ fontFamily: 'FontAwesome', color: '#cecaca',fontSize: '19px'}}title="Follow me on Facebook">
                                        </i></a>
                                        <a href="https://www.instagram.com/dba_jimmie/?hl=en"  target="_blank"><i className="fa fa-instagram" style={{ fontFamily: 'FontAwesome',marginLeft: '7px', color: '#cecaca',
                                         fontSize: '19px'}} title="Follow me on Instagram">
                                        </i></a>
                                    </p>
                                    </div>
                                </div>
                                 {/* End Top Profile  */}
                                
                                <div className="bandDescriptionContainer">
                                    <div className="bandDescription">
                                        <h3>Sennheiser E945
                                        <img src="assets/img/band-snare.png" alt=""/>    
                                        </h3>
                                        <ul className="bandDescriptionPoints">
                                            <li><i className="fa fa-circle circleStyle"></i>Supercardioid</li>
                                            <li><i className="fa fa-circle circleStyle"></i>Frequency range: 40-18,000 Hz</li>
                                            <li><i className="fa fa-circle circleStyle"></i>In-ears: Ultimate Ears</li>
                                            <li><i className="fa fa-circle circleStyle"></i> Awesome voice</li>
                                        </ul>

                                        {/* Personal interests */}
                                        <hr className="bandDescriptionSeperator"></hr>

                                    </div>
                                    <div className="remarks">
                                        <h3>Personal interests</h3>
                                        <div className="scrollbar" id="musicScrollerStyle">
                                        <p>
                                            Music in general, hang around in the studio to create and record new songs.
                                            Eating good food – I LOVE mexican food! I have always been interested in fashion and different
                                            clothing. I like to mix different styles and colors. And of course – tattoos!
                                            I also FREAKING love to tour around the world to play our music and meet to all of you wonderfull people/fans out there.
                                       </p>
                                       </div>
                                    </div>

                                    {/* Most memorable DBA moment */}
                                    <hr className="bandDescriptionSeperator"></hr>


                                    <div className="remarks">
                                        <h3>Most memorable DBA moment</h3>
                                        <p>
                                            I would say when Dead by April won best song 2009 (Losing You) at Bandit Radio Awards.
                                             And this was before we had signed a record deal. That was mindblowing, and of course when me and Pontus won ”Best Newcomer/Songwriter".
                                             This also with our first single Losing You.
                                          </p>
                                    </div>
                                    {/* Favorite DBA Concert */}
                                    <hr className="bandDescriptionSeperator"></hr>

                                    <div className="remarks">
                                        <h3>Favorite DBA Concert</h3>
                                        <p>
                                            Playing at a sold out Sonisphere in the summer of 2011 in Stockholm, Sweden.
                                            It was a dream come true to be able to share the stage with bands like Slipknot and In Flames.
                                             And we got the honor to open up the whole festival!
                                      </p>
                                    </div>
                                    {/* Seperated Line */}
                                    <hr className="bandDescriptionSeperator"></hr>

                                    <div className="remarks">
                                        <h3>Favorite DBA Concert</h3>
                                        <ul className="bandInterest">
                                            <li><i className="fa fa-film bandInterestStyle"></i>Best movie:<Link to={'https://www.imdb.com/title/tt0407887/'}
                                                target="_blank" className="bandInterestLink">The Departed</Link>
                                            </li>
                                            <li><i className="fa fa-tv bandInterestStyle"></i>Best series:<Link to={'https://www.imdb.com/title/tt0407887/'}
                                                target="_blank" className="bandInterestLink"> Breaking Bad</Link>
                                            </li>
                                            <li><i className="fa fa-music bandInterestStyle" style={{marginRight:'13px'}}></i>Best song:<Link to={'https://www.imdb.com/title/tt0407887/'}
                                                target="_blank" className="bandInterestLink">Meshuggah – Sickening</Link>
                                            </li>
                                              <li><i className="fa fa-check-circle bandInterestStyle" style={{marginRight:'10px'}}></i> Motto: Never give up.
                                         </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="row">
                            <div className="bandContainer mx-auto col-md-11 col-sm-12 col-12">
                                      {/* Top Profile  */}
                                      <div className="topbrandImg">
                                    <img src="assets/img/marcusWesslenProfile.png" />
                                    <br></br>
                                    <br></br>
                                    <h3> Jimmie Strimell</h3>
                                    <h4>Vocals</h4>
                                    <p>
                                    <a href="https://www.facebook.com/jimmie.strimell.9828"  target="_blank"><i className="fa fa-facebook-square" 
                                      style={{ fontFamily: 'FontAwesome', color: '#cecaca',fontSize: '19px'}}title="Follow me on Facebook">
                                        </i></a>
                                        <a href="https://www.instagram.com/dba_jimmie/?hl=en"  target="_blank"><i className="fa fa-instagram" style={{ fontFamily: 'FontAwesome',marginLeft: '7px', color: '#cecaca',
                                         fontSize: '19px'}} title="Follow me on Instagram">
                                        </i></a>
                                    </p>
                                </div>
                                 {/* End Top Profile  */}
                              
                                <div className="bandDescriptionContainer">
                                    <div className="bandDescription">
                                        <h3>Sennheiser E945
                                        <img src="assets/img/band-bass.png" alt=""/>  
                                        </h3>
                                        <ul className="bandDescriptionPoints">
                                            <li><i className="fa fa-circle circleStyle"></i>Supercardioid</li>
                                            <li><i className="fa fa-circle circleStyle"></i>Frequency range: 40-18,000 Hz</li>
                                            <li><i className="fa fa-circle circleStyle"></i>In-ears: Ultimate Ears</li>
                                            <li><i className="fa fa-circle circleStyle"></i> Awesome voice</li>
                                        </ul>

                                        {/* Personal interests */}
                                        <hr className="bandDescriptionSeperator"></hr>

                                    </div>
                                    <div className="remarks">
                                        <h3>Personal interests</h3>
                                        <div className="scrollbar" id="musicScrollerStyle">
                                        <p>
                                            Music in general, hang around in the studio to create and record new songs.
                                            Eating good food – I LOVE mexican food! I have always been interested in fashion and different
                                            clothing. I like to mix different styles and colors. And of course – tattoos!
                                            I also FREAKING love to tour around the world to play our music and meet to all of you wonderfull people/fans out there.
                                       </p>
                                       </div>
                                    </div>

                                    {/* Most memorable DBA moment */}
                                    <hr className="bandDescriptionSeperator"></hr>


                                    <div className="remarks">
                                        <h3>Most memorable DBA moment</h3>
                                        <p>
                                            I would say when Dead by April won best song 2009 (Losing You) at Bandit Radio Awards.
                                             And this was before we had signed a record deal. That was mindblowing, and of course when me and Pontus won ”Best Newcomer/Songwriter".
                                             This also with our first single Losing You.
                                         </p>
                                    </div>
                                    {/* Favorite DBA Concert */}
                                    <hr className="bandDescriptionSeperator"></hr>

                                    <div className="remarks">
                                        <h3>Favorite DBA Concert</h3>
                                        <p>
                                            Playing at a sold out Sonisphere in the summer of 2011 in Stockholm, Sweden.
                                            It was a dream come true to be able to share the stage with bands like Slipknot and In Flames.
                                             And we got the honor to open up the whole festival!
                                         </p>
                                    </div>
                                    {/* Seperated Line */}
                                    <hr className="bandDescriptionSeperator"></hr>

                                    <div className="remarks">
                                        <h3>Favorite DBA Concert</h3>
                                        <ul className="bandInterest">
                                            <li><i className="fa fa-film bandInterestStyle"></i>Best movie:<Link to={'https://www.imdb.com/title/tt0407887/'}
                                                target="_blank" className="bandInterestLink">The Departed</Link>
                                            </li>
                                            <li><i className="fa fa-tv bandInterestStyle"></i>Best series:<Link to={'https://www.imdb.com/title/tt0407887/'}
                                                target="_blank" className="bandInterestLink"> Breaking Bad</Link>
                                            </li>
                                            <li><i className="fa fa-music bandInterestStyle" style={{marginRight:'13px'}}></i>Best song:<Link to={'https://www.imdb.com/title/tt0407887/'}
                                                target="_blank" className="bandInterestLink">Meshuggah – Sickening</Link>
                                            </li>
                                            <li><i className="fa fa-check-circle bandInterestStyle" style={{marginRight:'10px'}}></i> Motto: Never give up.
                                          </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            <Footer/>
            </>
        );
    }
}
export default TheBand;