import React from 'react';
import { PhoneContainer, NewsletterContainer, NewsletterPhoto } from './PhoneScrollMockUp.styles';

export const PhoneScrollMockUp = (props) => {
  return (
    <PhoneContainer row={props.row}>
      <NewsletterContainer>
        <NewsletterPhoto src={props.mockup} alt="Newsletter Preview" />
      </NewsletterContainer>
    </PhoneContainer>
  )
};

export default PhoneScrollMockUp;
