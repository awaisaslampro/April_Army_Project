import React from 'react';
import '../../../layout/style/Quizes.css';
import { Link } from 'react-router-dom';
import AuthNavbar from '../../Auth/AuthNavbar/AuthNavbar';
import Footer from '../../Auth/Footer/Footer';
function Quizes() {
    return (
        <>
        <AuthNavbar/>
        
        <div className=" quizContainer">
            <div className="circlePoints row">
                <ul className="col-md-8 mx-auto">
                    <li>
                        <span className="dot"></span>
                        <li>
                            <span className="rateStatement2">Correct Rate</span>
                        </li>
                        <div className="dot1">
                                <span className="rate1">0/3</span>
                            </div>
                    </li>

                    <li>
                        <span className="dot"></span>
                        <li>
                            <div className="dot2">
                                <span className="rate2">1</span>
                            </div>
                        </li>
                        <li>
                            <span className="rateStatement2">Correct Streak</span>
                        </li>
                    </li>
                    <li>
                        <span className="dot"></span>
                        <li>
                            <div className="dot3">
                                <span className="rate3">10</span>
                            </div>
                        </li>
                        <li>
                            <span className="rateStatement3">Response Time</span>
                        </li>
                    </li>
                </ul>
            </div>


            {/* /////////////////  Question Statement  /////////*/}

            <div className=" row questionSentence">
                <div className="col-md-7 col-sm-7 ">
                    <h5>When was Marcus Rosell's first ever show as a drummer with dead by April?</h5>
                </div>
            </div>
            {/* Question options */}
            <div className="row clickOptions">
                <div className="">
                    <div className="quizOptions leftOptions col-md-4 zero-pad">

                        <Link style={{ backgroundColor: '#69121ae6' }} className="singleOption" to="/Quizes" >2012</Link>
                    </div>

                    <div className="quizOptions leftOptions col-md-4 zero-pad">
                        <Link style={{ backgroundColor: '#333537f2' }} className="singleOption" to="/Quizes" >2010</Link>
                    </div>
                </div>
                <div >
                    <div className="quizOptions rightOptions col-md-4 zero-pad">
                        <Link style={{ backgroundColor: '#333537f2' }} className="singleOption" to="/Quizes" >2013</Link>
                    </div>
                    <div className="quizOptions rightOptions col-md-4 zero-pad">
                        <Link style={{ backgroundColor: 'lightgreen' }} className="singleOption" to="/Quizes" >2011</Link>
                    </div>
                </div>

            </div>
        </div>
        <Footer/>
        </>
    );
}
export default Quizes;