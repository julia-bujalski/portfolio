import React from 'react';
import { LaptopContainer, SiteContainer, MockupPhoto } from './LaptopScrollMockup.styles';

export const LaptopScrollMockup = (props) => {
  return (
    <LaptopContainer>
      <SiteContainer>
        <MockupPhoto src={props.mockup} alt="Mockup Preview" />
      </SiteContainer>
    </LaptopContainer>
  )
};

export default LaptopScrollMockup;
