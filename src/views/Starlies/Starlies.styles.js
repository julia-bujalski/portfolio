import styled from 'styled-components';
import { ProjectImageC } from '../projectpage_theme.js';
import { MOBILE } from '../../theme.js';

export const NavMockupImageLeft = styled(ProjectImageC)`
  width: 70%;
  box-shadow: 0px 2px 11px -2px rgba(0,0,0,.15);

  @media only screen and (max-width: ${MOBILE}) {
    width: 100%;
  }
`;

export const NavMockupImageRight = styled(NavMockupImageLeft)`
  width: 20%;

  @media only screen and (max-width: ${MOBILE}) {
    width: 100%;
  }
`;

export const ConfirmationFunnelWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;

  @media only screen and (max-width: ${MOBILE}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SignUpModalMockup = styled.img`
  max-width: 300px;
  width: 45%;

  @media only screen and (max-width: ${MOBILE}) {
    width: 90%;
  }
`;
