import React from 'react';
import Terminal from '../components/displays/Terminal';
import CardList from '../components/cards/CardList';

const Home = () => {
    return (
        <div className="page" style={{ textAlign: "center"}}>
            <p style={{ fontSize: 20 }}>
                Test Login with Facebook, Google, or Github.
            </p>
            <Terminal 
                userData={"passport.authenticate('facebook')"} 
                selected="All"
            />
            <CardList />
            <div style={{ marginBottom: 20 }} />
        </div>
    );
};

export default Home;
