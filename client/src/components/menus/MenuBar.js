import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import UserDropDown from "./UserDropDown";
import UserProvider from '../../context/UserProvider';
import { data } from '../../data';
import _ from 'lodash';
import CommonGroundsLogo from '../../res/cglogo.png'
// import PassportLogo from '../../res/defaultpro.png';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LogoutIcon from '@material-ui/icons/ExitToApp';

const MenuBar = () => {

    const userData = useContext(UserProvider.context);
    const loginType = !_.isEmpty(userData) ? _.find(data, d => d.name === userData.provider) : {};


    return (
        <div className="menu-bar">
            {
                !_.isEmpty(userData) &&
                <Link className="btn menu-btn" to="/profile" title={`${loginType.name} data`}>
                    <div className="app-icon-container" style={{ backgroundColor: loginType.color }}>
                        <img
                            className="btn-icon"
                            src={loginType.img}
                            alt={loginType.alt}
                            style={{ position: "absolute", top: 17, paddingLeft: 5 }}
                        />
                    </div>
                </Link>
            }

{
                _.isEmpty(userData) &&
// COMMON GROUNDS LOGO
                <a className="logo-btn btn menu-btn MuiSvgIcon-root" href="/">
                    <img
                        src={CommonGroundsLogo}
                        alt="common grounds logo"
                        style={{ height: 30 }}
                    />
                   
                </a>
            }

            {
                _.isEmpty(userData) &&
                <Link className="btn menu-btn" to="/" title="Home">
                    <PersonIcon />
                </Link>
            }

            {
                !_.isEmpty(userData) &&
                <Link className="btn menu-btn" to="/profile" title="Profile">
                    <AccountCircleIcon />
                </Link>
            }

            {
                !_.isEmpty(userData) &&
                <a
                    className="btn menu-btn"
                    href={"/auth/logout"}
                    title="Logout"
                    style={{ float: "right" }}
                >
                    <LogoutIcon />
                </a>
            }
        </div>
    );
}

export default MenuBar;