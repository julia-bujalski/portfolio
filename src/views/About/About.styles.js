import styled from 'styled-components';
import { TABLET, BLACK, PageWrapper } from '../../theme';

const SINGLE_COLUMN = `600px`;

export const Headshot = styled.img`
  width: 45%;
  margin-left: 55px;
  max-width: 400px;
  object-fit: contain;
  object-position: top;
  float: right;

  @media only screen and (max-width: ${TABLET}) {
    margin-left: 30px;
  }

  @media only screen and (max-width: ${SINGLE_COLUMN}) {
    width: 100%;
    max-width: 450px;
    float: unset;
    margin: 50px auto 0 auto;
  }
`;

export const AboutPageHero = styled.div`
  width: 100%;
  padding-top: unset;
  padding-bottom: 100px;

  @media only screen and (max-width: ${SINGLE_COLUMN}) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const AboutPageEmph = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 700;
  color: ${BLACK};
  margin-top: 25px;
`;

export const AboutPageWrapper = styled(PageWrapper)`
  padding-top: 45px;
  max-width: 1000px;
  margin: 0 auto;
  width: 80%;

  @media only screen and (max-width: ${TABLET}) {
    padding-top: 45px;
  }
`
