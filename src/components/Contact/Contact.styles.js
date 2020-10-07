import styled from 'styled-components';
import { BLACK } from '../../theme';

const CONTACT_TWO_COLUMN = `800px`;

export const ContactEmph = styled.a`
  font-family: 'Playfair Display', serif;
  color: ${BLACK};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.75;
  position: relative;
  padding-bottom: 2.5px;
  text-decoration: none;

  &::after {
    content: '.';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 0%;
    color: transparent;
    background: ${BLACK};
    height: 2px;
    transition-duration: 500ms;
  }

  &:hover::after {
    width: 100%;
  }
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

  @media only screen and (max-width: 950px) {
    width: 250px;
    height: auto;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: top;
  flex-direction: row;
  width: 100%;

  @media only screen and (max-width: ${CONTACT_TWO_COLUMN}) {
    flex-direction: column;
  }
`;

export const ResumeWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-left: 30px;

  @media only screen and (max-width: ${CONTACT_TWO_COLUMN}) {
    margin-left: 0px;
  }
`;

export const ResumeLink = styled.a`
`;

export const InfoWrapper = styled.div`
  max-width: 650px;
`;
