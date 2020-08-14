import React from 'react';
import '../../../layout/style/Messages.css';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import AuthNavbar from '../../Auth/AuthNavbar/AuthNavbar';

import {
  Layout, Header, Navigation, Drawer,
  HeaderRow, Textfield, Content
} from 'react-mdl';
import Footer from '../../Auth/Footer/Footer';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})
  (props => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


//////////   Messages Function



function Messages() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

      return (
  <>
  <AuthNavbar/>
    {/* End AuthNavbar */}


      <div className="container">
<div className="row margin">
          <div className="col-md-12">
            <div className="navBar">

              <div>
                <p><Link className="navBarLink hvr-underline-from-center" to="/Profile">My Profile</Link></p>
              </div>

              <div>
                <p><Link className="navBarLink hvr-underline-from-center" to="/Messages">Messages</Link></p>
              </div>

              <div>
                <p><Link className="navBarLink hvr-underline-from-center" to="/Messages">Invites</Link></p>
              </div>

              <div>
                <p><Link className="navBarLink hvr-underline-from-center" to="/Messages">Events</Link></p>
              </div>

              <div className="buttonInCenter">
                <img src={"./assets/img/profileSideToted.png"}
                  aria-controls="customized-menu"
                  aria-haspopup="true"
                  variant="contained"
                  color="default"
                  onClick={handleClick}
                >
                </img>
                <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <StyledMenuItem >
                    <Link to="/editProfile" > <ListItemText primary="Edit Profile" /> </Link>
                  </StyledMenuItem>
                </StyledMenu>
              </div>
              {/* <div className="profileDoted">
              <img  src={"./assets/img/profileSideToted.png"}/>
            </div> */}
            </div>
          </div>
         
    


<div classNameName="col-md-12 messagesContainer">

<div className="messaging">
      <div className="inbox_msg">
        <div className="inbox_people">
          <div className="headind_srch">
            <div className="recent_heading">
              <h4>Recent</h4>
            </div>
            <div className="srch_bar">
              <div className="stylish-input-group">
                <input type="text" className="search-bar"  placeholder="Search" ></input>
                {/* <span className="input-group-addon">
                <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                </span> */}
                 </div>
            </div>
          </div>
          <div className="inbox_chat">
            <div className="chat_list active_chat">
              <div className="chat_people">
                <div className="chat_img"> <img src={"./assets/img/singer1.png"} alt="sunil"></img> </div>
                <div className="chat_ib">
                  <h5>Sonia<span className="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach...</p>
                </div>
              </div>
            </div>
            <div className="chat_list">
              <div className="chat_people">
                <div className="chat_img"> <img src={"./assets/img/singer1.png"} alt="sunil"></img> </div>
                <div className="chat_ib">
                  <h5>Hinna<span className="chat_date">Dec 25</span></h5>
                  <p>All solutions astrology under...</p>
                </div>
              </div>
            </div>
            <div className="chat_list">
              <div className="chat_people">
                <div className="chat_img"> <img src={"./assets/img/msg5.png"} alt="sunil"></img> </div>
                <div className="chat_ib">
                  <h5>Hinna<span className="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach...</p>
                </div>
              </div>
            </div>
            <div className="chat_list">
              <div className="chat_people">
                <div className="chat_img"> <img src={"./assets/img/singer1.png"} alt="sunil"></img> </div>
                <div className="chat_ib">
                  <h5>Aynna<span className="chat_date">Dec 25</span></h5>
                  <p>Approach to have all solutions..</p>
                </div>
              </div>
            </div>
            <div className="chat_list">
              <div className="chat_people">
                <div className="chat_img"> <img src={"./assets/img/msg5.png"} alt="sunil"></img> </div>
                <div className="chat_ib">
                  <h5>Maloo<span className="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach...</p>
                </div>
              </div>
            </div>
            <div className="chat_list">
              <div className="chat_people">
                <div className="chat_img"> <img src={"./assets/img/singer1.png"} alt="sunil"></img> </div>
                <div className="chat_ib">
                  <h5>Alexis<span className="chat_date">Dec 25</span></h5>
                  <p>Approach to have all solutions..</p>
                </div>
              </div>
            </div>
            <div className="chat_list">
              <div className="chat_people">
                <div className="chat_img"> <img src={"./assets/img/singer1.png"} alt="sunil"></img> </div>
                <div className="chat_ib">
                  <h5>Anne<span className="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach...</p>
                </div>
              </div>
            </div>
            <div className="chat_list">
              <div className="chat_people">
                <div className="chat_img"> <img src={"./assets/img/singer1.png"} alt="sunil"></img> </div>
                <div className="chat_ib">
                  <h5>Alexis<span className="chat_date">Dec 25</span></h5>
                  <p>Approach to have all solutions..</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mesgs">
          <div className="msg_history">
            <div className="incoming_msg">
              <div className="incoming_msg_img"> <img src={"./assets/img/singer2.png"} alt="sunil"></img> </div>
              <div className="received_msg">
                <div className="received_withd_msg">
                <p>We work directly with our designers and suppliers,
                    and sell direct to you, which means quality, exclusive
                    products, at a price can afford.</p>
                  <span className="time_date"> 11:01 AM    |    June 9</span></div>
              </div>
            </div>
            <div className="outgoing_msg">
              <div className="sent_msg">
              <p>We work directly with our designers and suppliers,
                    and sell direct to you, which means quality, exclusive
                    products, at a price anyone can afford.</p>
                <span className="time_date"> 11:01 AM    |    June 9</span> </div>
            </div>
            <div className="incoming_msg">
              <div className="incoming_msg_img"> <img src={"./assets/img/singer2.png"} alt="sunil"></img> </div>
              <div className="received_msg">
                <div className="received_withd_msg">
                <p>We work directly with our designers and suppliers,
                    and sell direct to you, which means quality, exclusive
                    products, at a price anyone can afford.</p>
                  <span className="time_date"> 11:01 AM    |    Yesterday</span></div>
              </div>
            </div>
            <div className="outgoing_msg">
              <div className="sent_msg">
              <p>We work directly with our designers and suppliers,
                    and sell direct to you, which means quality, exclusive
                    products, at a price anyone can afford.</p>
                <span className="time_date"> 11:01 AM    |    Today</span> </div>
            </div>
            <div className="incoming_msg">
              <div className="incoming_msg_img"> <img src={"./assets/img/singer2.png"} alt="sunil"></img> </div>
              <div className="received_msg">
                <div className="received_withd_msg">
                  <p>We work directly with our designers and suppliers,
                    and sell direct to you, which means quality, exclusive
                    products, at a price anyone can afford.</p>
                  <span className="time_date"> 11:01 AM    |    Today</span></div>
              </div>
            </div>
            <div className="outgoing_msg">
              <div className="sent_msg">
              <p>We work directly with our designers and suppliers,
                    and sell direct to you, which means quality, exclusive
                    products, at a price anyone can afford.</p>
                <span className="time_date"> 11:01 AM    |    Today</span> </div>
            </div>
          </div>
          
          <div className="type_msg">
            <div className="input_msg_write">
              <input type="text" className="write_msg" placeholder="Type a message" />
              <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   </div>
</div>
<Footer/>
</>

    )
}

export default Messages;