import styled from 'styled-components';
import { BLACK, MOBILE, TABLET } from '../../theme';

export const NavWrapper = styled.div`
  position: fixed;
  width: calc(100% - 80px);
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  text-align: left;
  padding: 25px 40px;
  font-size: 25px;
  color: ${BLACK};
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 1;

  @media only screen and (max-width: ${TABLET}) {
    padding: 20px;
  }
`;

export const NavLink = styled.a`
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding-left: 20px;
  color: ${BLACK};
  text-decoration: none;

  @media only screen and (max-width: ${TABLET}) {
    font-size: 16px;
  }

  @media only screen and (max-width: ${MOBILE}) {
    font-size: 14px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;
