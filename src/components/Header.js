import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { EQZContext } from '../context/earthquake-zen-context';

import '../css/header.scss';

const Header = () => {
  const { data } = useContext(EQZContext);

  const {
    profile: { firstName },
    site: { title, logoImage },
  } = data;

  return (
    <div className="header-container">
      <div className="logo-container">
        <NavLink to="/">
          <img className="logo" src={logoImage} alt="Realtor Logo"></img>
        </NavLink>
      </div>
      <div className="app-title">
        <span className="app-title-text">{title}</span>
      </div>
      <div className="profile-link">
        <NavLink to="/profile">Welcome {firstName}</NavLink>
      </div>
    </div>
  );
};

export { Header };
