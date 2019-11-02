import React from 'react';
// import Terminal from '../components/displays/Terminal';
import CardList from '../components/cards/CardList';

const Home = () => {
    return (
        <div className="page" style={{ textAlign: "center" }}>
            <p className="title">Welcome to Common Grounds</p>
            <p className="subtitle" >
                where everybody meets half way
            </p>

            <p>
                Introducing an easy and fun way to schedule a public get-together without the usual hassle. Whether you're meetig up with colleagues or hanging out with friends, Common Grounds provides your group with destinations in the center of each member's location.
            </p>

            <p>
                Explore new areas, discover your new favorite restaurant, and share great times with your friends on Common Grounds.
            </p>

            <p className="login-title-div" >
                Login to Get Started
            </p>
            <div className="login-button-div">
                <CardList />
            </div>

            <p>
                Don't have an Account? Click Here
            </p>

        </div >
    );
};

export default Home;


