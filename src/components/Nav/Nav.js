import React from 'react';
import {
  NavWrapper,
  NavLink,
  NavLinks,
  HomeLink,
  AnchorLink,
} from './Nav.styles';

export const Nav = () => {
  return (
    <NavWrapper>
      <HomeLink to="/">
        buj
      </HomeLink>
      <NavLinks>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/allwork">work</NavLink>
        <AnchorLink href="/#contact">contact</AnchorLink>
      </NavLinks>
    </NavWrapper>
  )
}

export default Nav;
