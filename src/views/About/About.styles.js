import styled from 'styled-components';
import { TABLET } from '../../theme';

import { ContentWrapper, BLACK } from '../../theme';

export const Headshot = styled.img`
  width: 45%;
  margin-left: 35px;
  max-width: 450px;

  @media only screen and (max-width: ${TABLET}) {
    width: 100%;
    max-width: unset;
    margin-top: 50px;
    margin-left: 0;
  }
`;

export const AboutPageHero = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media only screen and (max-width: ${TABLET}) {
    flex-direction: column;
  }
`;

export const AboutContent = styled.div`
  max-width: 600px;

  span {
    font-weight: Bold;
  }
`;

export const AboutPageEmph = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 700;
  color: ${BLACK};
  margin-top: 25px;
`;
