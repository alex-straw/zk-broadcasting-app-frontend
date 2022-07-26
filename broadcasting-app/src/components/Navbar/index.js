import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavbarElements";

export const Navbar = () => {
  return (
    <>
    <Nav>
      <NavLink to="/">
        <h1> Logo </h1>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        <NavLink to="/connect-wallet" activeStyle>
          Connect Wallet
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/connect">Connect</NavBtnLink>
      </NavBtn>
    </Nav>
    </>
  )
}

export default Navbar