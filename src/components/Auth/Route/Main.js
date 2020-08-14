import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../../../pages/Home/LandingPage';
import Home from '../../../pages/Home/Home';

import ContactUs from '../../../pages/ContactUs/ContactUs';

import Game from '../../../pages/Game/Game';
import Login from '../../Auth/Login/Login';
import Register from '../../Auth/Register/Register';
import Profile from '../../Auth/Profile/Profile';
import VideoAlbum from '../../../pages/VideoAlbum/VideoAlbum';
import playVideo from '../../../pages/playVideo/playVideo';

import AuthNavbar from '../../Auth/AuthNavbar/AuthNavbar';
import UnAuthNavbar from '../../Auth/UnAuthNavbar/UnAuthNavbar';
import Quizes from '../../Auth/Quizes/Quizes';
import Games from '../../Auth/Games/Games';
import Awards from '../../Auth/Awards/Awards';
import Bronze from '../../Auth/Bronze/Bronze';
import Messages from '../../Auth/Messages/Messages';
import EditProfile from '../../Auth/EditProfile/EditProfile';

import profileButton from '../../Auth/profileButton/profileButton';
import Notification from '../../Auth/Notification/Notification';

import Silver from '../../Auth/Silver/Silver';
import Gold from '../../Auth/Gold/Gold';
import Platinum from '../../Auth/Platinum/Platinum';
import Membership from '../../Auth/Membership/Membership';
import Footer from '../../Auth/Footer/Footer';
import Download from '../Download/Download';
import SystemRequirements from "../../Auth/SystemRequirements/SystemRequirements";
import Sidenav from "../../Auth/Sidenav/Sidenav";


import SidenavTesting from '../../Auth/SidenavTesting/SidenavTesting';
import SlickSlider from '../../Auth/SlickSlider/SlickSlider';
import TheBand from '../../Auth/TheBand/TheBand';
import BandImages from '../../Auth/BandImages/BandImages';

import Gallery from '../../Auth/Gallery/Gallery';
import VideoStepper from '../../Auth/VideoStepper/VideoStepper';
import Music from '../../Auth/Music/Music';
import MusicPlayer from '../../Auth/MusicPlayer/MusicPlayer';
import Testing from '../../Auth/Testing/Testing';

import Forum from	'../../Auth/Forum/Forum';
import ForumPost from '../../Auth/ForumPost/ForumPost';
import NewDiscussion from '../../Auth/NewDiscussion/NewDiscussion';

import UploadFanArt from '../../Auth/UploadFanArt/UploadFanArt';
import FanArt from '../../Auth/FanArt/FantArt';

import MyGallery from '../../Auth/MyGallery/MyGallery';

import Checking from '../../Auth/Checking/Checking';

import Audio from '../../Auth/Audio/Audio';
import AudioGuitar from '../../Auth/AudioGuitar/AudioGuitar';
import AudioSynth from '../../Auth/AudioSynth/AudioSynth';






const Main = () =>(
	<Switch>
	<Route exact path = "/" component={LandingPage} />
	<Route path = "/LandingPage" component={LandingPage} />
	<Route path = "/LandingPage" component={LandingPage} />
	<Route path = "/LandingPage" component={LandingPage} />
	<Route path	= "/Login" component={Login} />
	<Route path	= "/Register" component={Register} />
	<Route path = "/Profile" component={Profile} />
	<Route path = "/VideoAlbum" component={VideoAlbum} />
	<Route path = "/playVideo" component={playVideo} />
	<Route path = "/AuthNavbar" component={AuthNavbar}/>
	<Route path = "/UnAuthNavbar" component={UnAuthNavbar}/>

	<Route path = "/Quizes"  component= {Quizes}/>
	<Route path = "/Games" component = {Games}/>
	<Route path = "/Awards" component = {Awards}/>
	<Route path = "/Bronze" component = {Bronze}/>
	<Route path = "/Messages" component = {Messages}/>
	<Route path = "/EditProfile" component={EditProfile}/>

	<Route path = "/profileButton" component= {profileButton}/>
	<Route path = "/Notification" component = {Notification}/>

	<Route path = "/Silver" component = {Silver}/>
	<Route path = "/Gold" component = {Gold}/>
	<Route path = "/Platinum" component = {Platinum}/>
	<Route path = "/Membership" component = {Membership}/>
	<Route path = "/Footer" component = {Footer}/>
	<Route path = "/Download" component ={Download}/>
	<Route path = "/SystemRequirements" component = {SystemRequirements}/>

	<Route path = "/Sidenav" component = {Sidenav}/>
	<Route path = "/SidenavTesting" component = {SidenavTesting}/>
	<Route path = "/SlickSlider" component = {SlickSlider}/>
	<Route path = "/TheBand" component = {TheBand}/>
	<Route path = "/BandImages" component ={BandImages}/>
	<Route path = "/Gallery" component = {Gallery}/>
	
	<Route path = "/VideoStepper" component ={VideoStepper}/>
	<Route path = "/Music" component = {Music}/>
	<Route path = "/MusicPlayer" component = {MusicPlayer}/>
	<Route path = "/Testing" component = {Testing}/>

	<Route path = "/Forum" component = {Forum}/>
	<Route path = "/ForumPost" component = {ForumPost}/>
	<Route path = "/NewDiscussion" component = {NewDiscussion}/>
	
	<Route path = "/UploadFanArt" component = {UploadFanArt}/>

	<Route path = "/MyGallery" component = {MyGallery}/>
	<Route path = "/Checking" component = {Checking}/>
	<Route path = "/Audio" component = {Audio}/>
	<Route path = "/AudioGuitar" component = {AudioGuitar}/>
	<Route path = "/AudioSynth" component = {AudioSynth}/>


	
	<Route Path = "/FanArt" component = {FanArt}/>
	

	

	

	


	</Switch>
)

export default Main;








