import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BLACK } from '../../theme';

export const ProjectsGrid = styled.div`
  display: flex;
  margin: 0px auto 0px auto;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 15px;

  @media screen and (max-width: 620px) {
    display: block;
    padding-top: 30px;
  }
`;

export const FurtherWorkLink = styled(Link)`
  text-decoration: none;
  position: relative;
  padding-bottom: 2.5px;

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
    height: 1.25px;
    transition-duration: 500ms;
  }

  &:hover::after {
    width: 100%;
  }
`;
