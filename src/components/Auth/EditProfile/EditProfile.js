import React from 'react';
import '../../../layout/style/EditProfile.css';
import { Link } from 'react-router-dom';
import {
    Layout, Header, Navigation, Drawer,
    HeaderRow, Textfield, Content
  } from 'react-mdl';
  import AuthNavbar from '../../Auth/AuthNavbar/AuthNavbar';
  import Footer from '../../Auth/Footer/Footer';
// import SidenavTesting from '../../Auth/SidenavTesting/SidenavTesting';

  function EditProfile(){
      return (
  <>
  
  <AuthNavbar/>
    {/* End AuthNavbar */}
        <div className="editProfile">
        <div>
            <div className="topProfileHeader">
            <div className="profileHeader"><h3 >Personal Details</h3>
            <div className="topEditor"><span className="fa fa-pencil-alt"></span></div>
            </div>
            </div>
            <div className="personalList">
            <ul>
            <li ><span className="fa fa-user editIcon"></span><span className="name">Name</span><span className="fa fa-pencil-alt"></span></li> 
            <li ><span className="fa fa-user editIcon"></span><span className="userName">User Name</span><span className="fa fa-pencil-alt"></span></li>
            <li ><span className="fa fa-user editIcon"></span><span className="email">email@gmail.com</span><span className="fa fa-pencil-alt"></span></li>
            <li ><span className="fa fa-mobile-alt editIcon"></span><span className="phone">000 000 000</span><span className="fa fa-pencil-alt"></span></li>
            </ul>
            </div>
        </div>            
        <div>
        <div className="topProfileHeader">
            <div className="profileHeader"><h3 >Personal Details</h3>
            <div className="topEditor"><span className="fa fa-pencil-alt"></span></div>
            </div>
            </div>
            <div className="personalList">
            <ul>
            <li ><span className="fa fa-flag editIcon"></span><span className="country">Country</span><span className="fa fa-pencil-alt"></span></li> 
            <li ><span className="fa fa-flag editIcon"></span><span className="city">City</span><span className="fa fa-pencil-alt"></span></li>
            <li ><span className="fa fa-flag editIcon"></span><span className="state">State</span><span className="fa fa-pencil-alt"></span></li>
            <li ><span className="fa fa-list-alt editIcon"></span><span className="zip">Zip code</span><span className="fa fa-pencil-alt"></span></li>
            <li ><span className="fa fa-home editIcon"></span><span className="address">Address</span><span className="fa fa-pencil-alt"></span></li>
            </ul>
            </div>
        </div>
        <div>
        <div className="topProfileHeader">
            <div className="profileHeader"><h3 >Personal Details</h3>
            <div className="topEditor"><span className="fa fa-pencil-alt"></span></div>
            </div>
            </div>
            <div className="personalList">
            <ul>
            <li ><span className="">Shirt/T-shirt size</span></li> 
            <li ><span className="fa fa-tshirt editIcon"></span><span className="shirtSize">Size</span><span className="fa fa-pencil-alt"></span></li>
            <li ><span className="">Shirt/T-shirt size</span></li>
            <li ><span className="fa fa-tshirt editIcon"></span><span className="pentSize">Size</span><span className="fa fa-pencil-alt"></span></li>
            </ul>
            </div>
        </div>
    </div>
    {/* <Footer/> */}
    </>
    )

}
export default EditProfile;