import React from 'react';
import '.././src/layout/style/App.css';
import {
    Layout, Header, Navigation, Drawer,
    HeaderRow, Textfield, Content
} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/Auth/Route/Main';

const divStyle = {

    display: 'flex',
    justifyContent: 'center',
    width: '98%',

};
function App() {
    return (
        // <div className="demo-big-content">
        <Layout className="main-landing">
            {/* <Header className="header">
                    <HeaderRow title=" " className="header-color">
                        <div  className="logoIn"  style={divStyle}>
                            <Link to="/LandingPage"><img src={"/assets/img/logo.png"} ></img></Link>
                        </div>
                        <div className="searchIcon"><Textfield
                            value=""
                            onChange={() => { }}
                            label="Search2"
                            expandable
                            expandableIcon="search" />

                        </div>

                    </HeaderRow>

                </Header>

                <Drawer title=" " className="drawer">

                    <Navigation className="Navigation">

                    <div><Link to="/LandingPage"><img className="sideLogo" src={"/assets/img/logo.png"}></img></Link></div>
                        <div className="sideLogos">

                            <div className="home"><img src={"/assets/img/home.png"} /><Link to="/LandingPage">Home</Link></div>
                            <div className="contact"><img src={"/assets/img/contact.png"}></img><Link to="/LandingPage">Contact us</Link></div>
                            <div className="games"><img src={"/assets/img/games.png"}></img><Link to="/LandingPage">Games</Link></div>
                            <div className="login"><img src={"/assets/img/login.png"}></img><Link to="/Login">Log in</Link> </div>
                            <div className="register"><img src={"/assets/img/register.png"}></img><Link to="/Register">Register</Link></div>
                        </div>
                    </Navigation>
                </Drawer>
       */}

            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
        // </div> this is all about content 
        //and going to push to gitHub


    );
}

export default App;
