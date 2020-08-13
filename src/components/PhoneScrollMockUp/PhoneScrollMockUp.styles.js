import styled from 'styled-components';
import PhoneMockup from '../../assets/mockup_phone.png';

export const PhoneContainer = styled.div`
  background: url(${PhoneMockup}) no-repeat top;
  background-size: contain;
  width: 300px;
  height: 600px; 
  position: relative;
  display: flex;
  justify-content: center;
  margin: 35px auto 0px auto;


  @media (max-width: 950px) {
    margin-bottom: 4rem;
  }

`;

export const NewsletterContainer = styled.div`
  height: 79%;
  width: 83%;
  margin-left: 2px;
  overflow: scroll;
  position: absolute;
  border-radius: 0px 20px 20px 0px;
  top: 13%;
`;

export const NewsletterPhoto = styled.img`
  margin: 0 auto;
  display: block;
  width: 100%;
`;
