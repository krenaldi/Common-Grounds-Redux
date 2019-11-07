import React from 'react';
import CardList from '../components/cards/CardList';
// import FriendsGroup from "../res/bright.jpg"


const Home = () => {
    return (
        <div>

            <div className="parallax-home-page">
                <div className="caption">
                    <span className="border">Common Grounds</span>
                    <span className="border2">where everybody meets half way</span>
                </div>
            </div>

            <div className="page" style={{ textAlign: "center" }}>
                <div className="page-inside">

                    <p className="leftalign">
                        Introducing an easy and fun way to schedule a public get-together without the usual hassle. Whether you're meetig up with colleagues or hanging out with friends, Common Grounds provides your group with destinations in the center of each member's location.
                    </p>

                    <p className="leftalign">
                        Explore new areas, discover your new favorite restaurant, and share great times with your friends on Common Grounds.
                    </p>

                    <p className="login-title-div" >
                        Login to Get Started
                    </p>
                    <div className="login-button-div">
                        <CardList />
                    </div>

                    <h5>
                        Don't have an Account? <a className="click-here" href="/login">click here</a>
                    </h5>
                </div>
            </div>
        </div>

    );
};

export default Home;