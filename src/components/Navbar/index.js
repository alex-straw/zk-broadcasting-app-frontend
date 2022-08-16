import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu
} from '../../component-styles/navbar-styles';
import MetaMask from './metamask';
import {Image} from "../../component-styles/generic-styles"
import logo from '../../images/logo.PNG'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <Image src={logo} alt='logo' />
        </NavLink>
        {/* <Bars /> */}
        <NavMenu>
          <NavLink to='/create'>
            Create
          </NavLink>
          <NavLink to='/verify-identity'>
            Verify Identity
          </NavLink>
          <NavLink to='/broadcast'>
            Broadcast
          </NavLink>
          <MetaMask/>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;