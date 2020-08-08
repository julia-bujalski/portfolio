import styled from 'styled-components';
import { BLACK, MOBILE, TABLET } from '../../theme';

export const NavWrapper = styled.div`
  position: fixed;
  width: 100%;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  text-align: left;
  padding: 25px;
  font-size: 25px;
  color: ${BLACK};
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  @media only screen and (max-width: ${TABLET}) {
    padding: 20px;
  }
`;

export const NavLink = styled.div`
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding-left: 20px;

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
