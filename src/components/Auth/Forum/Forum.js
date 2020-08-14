import React, {Component} from 'react';
import '../../../layout/style/Forum.css';
import { Link } from 'react-router-dom';
import AuthNavbar from '../../Auth/AuthNavbar/AuthNavbar';
import Footer from '../../Auth/Footer/Footer';
import NewDiscussion from '../NewDiscussion/NewDiscussion';

class Forum extends Component{
  render(){
    return(
   <>
<AuthNavbar/>
<div className="container forumTopPanelContainer">
  
  <div className="row">
      <div className="col-lg-8 col-md-8 col-sm-12 col-12">
      <div className="forumPanel">
        <ul className="forumDiscussions">
          <li>
            <div  className="discussion_list" >
              <div className="forumPanelLeft">
            <div className="chatter_avatar">
              <img src="/assets/img/CLblGFP0d8_120x120.JPG" alt= ""></img>
            </div>
            <div className="chatter_middle">
              <Link to="/ForumPost"><h3 className="chatter_middle_title">Why did you start playing your instrument?  
              </h3></Link>
              <span className="chatter_middle_details">Posted by <span className="postedBy">Lawrence Chaventre</span>
              </span>
              <p>Hi everyone, this is mainly for the band but I know I am joined by many talented individuals who surpass me in terms of musical ability so please do comment below.
I began playing drums first because ...</p>
            </div>
            </div>
              
             {/* Post and comments on right side */}
            <div className="forumPostinfo">
              <div className="forumComments">
              <div className="commentbg">
                  560
              <div className="forumMark"></div>
            </div>
           </div>

              <div className="forumViews">
                <i className="far fa-comment-dots" style={{fontWeight: '900'}}> 1,568</i>
              </div>
              <div className="forumTime">
                <i className="fa fa-clock-o"> 24 min</i>
              </div>
             </div>
             <div className="chatter_clear"></div>
            </div>
          </li>


          <li>
            <div  className="discussion_list" >
              <div className="forumPanelLeft">
            <div className="chatter_avatar">
              <img src="/assets/img/kgGa1QL86O_120x120.jpg" alt= ""></img>
            </div>
            <div className="chatter_middle">
              <Link to="/ForumPost"><h3 className="chatter_middle_title">Why did you start playing your instrument? 
              </h3></Link>

              <span className="chatter_middle_details">Posted by <span className="postedBy">Lawrence Chaventre</span>
           
              </span>
              <p>Hi everyone, this is mainly for the band but I know I am joined by many talented individuals who surpass me in terms of musical ability so please do comment below.
I began playing drums first because ...</p>
            </div>
            </div>
              
             {/* Post and comments on right side */}
            <div className="forumPostinfo">
              <div className="forumComments">
              <div className="commentbg">
                  560
              <div className="forumMark"></div>
            </div>
           </div>

              <div className="forumViews">
                <i className="far fa-comment-dots" style={{fontWeight: '900'}}> 1,568</i>
              </div>
              <div className="forumTime">
                <i className="fa fa-clock-o"> 24 min</i>
              </div>
             </div>
             <div className="chatter_clear"></div>
            </div>
          </li>


          
          <li>
            <div  className="discussion_list" >
              <div className="forumPanelLeft">
            <div className="chatter_avatar">
              <img src="/assets/img/BgRsI8KzdR_120x120.jpg" alt= ""></img>
            </div>
            <div className="chatter_middle">
              <Link to="/ForumPost"><h3 className="chatter_middle_title">Why did you start playing your instrument? 
              </h3></Link>

              <span className="chatter_middle_details">Posted by <span className="postedBy">Lawrence Chaventre</span>
           
              </span>
              <p>Hi everyone, this is mainly for the band but I know I am joined by many talented individuals who surpass me in terms of musical ability so please do comment below.
I began playing drums first because ...</p>
            </div>
            </div>
              
             {/* Post and comments on right side */}
            <div className="forumPostinfo">
              <div className="forumComments">
              <div className="commentbg">
                  560
              <div className="forumMark"></div>
            </div>
           </div>

              <div className="forumViews">
                <i className="far fa-comment-dots" style={{fontWeight: '900'}}> 1,568</i>
              </div>
              <div className="forumTime">
                <i className="fa fa-clock-o"> 24 min</i>
              </div>
             </div>
             <div className="chatter_clear"></div>
            </div>
          </li>
        </ul>

      </div>
      </div>



        {/* for side Category */}
      <div className="col-lg-4 col-md-4">
        <div className="forumSidebarblock">
          <h3>Categories
            <Link href="" id="new_discussion_btn"><span className="forumNewDiscussion"><i className="fa fa-plus-circle" style={{fontSize:'15px'}}></i> New Discussion</span></Link>
          </h3>

          <div className="forumDivline"> </div>
          <div className="forumBlocktxt">
            <ul className="forumCats">
              <li>
                <Link href=""> <span className="forumTrading">Trading for Money </span><span className="forumBadge">10</span></Link>
              </li>
              <li>
                <Link href=""> <span className="forumTrading">Looking for Players </span><span className="forumBadge">13</span></Link>
              </li>
              <li>
                <Link href=""> <span className="forumTrading">Misc Guns Locations  </span><span className="forumBadge">10</span></Link>
              </li>
              <li>
                <Link href=""> <span className="forumTrading">Trading for Money </span><span className="forumBadge">17</span></Link>
              </li>
              <li>
                <Link href=""> <span className="forumTrading">Looking for Players </span><span className="forumBadge">10</span></Link>
              </li>
              <li>
                <Link href=""> <span className="forumTrading">Misc Guns Locations  </span><span className="forumBadge">7</span></Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
  </div>






{/* Scroll to next page */}
<div className="container">
<div className="row">
  <div className="col-lg-8 col-12">
    <div className="NPpull-left">
   <a href="" className="NPprevnext">
        <i className="fa fa-angle-left" style={{fontFamily:'fontAwesome'}}></i>
   </a>
    </div>
        <div className="NPpull-left">
          <ul className="NPpaginationforum">
            <li><a href="" className="nextbtns hiddden-xs">1</a> </li>
            <li><a href="" className="nextbtns hidden-xs">2</a> </li>
            <li><a href="" className="nextbtns hidden-xs">3</a> </li>
            <li><a href="" className="nextbtns hidden-xs">4</a> </li>
            <li><a href="" className="nextbtns ">5</a> </li>
            <li><a href="" className="nextbtns ">6</a> </li>
            <li><a href="" className="nextbtns">7</a> </li>
            <li><a href="" className="nextbtns ">8</a> </li>
            <li><a href="" className="nextbtns hidden-xs">9</a> </li>
            <li><a href="" className="nextbtns hidden-xs">10</a> </li>
            <li><a href="" className="nextbtns hidden-md hidden-xs">11</a> </li>
            <li><a href="" className="nextbtns hidden-md hidden-xs">12</a> </li>
            <li><a href="" className="nextbtns hidden-md hidden-xs">13</a> </li>
            <li><a href="" className="nextbtns ">1585</a> </li>
          </ul>
        </div>

        <div className="NPpull-left">
        <a href="" className="NPprevnext NPlast">
        <i className="fa fa-angle-right" style={{fontFamily:'fontAwesome'}}></i>
       </a>
        </div>

  </div>
  </div>
</div>

</div>
<NewDiscussion/>
<Footer/>
   </>
    );
  }
}
export default Forum;