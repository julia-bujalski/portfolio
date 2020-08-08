import styled from 'styled-components';

import { ContentWrapper, BLACK } from '../../theme';

export const Headshot = styled.img`
  width: 45%;
  margin-left: 35px;
  max-width: 450px;
`;

export const AboutPageHero = styled.div`
  display: flex;
  justify-content: space-between;
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
