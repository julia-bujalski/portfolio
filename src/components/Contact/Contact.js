import React from 'react';
import Resume from '../../assets/resume.png';
import { SectionTitle, BodyText } from '../../theme';
import {
  ContactWrapper,
  ContactInfo,
  ContactEmph,
  ResumeWrapper,
  ResumeLink,
  ResumePreview,
  InfoWrapper,
} from './Contact.styles';

export const Contact = () => {
  return (
    <ContactWrapper>
      <InfoWrapper>
        <SectionTitle id="contact">Get in touch</SectionTitle>
        <BodyText>
          I’m available for freelance projects! So hit me up if you want to talk design, Taylor Swift, or eat some won ton soup.
        </BodyText>
        <ContactInfo>
          <ContactEmph href="mailto:julia.bujalski@gmail.com">
            julia.bujalski@gmail.com
          </ContactEmph>
          <br />
          <ContactEmph href="https://www.linkedin.com/in/juliabujalski/" target="_blank">
            linkedin.
          </ContactEmph>
        </ContactInfo>
      </InfoWrapper>
      <ResumeWrapper>
        <ResumeLink href={Resume} target="_blank">
          <ResumePreview src={Resume} />
        </ResumeLink>
      </ResumeWrapper>
    </ContactWrapper>
  )
}

export default Contact;
