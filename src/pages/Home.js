import React from 'react';
import Terminal from '../components/displays/Terminal';
import CardList from '../components/cards/CardList';

const Home = () => {
    return (
        <div className="page" style={{ textAlign: "center" }}>
            <h1 className="page-title">Welcome to Common Grounds</h1>
            <h5 className="subtitle" style={{ fontSize: 20 }}>
                where everybody meets half way
            </h5>

            <p>
                Introducing an easy and fun way to schedule a public get-together without the usual hassle. Whether you're meetig up with colleagues or hanging out with friends, Common Grounds provides your group with destinations in the center of each member's location.
            </p>

            <p>
                Explore new areas, discover your new favorite restaurant, and share great times with your friends on Common Grounds.
            </p>
            
            <p style={{ fontSize: 28 }}>
                Popular Login Strategies
            </p>
            <CardList />
            <div style={{ marginBottom: 20 }} />
        </div >
    );
};

export default Home;


