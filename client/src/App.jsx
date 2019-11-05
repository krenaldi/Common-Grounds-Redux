import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import UserProvider from './context/UserProvider';
import Home from './pages/Home';
import Profile from './pages/Profile';
import MenuBar from './components/menus/MenuBar';
import Group from './pages/Group';
import Test from './pages/Test';

const App = () => {
    return (
        <Router history={history}>
            <UserProvider>
                <Route path="/" component={MenuBar} />
                <Route path="/profile" component={Profile} />
                <Route path="/group" component={Group} />
                <Route path="/admin" component={Test} />
            </UserProvider>
            <Route exact path="/" component={Home} />
        </Router>
    );
};

export default App;
