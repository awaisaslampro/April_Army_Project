import React, {Component} from 'react';
import '../../../layout/style/ForumPost.css';
import { Link } from 'react-router-dom';
import AuthNavbar from '../../Auth/AuthNavbar/AuthNavbar';
import Footer from '../../Auth/Footer/Footer';
import NewDiscussion from '../NewDiscussion/NewDiscussion';

class ForumPost extends Component{
  render(){
    return(
   <>
<AuthNavbar/>

<div className="container" style={{marginTop:"103px"}}>
    <div className="row">
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">

          <div className="forumPostPost">
          <div className="forumPostTopwrap">
            <div className="forumPostUserinfo "> 

            <div className="forumPostAvatar">
            <img src="/assets/img/CLblGFP0d8_120x120.JPG" alt= ""></img>
              </div>
              </div>

            <div className="forumPostPosttext ">
            <Link href=""><h3 className="forumPoster">Karin Dikenshtein</h3></Link>
              <p>Typography helps you engage your audience and establish a distinct, unique personality on your website. Knowing how to use fonts to build character in your design is a powerful skill,
                 and exploring the history and use of typefaces, as well as typogra...</p>
            </div>
            </div>
              {/* Post Share and Like */}
              <div className="forumPostPostinfobot">
                <div className="forumPostLikeblock  ">

                  <Link href="" className="forumPostup">
                    <i className="fa fa-thumbs-o-up">10</i>
                  </Link>
                  <Link href="" className="forumPostdown">
                    <i className="fa fa-thumbs-o-down">1</i>
                  </Link>
                </div>

                <div className="forumPostprev  ">
                <Link href="" className="forumPostReply">
                    <i className="fa fa-reply"></i>
                  </Link>
                </div>
                <div className="forumPostposted  ">
                    <i className="fa fa-clock-o"></i>
                    Posted on : 20 Nov @ 9:45am
                </div>
                <div className="forumPostnext ">
                <Link href="" className="forumPostFlagShare">
                    <i className="fa fa-share"></i>
                  </Link>
                  <Link href="" className="forumPostFlag">
                    <i className="fa fa-flag"></i>
                  </Link>
                </div> 
                <div className="chatter_clear"></div>
              </div>
          </div>






          <div className="forumPostPost">
          <div className="forumPostTopwrap">
            <div className="forumPostUserinfo "> 

            <div className="forumPostAvatar">
            <img src="/assets/img/CLblGFP0d8_120x120.JPG" alt= ""></img>
              </div>
              </div>

            <div className="forumPostPosttext ">
            <Link href=""><h3 className="forumPoster">Karin Dikenshtein</h3></Link>
              <p>Typography helps you engage your audience and establish a distinct, unique personality on your website. Knowing how to use fonts to build character in your design is a powerful skill,
                 and exploring the history and use of typefaces, as well as typogra...</p>
            </div>
            </div>
              {/* Post Share and Like */}
              <div className="forumPostPostinfobot">
                <div className="forumPostLikeblock  ">

                  <Link href="" className="forumPostup">
                    <i className="fa fa-thumbs-o-up">10</i>
                  </Link>
                  <Link href="" className="forumPostdown">
                    <i className="fa fa-thumbs-o-down">1</i>
                  </Link>
                </div>

                <div className="forumPostprev  ">
                <Link href="" className="forumPostReply">
                    <i className="fa fa-reply"></i>
                  </Link>
                </div>
                <div className="forumPostposted  ">
                    <i className="fa fa-clock-o"></i>
                    Posted on : 20 Nov @ 9:45am
                </div>
                <div className="forumPostnext ">
                <Link href="" className="forumPostFlagShare">
                    <i className="fa fa-share"></i>
                  </Link>
                  <Link href="" className="forumPostFlag">
                    <i className="fa fa-flag"></i>
                  </Link>
                </div> 
                <div className="chatter_clear"></div>
              </div>
          </div>





          <div className="forumPostPost">
          <div className="forumPostTopwrap">
            <div className="forumPostUserinfo "> 

            <div className="forumPostAvatar">
            <img src="/assets/img/CLblGFP0d8_120x120.JPG" alt= ""></img>
              </div>
              </div>

            <div className="forumPostPosttext ">
            <Link href=""><h3 className="forumPoster">Karin Dikenshtein</h3></Link>
              <p>Typography helps you engage your audience and establish a distinct, unique personality on your website. Knowing how to use fonts to build character in your design is a powerful skill,
                 and exploring the history and use of typefaces, as well as typogra...</p>
            </div>
            </div>
              {/* Post Share and Like */}
              <div className="forumPostPostinfobot">
                <div className="forumPostLikeblock  ">

                  <Link href="" className="forumPostup">
                    <i className="fa fa-thumbs-o-up">10</i>
                  </Link>
                  <Link href="" className="forumPostdown">
                    <i className="fa fa-thumbs-o-down">1</i>
                  </Link>
                </div>

                <div className="forumPostprev  ">
                <Link href="" className="forumPostReply">
                    <i className="fa fa-reply"></i>
                  </Link>
                </div>
                <div className="forumPostposted  ">
                    <i className="fa fa-clock-o"></i>
                    Posted on : 20 Nov @ 9:45am
                </div>
                <div className="forumPostnext ">
                <Link href="" className="forumPostFlagShare">
                    <i className="fa fa-share"></i>
                  </Link>
                  <Link href="" className="forumPostFlag">
                    <i className="fa fa-flag"></i>
                  </Link>
                </div> 
                <div className="chatter_clear"></div>
              </div>
          </div>





        {/* Reply Comment */}

        <div className="forumPostPost">

          <form className="forumPostForm">
          <div className="forumPostTopwrap">
            <div className="forumPostUserinfo "> 
            <div className="forumPostAvatar">
            <img src="/assets/img/CLblGFP0d8_120x120.JPG" alt= ""></img>
              </div>
              </div>
              <div className="forumPostPosttext ">
                <div className="forumPosttextwraper">
                  <textarea className="forumPostTextarea" name="reply" id="reply" placeholder="Type your message here"></textarea>
                  </div>
                </div>

                <div className="forumPostPostinfobot">
                  <div className="forumNotechbox ">
                      <input className="forumPostcontrol" type="checkbox" name="note" id="note"></input>
                 </div>

                      <div style={{float:'left'}}>
                        <label for="note"> Email me when some one post a reply</label> 
                      </div> 
                        <div style={{float:'right'}}>
                          <button type="submit" className="forumPostbtn-primary">Post Reply</button>
                          {/* <Link href=""><span className="forumPostbtn-primary">Post Reply</span></Link> */}
                        </div>
                        <div className="chatter_clear"></div>
                      
                      <div className="chatter_clear"></div>
              </div>
             </div>
          </form>
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
export default ForumPost;

