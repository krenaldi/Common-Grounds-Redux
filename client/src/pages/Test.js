import React from 'react';
import Terminal from '../components/displays/Terminal';
import CardList from '../components/cards/CardList';

const Home = () => {
    return (
        <div className="page" style={{ textAlign: "center"}}>
            <p className="page-title">Simple OAuth with Node</p>
            <p style={{ fontSize: 20 }}>
                Login with Facebook, Google, or Github.
            </p>
            <Terminal 
                userData={"passport.authenticate('facebook')"} 
                selected="All"
            />
            <p style={{ fontSize: 28 }}>
                Popular Login Strategies
            </p>
            <CardList />
            <div style={{ marginBottom: 20 }} />
        </div>
    );
};

export default Home;
