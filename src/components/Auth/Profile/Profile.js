import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import "../../../layout/style/Profile.css";
import '../../../layout/style/hover.css';

import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import AuthNavbar from '../../Auth/AuthNavbar/AuthNavbar';
import Footer from '../../Auth/Footer/Footer';
import SidenavTesting from '../../Auth/SidenavTesting/SidenavTesting';

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

// const pStyle = after{
  
//   position: 'absolute',
//   content: '',
//   borderBottom: '3px solid #1eead8',
//   width: '99%',
//   transform: 'translateX(-50%)',
//   bottom: '0px',
//   left: '50%'

// };

//////////   Profile Function

function Profile() {
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

        <div className="row">
          <div className="col-md-12">
            <div className="navBar">

              <div>
                <p ><Link className="navBarLink hvr-underline-from-center" to="/Profile">My Profile</Link></p>
              </div>

              <div>
                <p><Link className="navBarLink hvr-underline-from-center" to="/Messages">Messages</Link></p>
              </div>

              <div>
                <p><Link className="navBarLink hvr-underline-from-center" to="/Profile">Invites</Link></p>
              </div>

              <div>
                <p><Link className="navBarLink hvr-underline-from-center" to="/Profile">Events</Link></p>
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

          <div className="col-md-12">
            <div className="row margin">
              <div className="col-md-4 zero-pad">

                <div className="profile">
                  <div className="profileDiv">
                    <div className="profileImg">
                      <img src={"./assets/img/JimmyProfile.png"} />
                      <div className="profileText">
                        <h4>Jimmy Strimell</h4>
                        <p>First and foremost April Army is a subscription based plateform that we, the band
		First and foremost April Army is a subscription based </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 zero-pad">
                <div className="mainPost">
                  <div className="upperPost">
                    <div className="post">
                      <div>
                        <p>Friends</p>
                      </div>
                      <div>
                        <p>Forum Post</p>
                      </div>
                      <div>
                        <p>Likes</p>
                      </div>
                    </div>
                    <div className="progressLine">
                      <img className="line" src={"./assets/img/line.png"} />
                    </div>

                    <div className="post">
                      <div>
                        <p>23</p>
                      </div>
                      <div>
                        <p>655</p>
                      </div>
                      <div>
                        <p>123</p>
                      </div>
                    </div>
                  </div>
                  <div className="lowerPost">
                    <div className="ratting">
                      <h1>Progress</h1>
                      <div className="progressLine">
                        <img className="line" src={"./assets/img/line.png"} />
                      </div>
                      <div className="rattingName">
                        <div>
                          <p>Drace</p>
                        </div>
                        <div>
                          <p>Quiz</p>
                        </div>
                        <div>
                          <Link to="/Awards" ><p>Awards</p></Link>
                        </div>
                      </div>
                      <div className="rattingRound">
                        <div>
                          <img src={"./assets/img/ten.png"} />
                        </div>
                        <div>
                          <img src={"./assets/img/fourty.png"} />
                        </div>
                        <div>
                          <img src={"./assets/img/hundred.png"} />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-md-4 zero-pad">
                <div className="profileDiv">
                  <div className="songs">
                    <h1>Top 3 songs</h1>
                    <img className="line" src={"./assets/img/line.png"} />
                    <p className="singersTag">Loosing you to faced warrior</p>
                  </div>
                  <div className="singers">
                    <div>
                      <img src={"./assets/img/singer1.png"} />
                    </div>

                    <div>
                      <img src={"./assets/img/singer2.png"} />
                    </div>

                    <div>
                      <img src={"./assets/img/singer3.png"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      {/* <SidenavTesting/> */}
    </>
  )
}
export default Profile;