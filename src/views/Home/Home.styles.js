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
  text-align: left;

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
`;

export const HeroWrapper = styled.div`
  min-height: 70vh;
  background: url(${HeroBackground}) no-repeat top;
  background-size: cover;
  background-blend-mode: lighten;
  display: flex;
  align-items: center;
  border: solid 1px rgba(45,52,53,.1);
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

export const ContactEmph = styled.a`
  font-family: 'Playfair Display', serif;
  color: ${BLACK};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.75;
`;

export const ContactInfo = styled.div`
  padding-top: 25px;
`;

export const ResumePreview = styled.img`
  width: 300px;
  height: auto;
  border: solid 1px rgba(45,52,53,.1);
  transition: 500ms ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
  flex-direction: row;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ResumeWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-left: 30px;
`;

export const ResumeText = styled(BodyText)`
  text-align: center;
  font-size: 14px;
  padding-bottom: 15px;
`;

export const ResumeLink = styled.a`
`;
