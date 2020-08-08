import styled from 'styled-components';
import HeroBackground from '../../assets/hero_bg.png'
import { BLACK, MOBILE, TABLET } from '../../theme';

export const HeroTitle = styled.h1`
  font-family: 'Playfair Display';
  font-size: 58px;
  line-height: 1.5;
  margin: 0;
  color: ${BLACK};
  font-weight: 800;

  @media only screen and (max-width: ${TABLET}) {
    font-size: 36px;
  }

  @media only screeen and (max-width: ${MOBILE}) {
    font-size: 24px;
  }
`;

export const HeroSubtitle = styled.div`
  color: ${BLACK};
  font-family: 'Open Sans';
  font-weight: Light;
  letter-spacing: 1px;
  line-height: 1.5;
  font-size: 20px;
  padding-top: 25px;

  @media only screen and (max-width: ${MOBILE}) {
    font-size: 18px;
  }
`;

export const HeroWrapper = styled.div`
  min-height: 100vh;
  background: url(${HeroBackground}) no-repeat top;
  background-size: cover;
  background-blend-mode: lighten;
  display: flex;
  align-items: center;
`;

export const PageContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;

  @media only screen and (max-width: ${TABLET}) {
    width: 90%;
  }
`;