import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import UserProvider from './context/UserProvider';
import Home from './pages/Home';
import Profile from './pages/Profile';
import MenuBar from './components/menus/MenuBar';
//pages
import Group from './pages/Group';
<<<<<<< HEAD
// newly added for login authentication starts here
//import AppNavbar from './components/forms'; this file is needed to display the register/log out
import GroupForm from './components/forms/GroupForm';
import GroupModal from './components/forms/GroupModal';
import { Provider } from 'react-redux'; 
import store from './store';
import { loadUser } from './actions/authActions';
=======
import Test from './pages/Test';
>>>>>>> master


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
<<<<<<< HEAD
                <GroupModal />
                <GroupForm />
=======
                <Route path="/admin" component={Test} />
>>>>>>> master
            </UserProvider>
            <Route exact path="/" component={Home} />
        </Router>
       </Provider>
       )
   }
};

export default App;
