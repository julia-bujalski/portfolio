import styled from 'styled-components';
import { BLACK } from '../../theme';

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
`;

export const NavLink = styled.div`
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  font-weight: Semibold;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 0px 10px;
`;

export const NavLinks = styled.div`
  display: flex;
  margin-right: 25px;
`;
