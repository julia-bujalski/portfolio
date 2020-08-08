import React from 'react';
import Resume from '../../assets/resume.png';
import { SectionTitle } from '../../theme';
import { HomeText } from '../../views/Home/Home.styles'
import {
  ContactWrapper,
  ContactInfo,
  ContactEmph,
  ResumeWrapper,
  ResumeText,
  ResumeLink,
  ResumePreview,
} from './Contact.styles';

export const Contact = () => {
  return (
    <ContactWrapper>
      <div>
        <SectionTitle id="contact">Get in touch</SectionTitle>
        <HomeText>
          I’m available for freelance projects! So hit me up if you want to talk design, Taylor Swift, or eat some won ton soup.
        </HomeText>
        <ContactInfo>
          <ContactEmph>
            julia.bujalski@gmail.com
          </ContactEmph>
          <br />
          <ContactEmph href="https://www.linkedin.com/in/juliabujalski/">
            linkedin.
          </ContactEmph>
        </ContactInfo>
      </div>
      <ResumeWrapper>
        <ResumeText>
          Click here to view my resume
        </ResumeText>
        <ResumeLink href={Resume} target="_blank">
          <ResumePreview src={Resume} />
        </ResumeLink>
      </ResumeWrapper>
    </ContactWrapper>
  )
}

export default Contact;
