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

  &:hover {
    transform: scale(1.025);
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
`;

export const ViewMoreWrapper = styled.div`
  padding-top: 100px;
`;