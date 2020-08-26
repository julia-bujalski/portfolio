import styled from 'styled-components';
import { TABLET, MOBILE, BLACK, ContentWrapper, BodyText } from '../../theme';

export const SlideshowImage = styled.img`
  height: 80vh;
  width: 100%;
  object-fit: cover;
  opacity: 1;

  @media only screen and (max-width: ${TABLET}) {
    height: 35vh;
  }

  @media only screen and (max-width: ${MOBILE}) {
    height: 55vh;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;

  @media only screen and (max-width: ${MOBILE}) {
    flex-direction: column-reverse;
  }
`;

export const HeroContentWrapper = styled(ContentWrapper)`
  margin-top: 0;
  width: 80%;
  max-width: 450px;
  margin-bottom: 40px;
  padding: 0px 40px;

  @media only screen and (max-width: ${MOBILE}) {
    width: 90%;
    padding: unset;
    max-width: unset;
  }
`;

export const SlideshowWrapper = styled.div`
  position: relative;
  width: 65%;

  @media only screen and (max-width: ${TABLET}) {
    width: 50%;
  }

  @media only screen and (max-width: ${MOBILE}) {
    width: 100%;
    margin-top: unset;
  }

  .react-slideshow-container+div.indicators {
    justify-content: flex-end;
    margin-right: 25px;

     @media only screen and (max-width: ${MOBILE}) {
      justify-content: flex-start;
      width: 90%;
      margin: 25px auto 25px auto;
     }
  }
`;

export const HeroText = styled(BodyText)`
  letter-spacing: 1px;
  line-height: 1.5;
  font-size: 18px;
  max-width: 600px;
  text-align: left;

  @media only screen and (max-width: 450px) {
    text-align: center;
  }
`;

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
