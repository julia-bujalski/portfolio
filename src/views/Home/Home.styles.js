import styled from 'styled-components';
import HeroBackground from '../../assets/hero_bg.png';
import { BLACK, MOBILE, TABLET, ContentWrapper, BodyText } from '../../theme';

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

export const HomeText = styled(BodyText)`
  letter-spacing: 1px;
  line-height: 1.5;
  font-size: 18px;
  max-width: 600px;
  text-align: left;

  @media only screen and (max-width: 450px) {
    text-align: center;
  }
`;

export const HeroWrapper = styled.div`
  min-height: 70vh;
  background: url(${HeroBackground}) no-repeat top;
  background-size: cover;
  background-blend-mode: lighten;
  display: flex;
  align-items: center;
  border: solid 1px rgba(45,52,53,.1);

  @media only screen and (max-width: 450px) {
    min-height: 100vh;
    text-align: center;
  }
`;

export const HeroContentWrapper = styled(ContentWrapper)`
  margin-top: 0;

  @media only screen and (max-width: ${MOBILE}) {
    width: 90%;
  }
`;

export const ProjectsGrid = styled.div`
  display: flex;
  margin: 0px auto 50px auto;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 40px;

  @media screen and (max-width: 620px) {
    display: block;
    padding-top: 30px;
  }
`;
