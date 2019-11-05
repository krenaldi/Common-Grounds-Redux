import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import UserProvider from './context/UserProvider';
import Home from './pages/Home';
import Profile from './pages/Profile';
import MenuBar from './components/menus/MenuBar';
//pages
import Group from './pages/Group';
// newly added for login authentication starts here
//import AppNavbar from './components/forms'; this file is needed to display the register/log out
import GroupForm from './components/forms/GroupForm';
import GroupModal from './components/forms/GroupModal';
import { Provider } from 'react-redux'; 
import store from './store';
import { loadUser } from './actions/authActions';


class App extends Component {
    componentDidMount(){
        store.dispatch(loadUser());
    }
   render() {
       return(
        <Provider store= {store}>
        <Router history={history}>
            <UserProvider>
                <Route path="/" component={MenuBar} />
                <Route path="/profile" component={Profile} />
                <Route path="/group" component={Group} />
                <GroupModal />
                <GroupForm />
            </UserProvider>
            <Route exact path="/" component={Home} />
        </Router>
       </Provider>
       )
   }
};

export default App;
