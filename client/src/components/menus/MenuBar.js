import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import UserDropDown from "./UserDropDown";
import UserProvider from '../../context/UserProvider';
import { data } from '../../data';
import _ from 'lodash';
import CommonGroundsLogo from '../../res/cglogo.png'
// import PassportLogo from '../../res/defaultpro.png';
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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


{/* Social Media Icon */}
                <a className="ppp">
                    {
                        !_.isEmpty(userData) &&
                        <Link className="btn " to="/profile" title={`${loginType.name} data`}>
                            <div className="app-icon-container" style={{ backgroundColor: loginType.color }}>
                                <img
                                    className="btn-icon"
                                    src={loginType.img}
                                    alt={loginType.alt}
                                // style={{ position: "absolute", top: 20, marginLeft: 3}}
                                />
                            </div>
                        </Link>
                    }
                </a>



                {/* Profile Button */}
                <a className="general-btn btn menu-btn" href="/">
                    <Link className="btn menu-btn" to="/" title="Profile">
                        <PersonIcon />
                    </Link>
                </a>

                


            </div>

        </div>
    );
}

export default MenuBar;