import React from 'react';
import { PhoneContainer, NewsletterContainer, NewsletterPhoto } from './PhoneScrollMockUp.styles';

export const PhoneScrollMockUp = (props) => {
  return (
    <PhoneContainer>
      <NewsletterContainer>
        <NewsletterPhoto src={props.mockup} alt="Newsletter Preview" />
      </NewsletterContainer>
    </PhoneContainer>
  )
};

export default PhoneScrollMockUp;
