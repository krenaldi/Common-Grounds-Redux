import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserProvider from '../../context/UserProvider';
import { data } from '../../data';
import _ from 'lodash';
import CommonGroundsLogo from '../../res/cglogo.png'
import PersonIcon from '@material-ui/icons/Person';
import LogoutIcon from '@material-ui/icons/ExitToApp';


const MenuBar = () => {

    const userData = useContext(UserProvider.context);
    const loginType = !_.isEmpty(userData) ? _.find(data, d => d.name === userData.provider) : {};


    return (
        <div className="menu-bar">

            <div className="menu-bar-btn-row">
                <a className="btn menu-btn" href="/">
                    {/* Common Grounds Logo */}
                    <img
                        src={CommonGroundsLogo}
                        alt="common grounds logo"
                        style={{ height: 30 }}
                    />
                    <span className="logo-font">Common Grounds</span>
                </a>

{/* Logout button will appear once user is logged in */}
                {
                    !_.isEmpty(userData) &&
                    <a
                        className="btn menu-btn general-btn logout"
                        href={"/auth/logout"}
                        title="Logout"
                    >
                        <span className="logout-font">Logout</span>
                        <LogoutIcon />
                        
                    </a>
                }


                {/* Social Media Icon */}

                {
                    !_.isEmpty(userData) &&
                    <Link to="/profile" title={`${loginType.name} data`}>
                        <div className="app-icon-container" style={{ backgroundColor: loginType.color }}>
                            <img
                                className="btn-icon"
                                src={loginType.img}
                                alt={loginType.alt}
                            />
                        </div>
                    </Link>
                }


                {/* Profile Button */}
                <Link className="btn menu-btn general-btn" to="/" title="Profile">
                    <PersonIcon />
                </Link>

                
            </div>

        </div>
    );
}

export default MenuBar;