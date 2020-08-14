import React from 'react';
import '../../../layout/style/Games.css';
import { Link } from 'react-router-dom';
import AuthNavbar from '../../Auth/AuthNavbar/AuthNavbar';
import Footer from '../../Auth/Footer/Footer';
  function Games(){
      return (
  <>

 <AuthNavbar/>
 {/* End AuthNavbar */}

     <div className="gamesContainer">
            <div className="gameHeader">
                <div> <hr className="gamesHrLeft"></hr></div>
                <div><h3>Games</h3></div>
                <div> <hr className="gamesHrRight"></hr></div>
            </div>
            

            <div className="gamesImages">
               
                <div className="quizContent">
                <div className="quizDisplay">
                    <img src={"/assets/img/logo.png"} />
                </div>
                <div>
                    <Link to="/Quizes" ><input className="startQuizButton" type="button" value="Start Quiz" ></input></Link>
                </div>
                </div>

                <div className="downloadGameContent">  

                <div className="csgoContainer">
                    <img  className="csgo" src={"/assets/img/csgo.jpg"} />
                </div>
                <div>
                    <Link to="/Download" ><input className="gamesButton" type="button" value="DOWNLOAD" ></input></Link>
                </div>
                </div>

                <div className="otherGamesContent">
                <div className="otherGamesDisplay">
                    <img src={"/assets/img/logo.png"} />
                </div>
                <div>
                    <Link to="/Games"><input className="gamesButton" type="button" value="Other Games" ></input></Link>
                </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>

    );
}

export default Games;