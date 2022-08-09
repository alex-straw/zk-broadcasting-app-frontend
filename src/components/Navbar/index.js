import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  // NavBtn,
  // NavBtnLink
} from '../../component-styles/navbar-styles';

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
          {/* <NavLink to='/sign-up'>
            Sign Up
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;