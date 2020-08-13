import React from 'react';
import NewsletterMockUp from '../../assets/mockup.png';
import { PhoneContainer, NewsletterContainer, NewsletterPhoto } from './PhoneScrollMockUp.styles';

export const PhoneScrollMockUp = () => {
  return (
    <PhoneContainer>
      <NewsletterContainer>
        <NewsletterPhoto src={NewsletterMockUp} alt="Newsletter Preview" />
      </NewsletterContainer>
    </PhoneContainer>
  )
};

export default PhoneScrollMockUp;
