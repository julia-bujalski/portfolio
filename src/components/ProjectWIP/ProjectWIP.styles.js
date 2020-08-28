import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BLACK } from '../../theme';

export const BackLink = styled(Link)`
  margin-top: 25px;
  font-family: 'Playfair Display';
  font-size: 24px;
  font-weight: 700;
  color: ${BLACK};
  padding-top: 25px;
  text-decoration: none;
  position: relative;

  &::after {
    content: '.';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 0%;
    color: transparent;
    background: ${BLACK};
    height: 1.5px;
    transition-duration: 500ms;
  }

  &:hover::after {
    width: 100%;
  }
`;
