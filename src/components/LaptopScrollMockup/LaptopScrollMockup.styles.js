import styled from 'styled-components';
import LaptopMockup from '../../assets/mockup_laptop.png';
import { MOBILE } from '../../theme';

const DESKTOP = `1150px`
const SMALL_DESKTOP = `950px`;

export const LaptopContainer = styled.div`
  background: url(${LaptopMockup}) no-repeat top;
  background-size: contain;
  width: 650px;
  height: 450px; 
  position: relative;
  display: flex;
  justify-content: center;
  margin: 35px auto 0px auto;


  @media (max-width: 950px) {
    margin-bottom: 4rem;
  }

  @media (max-width: ${DESKTOP}) {
    width: 550px;
    height: 350px;
  }

  @media (max-width: ${SMALL_DESKTOP}) {
    width: 340px;
    height: 200px;
  }

  @media (max-width: ${MOBILE}) {
    width: 300px;
    height: 170px;
  }

`;

export const SiteContainer = styled.div`
  height: 71%;
  width: 76%;
  overflow: scroll;
  position: absolute;
  top: 5%;

  @media (max-width: ${SMALL_DESKTOP}) {
    width: 76%;
    height: 81%;
  }

  @media (max-width: ${MOBILE}) {
    width: 73%;
  }
`;

export const MockupPhoto = styled.img`
  margin: 0 auto;
  display: block;
  width: 100%;
  border-radius: 5px;
`;
