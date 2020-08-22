import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BLACK, MOBILE, TABLET } from '../../theme';

export const NavWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
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

  @media only screen and (max-width: 600px) {
  }

  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const AnchorLink = styled.a`
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-left: 20px;
  color: ${BLACK};
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    color: #5e478c;
    font-weight: 700;
  }

  @media only screen and (max-width: ${TABLET}) {
    font-size: 16px;
  }

  @media only screen and (max-width: ${MOBILE}) {
    font-size: 14px;
  }
`;

export const NavLink = styled(Link)`
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding-left: 20px;
  color: ${BLACK};
  text-decoration: none;

  &:hover {
    color: #5e478c;
    font-weight: 700;
  }

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

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: ${BLACK};
  transition: 500ms ease;

  &:hover {
    transform: scale(1.015);
  }

`;
