import styled from 'styled-components';
import { BLACK, BodyText } from '../../theme';

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
