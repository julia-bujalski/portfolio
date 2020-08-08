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
`;
