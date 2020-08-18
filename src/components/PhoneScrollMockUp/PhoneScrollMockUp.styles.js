import styled from 'styled-components';
import PhoneMockup from '../../assets/mockup_phone.png';
import { MOBILE } from '../../theme';

const DESKTOP = `1150px`;
const SMALL_DESKTOP = `950px`;

export const PhoneContainer = styled.div`
  background: url(${PhoneMockup}) no-repeat top;
  background-size: contain;
  width: 200px;
  height: 400px; 
  position: relative;
  display: flex;
  justify-content: center;
  margin: 35px auto 0px auto;


  @media (max-width: 950px) {
    margin-bottom: 4rem;
  }

  ${(props) => (props.row ?

  `@media (max-width: ${DESKTOP}) {
    width: 125px;
    height: 250px;
  }

  @media (max-width: ${SMALL_DESKTOP}) {
    width: 100px;
    height: 200px;
  }

  @media (max-width: ${MOBILE}) {
    width: 200px;
    height: 400px; 
  }` : null )}

`;

export const NewsletterContainer = styled.div`
  height: 83%;
  width: 83%;
  margin-left: 2px;
  overflow: scroll;
  position: absolute;
  top: 10%;
`;

export const NewsletterPhoto = styled.img`
  margin: 0 auto;
  display: block;
  width: 100%;
`;
