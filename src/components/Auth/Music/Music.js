import React from 'react';
import $ from 'jquery';
import jquery from 'jquery';
import '../../../layout/style/Music.css';
import { Link } from 'react-router-dom';
import AuthNavbar from '../../Auth/AuthNavbar/AuthNavbar';
import MusicPlayer from '../../Auth/MusicPlayer/MusicPlayer';
import Footer from '../../Auth/Footer/Footer';

var audio = document.getElementById('audio');
var playpause = document.getElementById("play");


function togglePlayPause() {
   if (audio.paused || audio.ended) {
      playpause.title = "Pause";
      audio.play();
   } else {



      playpause.title = "Play";
      audio.pause();
   }

}

// $('#something').click(function() {
//     location.reload();
// });

// window.location.reload();






// Music Description
$(document).ready(function() {
	$("#descriptionInactive1").click(function() {
	  $("#descriptionActive1").toggle();
	});
  });
  
// Music Description
$(document).ready(function() {
	$("#descriptionInactive2").click(function() {
	  $("#descriptionActive2").toggle();
	});
  });
  



  $(document).ready(function() {
	$("#descriptionInactive3").click(function() {
	  $("#descriptionActive3").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive4").click(function() {
	  $("#descriptionActive4").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive5").click(function() {
	  $("#descriptionActive5").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive6").click(function() {
	  $("#descriptionActive6").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive7").click(function() {
	  $("#descriptionActive7").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive8").click(function() {
	  $("#descriptionActive8").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive9").click(function() {
	  $("#descriptionActive9").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive10").click(function() {
	  $("#descriptionActive10").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive11").click(function() {
	  $("#descriptionActive11").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive12").click(function() {
	  $("#descriptionActive12").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive13").click(function() {
	  $("#descriptionActive13").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive14").click(function() {
	  $("#descriptionActive14").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive15").click(function() {
	  $("#descriptionActive15").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive16").click(function() {
	  $("#descriptionActive16").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive17").click(function() {
	  $("#descriptionActive17").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive18").click(function() {
	  $("#descriptionActive18").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive19").click(function() {
	  $("#descriptionActive19").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive20").click(function() {
	  $("#descriptionActive20").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive21").click(function() {
	  $("#descriptionActive21").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive22").click(function() {
	  $("#descriptionActive22").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive23").click(function() {
	  $("#descriptionActive23").toggle();
	});
  });
  $(document).ready(function() {
	$("#descriptionInactive24").click(function() {
	  $("#descriptionActive24").toggle();
	});
  });


  



// Music Player JS
function Music() {
    return (
        <>
        <AuthNavbar/>


<div className="musicTopContainer">
	
	
	    <div className="">
		<div className="wcContainer ">
			<div>
		<img src="/assets/img/Album-Covers-WC.jpg" alt=""/>
		</div>
	
		<div className="screen audioInfo">
				{/* Music Control */}

				{/* <table class="audioPlayer">
					<td><input type="checkbox" id="backward"/><label class="backward" for="backward"></label></td>
					<td><input type="checkbox" id="play" title="Play" onclick="togglePlayPause()"/><label class="play" for="play"></label></td>
					<td><input type="checkbox" id="forward"/><label class="forward" for="forward"></label></td>
				</table> */}



				{/* <div className="thisInfo">
					<h4>Stressed Out</h4>
					<h3>DEAD APRIL ARMY</h3> 
					<h3>WORLDS COLLIDE</h3>
				</div> */}



        <MusicPlayer/>


		</div>
	
	   </div>
       </div>



		{/* song List */}
    <div className="">
    <article className="  screen scroll" id="audioListScrollerStyle">
	<table className="audioList" >


					<tr className="song">
						<td className="title"> <h6>1. Heavydirtysoul</h6></td>
						<td><img src="https://1694402697.rsc.cdn77.org/img/icon_WC.png" alt=""></img></td>
						<td className="length"><h5>3:22</h5></td>
						<td><input type="checkbox" className="checkboxHeart" id="heart1"/><label className="zmr" for="heart1"></label></td>
					</tr>
					<tr className="song">
						<td className="title"><h6>2. Ride</h6></td>
						<td><img src="https://1694402697.rsc.cdn77.org/img/icon_WC.png" alt=""></img></td>
						<td className="length"><h5>3:34</h5></td>
						<td><input type="checkbox" className="checkboxHeart" id="heart2"/><label className="zmr" for="heart2"></label></td>
					</tr>
					<tr className="song">
						<td className="title"><h6>3. Tear in My Heart</h6></td>
						<td><img src="https://1694402697.rsc.cdn77.org/img/icon_WC.png" alt=""></img></td>
						<td className="length"><h5>3:08</h5></td>
						<td><input type="checkbox" className="checkboxHeart" id="heart3"/><label className="zmr" for="heart3"></label></td>
					</tr>
					<tr className="song">
						<td className="title"><h6>4. Lane Boy</h6></td>
						<td><img src="https://1694402697.rsc.cdn77.org/img/icon_WC.png" alt=""></img></td>
						<td className="length"><h5>4:13</h5></td>
						<td><input type="checkbox" className="checkboxHeart" id="heart4"/><label className="zmr" for="heart4"></label></td>
					</tr>
					<tr className="song">
						<td className="title"><h6>5. The Judge</h6></td>
						<td><img src="https://1694402697.rsc.cdn77.org/img/icon_WC.png" alt=""></img></td>
						<td className="length"><h5>4:57</h5></td>
						<td><input type="checkbox" className="checkboxHeart" id="heart5"/><label className="zmr" for="heart5"></label></td>
					</tr>
					<tr className="song">
						<td className="title"><h6>6. Doubt</h6></td>
						<td><img src="https://1694402697.rsc.cdn77.org/img/icon_WC.png" alt=""></img></td>
						<td className="length"><h5>3:11</h5></td>
						<td><input type="checkbox" className="checkboxHeart" id="heart6"/><label className="zmr" for="heart6"></label></td>
					</tr>






					<tr className="song">
						<td className="title"><h6>7. Heavydirtysoul</h6></td>
						<td><img src="https://1694402697.rsc.cdn77.org/img/icon_WC.png" alt=""></img></td>
						<td className="length"><h5>3:22</h5></td>
						<td><input type="checkbox" className="checkboxHeart" id="heart7"/><label className="zmr" for="heart7"></label></td>
					</tr>
					<tr className="song">
						<td className="title"><h6>8. Ride</h6></td>
						<td><img src="https://1694402697.rsc.cdn77.org/img/icon_WC.png" alt=""></img></td>
						<td className="length"><h5>3:34</h5></td>
						<td><input type="checkbox" className="checkboxHeart" id="heart8"/><label className="zmr" for="heart8"></label></td>
					</tr>
					<tr className="song">
						<td className="title"><h6>9. Tear in My Heart</h6></td>
						<td><img src="https://1694402697.rsc.cdn77.org/img/icon_WC.png" alt=""></img></td>
						<td className="length"><h5>3:08</h5></td>
						<td><input type="checkbox" className="checkboxHeart" id="heart9"/><label className="zmr" for="heart9"></label></td>
					</tr>
					<tr className="song">
						<td className="title"><h6>10. Lane Boy</h6></td>
						<td><img src="https://1694402697.rsc.cdn77.org/img/icon_WC.png" alt=""></img></td>
						<td className="length"><h5>4:13</h5></td>
						<td><input type="checkbox" className="checkboxHeart" id="heart10"/><label className="zmr" for="heart10"></label></td>
					</tr>
					<tr className="song">
						<td className="title"><h6>11. The Judge</h6></td>
						<td><img src="https://1694402697.rsc.cdn77.org/img/icon_WC.png" alt=""></img></td>
						<td className="length"><h5>4:57</h5></td>
						<td><input type="checkbox" className="checkboxHeart" id="heart11"/><label className="zmr" for="heart11"></label></td>
					</tr>
					<tr className="song">
						<td className="title"><h6>12. Doubt</h6></td>
						<td><img src="https://1694402697.rsc.cdn77.org/img/icon_WC.png" alt=""></img></td>
						<td className="length"><h5>3:11</h5></td>
						<td><input type="checkbox" className="checkboxHeart" id="heart12"/><label className="zmr" for="heart12"></label></td>
					</tr>



					<tr className="song">
						<td className="title"><h6>13. Heavydirtysoul</h6></td>
						<td><img src="https://1694402697.rsc.cdn77.org/img/icon_WC.png" alt=""></img></td>
						<td className="length"><h5>3:22</h5></td>
						<td><input type="checkbox" className="checkboxHeart" id="heart13"/><label className="zmr" for="heart13"></label></td>
					</tr>
					<tr className="song">
						<td className="title"><h6>14. Ride</h6></td>
						<td><img src="https://1694402697.rsc.cdn77.org/img/icon_WC.png" alt=""></img></td>
						<td className="length"><h5>3:34</h5></td>
						<td><input type="checkbox" className="checkboxHeart" id="heart14"/><label className="zmr" for="heart14"></label></td>
					</tr>
					<tr className="song">
						<td className="title"><h6>15. Tear in My Heart</h6></td>
						<td><img src="https://1694402697.rsc.cdn77.org/img/icon_WC.png" alt=""></img></td>
						<td className="length"><h5>3:08</h5></td>
						<td><input type="checkbox" className="checkboxHeart" id="heart15"/><label className="zmr" for="heart15"></label></td>
					</tr>
					<tr className="song">
						<td className="title"><h6>16. Lane Boy</h6></td>
						<td><img src="https://1694402697.rsc.cdn77.org/img/icon_WC.png" alt=""></img></td>
						<td className="length"><h5>4:13</h5></td>
						<td><input type="checkbox" className="checkboxHeart" id="heart16"/><label className="zmr" for="heart16"></label></td>
					</tr>
					<tr className="song">
						<td className="title"><h6>17. The Judge</h6></td>
						<td><img src="https://1694402697.rsc.cdn77.org/img/icon_WC.png" alt=""></img></td>
						<td className="length"><h5>4:57</h5></td>
						<td><input type="checkbox" className="checkboxHeart" id="heart17"/><label className="zmr" for="heart17"></label></td>
					</tr>
				</table>
				

				{/* <audio preload="auto" id="audio" controls>
  <source src="http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3"/>
  <source src="http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.ogg"/>
	</audio> */}
	</article>
	</div>
</div>










{/* Seperated Line */}
{/* <div className="musicMiddleSeperator">
<hr className="mx-auto"></hr>
</div>
 */}



{/* Songs Info */}
<div className="musicDescriptionDivider">

	<div className="">
	<div className=" " style={{width:'100%'}}>
	<div className="worldsCollide">
	<div>
		<img src="/assets/img/wc_rounded_big.png" alt="" />
   </div>
		<div>
			<h3>Worlds Collide</h3>
		</div>
		<div>
			<p>Read on about the inspiration behind our songs.</p>
		</div>
	</div>


















{/* Songs Description */}
	<div className="worldsCollideDescription">
		<button className="accordian" id="descriptionInactive1">Crying Over You</button>

		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive1" >
			<p>This song was simply written about love. 
  It is omething we all (hopefully) at some point in our lives will experience. 
  And while it is by far the most empowering and wonderful feeling in the world, 
  it can be equally devestating and destructive if things go wrong. 
  This song is a humble reminder of that very phenomenon. 
  Not at all saying that love is something to distance yourself from. 
  Rather just a declaration of what's at stake. 
  And once you decide to give it a shot, to give yourself an honest chance at it, 
  there shouldn't be any doubtful thoughts present at all.</p>
		</div>
		</div>
		<hr className="worldsCollideSeperator mx-auto"></hr>

		<button className="accordian" id="descriptionInactive2">Warrior</button>
		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive2">
			<p>The inspiration behind Warrior is about mindset. 
  And to never give up until you reach your goal(s). 
  The human mind is incredibly powerful and if used correctly it will be your 
  best tool at hand in order to achieve happiness, as well as being successful in whatever you set out to do. 
  As Eminem says at the end of his mega-hit song Lose Yourself – "You can be whatever you set your mind to, man." 
  However, it can still be scary as hell to set aim for your goals in life and then pursue them. 
  There are many sacrifices to be made, and there are often big risks in the financial domain. But you only live once, right?</p>
		</div>
		</div>
		<hr className="worldsCollideSeperator mx-auto"></hr>

		<button className="accordian" id="descriptionInactive3">Breaking Point</button>
		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive3">
			<p>Now, if you have just read the inspiration behind Warrior, 
  the inspiration behind Breaking Point might seem a bit contradictive. 
  Well, it is not. Let me explain. 
  Life is a struggle regardless of whether you try and pursue your biggest dreams and goals or not. 
  No matter what path you choose you will at some point in your life feel broken. And that is just human. 
  I believe that the whole point of breaking down or to come close to your breaking point 
  is that you are given the opportunity to gain perspective on whatever situation led you there. 
  Of course, the feelings of chaos and despair that would naturally make themselves present, are not fun at all. 
  By changing your mindset accordingly, over time, you will be able to look at a nervous breakdown as something positive.</p>
		</div>
		</div>
		<hr className="worldsCollideSeperator mx-auto"></hr>

		<button className="accordian" id="descriptionInactive4">Our Worlds Collide</button>
		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive4">
		<p>"Our Worlds Collide" - you could actually find the explanation within the song title. 
  It's a reflection of what the world looks like today. 
  Our planet consists of MANY different people, cultures, and countries. 
  And judging by what's happening around the world at this time and age, 
  one could say that the people of planet Earth don't agree on much. 
  In no way are we looking at this in a political point of view, 
  it is simply a reflection on how it's affecting us all. 
  Why the human race as evolved to be the most dominant and intelligent 
  on this planet as much to do with our abillity to cooperate with other humans. 
  Ironically, that seems to be the one thing that the world are struggling with right now..</p>
		</div>
		</div>
		<hr className="worldsCollideSeperator mx-auto"></hr>

		<button className="accordian" id="descriptionInactive5">Can You See The Red</button>
		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive5">
		<p>This song is about the irrational internet hate that is absolutely crazy, and so incredibly unnecessary. 
  As a band we've taken our fair share of the online hate. I mean the amount of hate that has been sent our way is ridiculous. 
  One specific comment I remember is and indiviual that was very serious about having us hanged. 
  He was so angry at us and with the music we play, that he urged us to go hang ourselves. 
  He wanted us dead simply because the music we've chosen to write, play, and perform. 
  However, with being said, we've never judged any one individual for it. 
  We never engage or question hate comments in general because there is really no point in doing so. 
  We just ignore it. And again, this song is not about any specific person per say, 
  but about the online hate defined as a phenomenon itself. 
  This way we're turning hate into to something positive. Something creative and something to enjoy; a song.</p>
		</div>
		</div>
		<hr className="worldsCollideSeperator mx-auto"></hr>

		<button className="accordian" id="descriptionInactive6">For Ever Step</button>
		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive6">
		<p>
  I started writing this song back in 2008 actually. Back then it was not at all a complete song but rather a short demo with 
  some of the notes you can hear in the finished version today. Not much. I moved on to other songs and didn't think much of it.
  But then in 2015/2016, as I'm writing new songs for the Worlds Collide album, I had come across that old demo from one 
  of my backup drives – and I got really inspired by it! It's kind of funny that way, how one idea for a song can feel dull 
  and un-inspiring, only to become a finished and releaed song several years later. That's why I always record my ideas –  no matter 
  how much I'm critzising it at the time of creation. 
  The song eventually made it to the Worlds Collide album. And of course, having Tommy Körberg feature on the song was amazing.
  We do understand that outside of Sweden/Scandinavia people probably don't know of him that well.
  However, in Sweden he is a legend, an icon. And when he replied to us after listening to the song that he wanted to sing it 
  – we just couldn't belive it! He is now 72 years old and his voice on this song sounds absolutely incredible!</p>
		</div>
		</div>
		

	</div>
	</div>
	</div>





{/* 2 Songs List */}
<div className="">
	<div className=" " style={{width:'100%'}}>
	<div className="worldsCollide">
	<div>
		<img src="/assets/img/ltwk_rounded_big.png" alt="" />
   </div>
		<div>
			<h3>Worlds Collide</h3>
		</div>
		<div>
			<p>Read on about the inspiration behind our songs.</p>
		</div>
	</div>

{/* Songs Description */}
	<div className="worldsCollideDescription">
		<button className="accordian" id="descriptionInactive7">Crying Over You</button>

		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive7">
			<p>This song was simply written about love. 
  It is omething we all (hopefully) at some point in our lives will experience. 
  And while it is by far the most empowering and wonderful feeling in the world, 
  it can be equally devestating and destructive if things go wrong. 
  This song is a humble reminder of that very phenomenon. 
  Not at all saying that love is something to distance yourself from. 
  Rather just a declaration of what's at stake. 
  And once you decide to give it a shot, to give yourself an honest chance at it, 
  there shouldn't be any doubtful thoughts present at all.</p>
		</div>
		</div>
		<hr className="worldsCollideSeperator mx-auto"></hr>

		<button className="accordian" id="descriptionInactive8">Warrior</button>
		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive8">
			<p>The inspiration behind Warrior is about mindset. 
  And to never give up until you reach your goal(s). 
  The human mind is incredibly powerful and if used correctly it will be your 
  best tool at hand in order to achieve happiness, as well as being successful in whatever you set out to do. 
  As Eminem says at the end of his mega-hit song Lose Yourself – "You can be whatever you set your mind to, man." 
  However, it can still be scary as hell to set aim for your goals in life and then pursue them. 
  There are many sacrifices to be made, and there are often big risks in the financial domain. But you only live once, right?</p>
		</div>
		</div>
		<hr className="worldsCollideSeperator mx-auto"></hr>

		<button className="accordian" id="descriptionInactive9">Breaking Point</button>
		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive9">
			<p>Now, if you have just read the inspiration behind Warrior, 
  the inspiration behind Breaking Point might seem a bit contradictive. 
  Well, it is not. Let me explain. 
  Life is a struggle regardless of whether you try and pursue your biggest dreams and goals or not. 
  No matter what path you choose you will at some point in your life feel broken. And that is just human. 
  I believe that the whole point of breaking down or to come close to your breaking point 
  is that you are given the opportunity to gain perspective on whatever situation led you there. 
  Of course, the feelings of chaos and despair that would naturally make themselves present, are not fun at all. 
  By changing your mindset accordingly, over time, you will be able to look at a nervous breakdown as something positive.</p>
		</div>
		</div>
		<hr className="worldsCollideSeperator mx-auto"></hr>

		<button className="accordian" id="descriptionInactive10">Our Worlds Collide</button>
		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive10">
		<p>"Our Worlds Collide" - you could actually find the explanation within the song title. 
  It's a reflection of what the world looks like today. 
  Our planet consists of MANY different people, cultures, and countries. 
  And judging by what's happening around the world at this time and age, 
  one could say that the people of planet Earth don't agree on much. 
  In no way are we looking at this in a political point of view, 
  it is simply a reflection on how it's affecting us all. 
  Why the human race as evolved to be the most dominant and intelligent 
  on this planet as much to do with our abillity to cooperate with other humans. 
  Ironically, that seems to be the one thing that the world are struggling with right now..</p>
		</div>
		</div>
		<hr className="worldsCollideSeperator mx-auto"></hr>

		<button className="accordian" id="descriptionInactive11">Can You See The Red</button>
		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive11">
		<p>This song is about the irrational internet hate that is absolutely crazy, and so incredibly unnecessary. 
  As a band we've taken our fair share of the online hate. I mean the amount of hate that has been sent our way is ridiculous. 
  One specific comment I remember is and indiviual that was very serious about having us hanged. 
  He was so angry at us and with the music we play, that he urged us to go hang ourselves. 
  He wanted us dead simply because the music we've chosen to write, play, and perform. 
  However, with being said, we've never judged any one individual for it. 
  We never engage or question hate comments in general because there is really no point in doing so. 
  We just ignore it. And again, this song is not about any specific person per say, 
  but about the online hate defined as a phenomenon itself. 
  This way we're turning hate into to something positive. Something creative and something to enjoy; a song.</p>
		</div>
		</div>
		<hr className="worldsCollideSeperator mx-auto"></hr>

		<button className="accordian" id="descriptionInactive12">For Ever Step</button>
		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive12">
		<p>
  I started writing this song back in 2008 actually. Back then it was not at all a complete song but rather a short demo with 
  some of the notes you can hear in the finished version today. Not much. I moved on to other songs and didn't think much of it.
  But then in 2015/2016, as I'm writing new songs for the Worlds Collide album, I had come across that old demo from one 
  of my backup drives – and I got really inspired by it! It's kind of funny that way, how one idea for a song can feel dull 
  and un-inspiring, only to become a finished and releaed song several years later. That's why I always record my ideas –  no matter 
  how much I'm critzising it at the time of creation. 
  The song eventually made it to the Worlds Collide album. And of course, having Tommy Körberg feature on the song was amazing.
  We do understand that outside of Sweden/Scandinavia people probably don't know of him that well.
  However, in Sweden he is a legend, an icon. And when he replied to us after listening to the song that he wanted to sing it 
  – we just couldn't belive it! He is now 72 years old and his voice on this song sounds absolutely incredible!</p>
		</div>
		</div>
		

	</div>
	</div>
	</div>




	{/* 3rd Songs List */}
	<div className="">
	<div className=" " style={{width:'100%'}}>
	<div className="worldsCollide">
	<div>
		<img src="/assets/img/incomparable_rounded_big.png" alt="" />
   </div>
		<div>
			<h3>Worlds Collide</h3>
		</div>
		<div>
			<p>Read on about the inspiration behind our songs.</p>
		</div>
	</div>

{/* Songs Description */}
	<div className="worldsCollideDescription">
		<button className="accordian" id="descriptionInactive13">Crying Over You</button>

		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive13">
			<p>This song was simply written about love. 
  It is omething we all (hopefully) at some point in our lives will experience. 
  And while it is by far the most empowering and wonderful feeling in the world, 
  it can be equally devestating and destructive if things go wrong. 
  This song is a humble reminder of that very phenomenon. 
  Not at all saying that love is something to distance yourself from. 
  Rather just a declaration of what's at stake. 
  And once you decide to give it a shot, to give yourself an honest chance at it, 
  there shouldn't be any doubtful thoughts present at all.</p>
		</div>
		</div>
		<hr className="worldsCollideSeperator mx-auto"></hr>

		<button className="accordian" id="descriptionInactive14">Warrior</button>
		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive14">
			<p>The inspiration behind Warrior is about mindset. 
  And to never give up until you reach your goal(s). 
  The human mind is incredibly powerful and if used correctly it will be your 
  best tool at hand in order to achieve happiness, as well as being successful in whatever you set out to do. 
  As Eminem says at the end of his mega-hit song Lose Yourself – "You can be whatever you set your mind to, man." 
  However, it can still be scary as hell to set aim for your goals in life and then pursue them. 
  There are many sacrifices to be made, and there are often big risks in the financial domain. But you only live once, right?</p>
		</div>
		</div>
		<hr className="worldsCollideSeperator mx-auto"></hr>

		<button className="accordian" id="descriptionInactive15">Breaking Point</button>
		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive15">
			<p>Now, if you have just read the inspiration behind Warrior, 
  the inspiration behind Breaking Point might seem a bit contradictive. 
  Well, it is not. Let me explain. 
  Life is a struggle regardless of whether you try and pursue your biggest dreams and goals or not. 
  No matter what path you choose you will at some point in your life feel broken. And that is just human. 
  I believe that the whole point of breaking down or to come close to your breaking point 
  is that you are given the opportunity to gain perspective on whatever situation led you there. 
  Of course, the feelings of chaos and despair that would naturally make themselves present, are not fun at all. 
  By changing your mindset accordingly, over time, you will be able to look at a nervous breakdown as something positive.</p>
		</div>
		</div>
		<hr className="worldsCollideSeperator mx-auto"></hr>

		<button className="accordian" id="descriptionInactive16">Our Worlds Collide</button>
		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive16">
		<p>"Our Worlds Collide" - you could actually find the explanation within the song title. 
  It's a reflection of what the world looks like today. 
  Our planet consists of MANY different people, cultures, and countries. 
  And judging by what's happening around the world at this time and age, 
  one could say that the people of planet Earth don't agree on much. 
  In no way are we looking at this in a political point of view, 
  it is simply a reflection on how it's affecting us all. 
  Why the human race as evolved to be the most dominant and intelligent 
  on this planet as much to do with our abillity to cooperate with other humans. 
  Ironically, that seems to be the one thing that the world are struggling with right now..</p>
		</div>
		</div>
		<hr className="worldsCollideSeperator mx-auto"></hr>

		<button className="accordian" id="descriptionInactive17">Can You See The Red</button>
		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive17">
		<p>This song is about the irrational internet hate that is absolutely crazy, and so incredibly unnecessary. 
  As a band we've taken our fair share of the online hate. I mean the amount of hate that has been sent our way is ridiculous. 
  One specific comment I remember is and indiviual that was very serious about having us hanged. 
  He was so angry at us and with the music we play, that he urged us to go hang ourselves. 
  He wanted us dead simply because the music we've chosen to write, play, and perform. 
  However, with being said, we've never judged any one individual for it. 
  We never engage or question hate comments in general because there is really no point in doing so. 
  We just ignore it. And again, this song is not about any specific person per say, 
  but about the online hate defined as a phenomenon itself. 
  This way we're turning hate into to something positive. Something creative and something to enjoy; a song.</p>
		</div>
		</div>
		<hr className="worldsCollideSeperator mx-auto"></hr>

		<button className="accordian" id="descriptionInactive18">For Ever Step</button>
		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive18">
		<p>
  I started writing this song back in 2008 actually. Back then it was not at all a complete song but rather a short demo with 
  some of the notes you can hear in the finished version today. Not much. I moved on to other songs and didn't think much of it.
  But then in 2015/2016, as I'm writing new songs for the Worlds Collide album, I had come across that old demo from one 
  of my backup drives – and I got really inspired by it! It's kind of funny that way, how one idea for a song can feel dull 
  and un-inspiring, only to become a finished and releaed song several years later. That's why I always record my ideas –  no matter 
  how much I'm critzising it at the time of creation. 
  The song eventually made it to the Worlds Collide album. And of course, having Tommy Körberg feature on the song was amazing.
  We do understand that outside of Sweden/Scandinavia people probably don't know of him that well.
  However, in Sweden he is a legend, an icon. And when he replied to us after listening to the song that he wanted to sing it 
  – we just couldn't belive it! He is now 72 years old and his voice on this song sounds absolutely incredible!</p>
		</div>
		</div>
		

	</div>
	</div>
	</div>




	{/* 4th Songs List */}
	<div className="">
	<div className=" " style={{width:'100%'}}>
	<div className="worldsCollide">
	<div>
		<img src="/assets/img/debut_rounded_big.png" alt="" />
   </div>
		<div>
			<h3>Worlds Collide</h3>
		</div>
		<div>
			<p>Read on about the inspiration behind our songs.</p>
		</div>
	</div>

{/* Songs Description */}
	<div className="worldsCollideDescription">
		<button className="accordian" id="descriptionInactive19">Crying Over You</button>

		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive19">
			<p>This song was simply written about love. 
  It is omething we all (hopefully) at some point in our lives will experience. 
  And while it is by far the most empowering and wonderful feeling in the world, 
  it can be equally devestating and destructive if things go wrong. 
  This song is a humble reminder of that very phenomenon. 
  Not at all saying that love is something to distance yourself from. 
  Rather just a declaration of what's at stake. 
  And once you decide to give it a shot, to give yourself an honest chance at it, 
  there shouldn't be any doubtful thoughts present at all.</p>
		</div>
		</div>
		<hr className="worldsCollideSeperator mx-auto"></hr>

		<button className="accordian" id="descriptionInactive20">Warrior</button>
		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive20">
			<p>The inspiration behind Warrior is about mindset. 
  And to never give up until you reach your goal(s). 
  The human mind is incredibly powerful and if used correctly it will be your 
  best tool at hand in order to achieve happiness, as well as being successful in whatever you set out to do. 
  As Eminem says at the end of his mega-hit song Lose Yourself – "You can be whatever you set your mind to, man." 
  However, it can still be scary as hell to set aim for your goals in life and then pursue them. 
  There are many sacrifices to be made, and there are often big risks in the financial domain. But you only live once, right?</p>
		</div>
		</div>
		<hr className="worldsCollideSeperator mx-auto"></hr>

		<button className="accordian" id="descriptionInactive21">Breaking Point</button>
		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive21">
			<p>Now, if you have just read the inspiration behind Warrior, 
  the inspiration behind Breaking Point might seem a bit contradictive. 
  Well, it is not. Let me explain. 
  Life is a struggle regardless of whether you try and pursue your biggest dreams and goals or not. 
  No matter what path you choose you will at some point in your life feel broken. And that is just human. 
  I believe that the whole point of breaking down or to come close to your breaking point 
  is that you are given the opportunity to gain perspective on whatever situation led you there. 
  Of course, the feelings of chaos and despair that would naturally make themselves present, are not fun at all. 
  By changing your mindset accordingly, over time, you will be able to look at a nervous breakdown as something positive.</p>
		</div>
		</div>
		<hr className="worldsCollideSeperator mx-auto"></hr>

		<button className="accordian" id="descriptionInactive22">Our Worlds Collide</button>
		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive22">
		<p>"Our Worlds Collide" - you could actually find the explanation within the song title. 
  It's a reflection of what the world looks like today. 
  Our planet consists of MANY different people, cultures, and countries. 
  And judging by what's happening around the world at this time and age, 
  one could say that the people of planet Earth don't agree on much. 
  In no way are we looking at this in a political point of view, 
  it is simply a reflection on how it's affecting us all. 
  Why the human race as evolved to be the most dominant and intelligent 
  on this planet as much to do with our abillity to cooperate with other humans. 
  Ironically, that seems to be the one thing that the world are struggling with right now..</p>
		</div>
		</div>
		<hr className="worldsCollideSeperator mx-auto"></hr>

		<button className="accordian" id="descriptionInactive23">Can You See The Red</button>
		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive23">
		<p>This song is about the irrational internet hate that is absolutely crazy, and so incredibly unnecessary. 
  As a band we've taken our fair share of the online hate. I mean the amount of hate that has been sent our way is ridiculous. 
  One specific comment I remember is and indiviual that was very serious about having us hanged. 
  He was so angry at us and with the music we play, that he urged us to go hang ourselves. 
  He wanted us dead simply because the music we've chosen to write, play, and perform. 
  However, with being said, we've never judged any one individual for it. 
  We never engage or question hate comments in general because there is really no point in doing so. 
  We just ignore it. And again, this song is not about any specific person per say, 
  but about the online hate defined as a phenomenon itself. 
  This way we're turning hate into to something positive. Something creative and something to enjoy; a song.</p>
		</div>
		</div>
		<hr className="worldsCollideSeperator mx-auto"></hr>

		<button className="accordian" id="descriptionInactive24">For Ever Step</button>
		<div className="" id="">
		<div style={{display:'none'}} className="collidePanel scrollbar style-2" id="descriptionActive24">
		<p>
  I started writing this song back in 2008 actually. Back then it was not at all a complete song but rather a short demo with 
  some of the notes you can hear in the finished version today. Not much. I moved on to other songs and didn't think much of it.
  But then in 2015/2016, as I'm writing new songs for the Worlds Collide album, I had come across that old demo from one 
  of my backup drives – and I got really inspired by it! It's kind of funny that way, how one idea for a song can feel dull 
  and un-inspiring, only to become a finished and releaed song several years later. That's why I always record my ideas –  no matter 
  how much I'm critzising it at the time of creation. 
  The song eventually made it to the Worlds Collide album. And of course, having Tommy Körberg feature on the song was amazing.
  We do understand that outside of Sweden/Scandinavia people probably don't know of him that well.
  However, in Sweden he is a legend, an icon. And when he replied to us after listening to the song that he wanted to sing it 
  – we just couldn't belive it! He is now 72 years old and his voice on this song sounds absolutely incredible!</p>
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
        export default Music;