import React from 'react';
import {
  NavWrapper,
  NavLink,
  NavLinks
} from './Nav.styles';

export const Nav = () => {
  return (
    <NavWrapper>
      buj
      <NavLinks>
        <NavLink>about me</NavLink>
        <NavLink>work</NavLink>
        <NavLink>contact</NavLink>
      </NavLinks>
    </NavWrapper>
  )
}

export default Nav;
