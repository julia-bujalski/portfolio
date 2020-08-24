import styled from 'styled-components';
import { MOBILE } from '../../theme';

export const StyleGuide = styled.img`
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  display: block;
  box-shadow: 1px -1px 8px 4px rgba(0,0,0,.09);

  @media only screen and (max-width: ${MOBILE}) {
    width: 100%;
  }
`;