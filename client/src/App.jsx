import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import UserProvider from './context/UserProvider';
import Home from './pages/Home';
import Profile from './pages/Profile';
import MenuBar from './components/menus/MenuBar';
// import Data from './pages/DataResults';
import User from './pages/User';
import Register from './pages/Register';
import CreateGroup from './components/forms/CreateGroup';

const App = () => {
    return (
        <Router history={history}>
            <UserProvider>
                <Route path="/" component={MenuBar} />
                <Route path="/profile" component={Profile} />
                <Route path="/login" component={User}/>
                <Route path="/register" component={Register}/>
                <Route path="/group" component={CreateGroup} />
                {/* <Route path="/profile" component={Data} /> */}
            </UserProvider>
            <Route exact path="/" component={Home} />
        </Router>
    );
};

export default App;
