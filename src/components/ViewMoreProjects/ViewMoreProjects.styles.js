import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BLACK, TABLET } from '../../theme';

export const ProjectLink = styled(Link)`
  font-weight: bold;
  font-family: 'Playfair Display';
  margin-right: 40px;
  font-size: 25px;
  line-height: 1.5;
  text-decoration: none;
  transition: 500ms ease;
  color: lightgray;
  padding-bottom: 2.5px;
  position: relative;
  margin-bottom: 15px;

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
    height: 1px;
    transition-duration: 500ms;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: ${BLACK};
  }

  @media only screen and (max-width: ${TABLET}) {
    margin-right: 20px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  margin-top: 25px;
  flex-wrap: wrap;
  line-height: 3;
`;

export const ViewMoreWrapper = styled.div`
  padding-top: 100px;
`;