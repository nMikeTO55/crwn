import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";

import {UserContext} from '../../contexts/user.context.jsx';

import {signOutUser } from "../../utils/firebase/firebase.util.js";


import "./navigation.styles.scss";

const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);

  const signOutHandler = async ()=>{
    await signOutUser();
    setCurrentUser(null);
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={CrwnLogo} alt="SVG" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          {
            currentUser ? (
              <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>
            ) : ( <Link className="nav-link" to="auth">
            SIGN IN
          </Link>
            )
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
