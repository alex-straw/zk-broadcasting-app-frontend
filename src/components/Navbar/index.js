import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink
} from '../../component-styles/navbar-styles';
import MetaMask from './metamask';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          Logo
          {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
        </NavLink>
        {/* <Bars /> */}
        <NavMenu>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/create'>
            Create
          </NavLink>
          <NavLink to='/contact-us'>
            Contact Us
          </NavLink>
          <MetaMask/>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;