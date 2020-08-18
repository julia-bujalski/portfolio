import React, { useEffect } from 'react';
import { PageHeadline, SectionTitle, BodyText, ProjectBodyText } from '../../theme';
import {
  FeaturedImage,
  FeaturedWrapper,
  ProjectPageWrapper,
  ProjectTitleWrapper,
  ProjectText,
  ProjectImagesWrapper,
  PhotoRow,
  ProjectImageB,
  ProjectSectionTitle,
  SubtitleText
} from '../Introspection/Introspection.styles';
import StarliesFeaturedImage from '../../assets/starlies.png';
import CompatibilityCalculatorPromo from '../../assets/compcalc_promo.png';
import CompatibilityCalculatorMockup from '../../assets/compatibility_calculator.png';
import MoonQuote from '../../assets/moon_quote.png';
import SignSpecificAd from '../../assets/signspecific_ad.png';
import NewsletterMockUp from '../../assets/starlies_newslettermockup.png';

import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import { PhoneScrollMockUp } from '../../components/PhoneScrollMockUp';

export const Starlies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <ProjectPageWrapper>
        <FeaturedWrapper>
          <ProjectTitleWrapper>
            <SectionTitle>Product, marketing, and UI/UX design</SectionTitle>
            <PageHeadline>Starlies</PageHeadline>
            <BodyText>Minerva Analytics <br /> January 2020 - Present</BodyText>
            <ProjectText>
              <BodyText>
                I worked on the Starlies product in varying degrees during my time at Minerva Analytics. The brand was created by another designer at the company and I supported the development through on site feature design and development, email design & code, social graphics, and user testing amounting to one of the most successful products under in Minerva's portfolio. The site experience and daily newsletter connects you with horoscopes and other astrological content such as birth charts, celebrity quotes, and moon phases. Check out the live site at <a href="https://www.starlies.com" target="_blank" rel="noopener noreferrer">starlies.com</a>.
              </BodyText>
            </ProjectText>
          </ProjectTitleWrapper>
          <FeaturedImage src={StarliesFeaturedImage} />
        </FeaturedWrapper>
        <ProjectSectionTitle>Compatibility Calculator</ProjectSectionTitle>
        <ProjectBodyText>This feature was added to Starlies in July 2020 with the goal of increasing time on site and daily active users. I was responsible for the design and development of this feature including structure and styling of the page and calling the API. <a href="https://www.starlies.com/compatibility-calculator" target="_blank" rel="noopener noreferrer"> Click the mock up to visit the site and determine your compatibility! </a>
        </ProjectBodyText>
        <a href="https://www.starlies.com/compatibility-calculator" target="_blank" rel="noopener noreferrer">
          <PhoneScrollMockUp mockup={CompatibilityCalculatorMockup} />
        </a>
        <ProjectSectionTitle>Ad Campaigns </ProjectSectionTitle>
        <PhotoRow>
          <ProjectImageB src={CompatibilityCalculatorPromo} />
          <ProjectImageB src={MoonQuote} />
          <ProjectImageB src={SignSpecificAd} />
        </PhotoRow>
        <ProjectSectionTitle>Newsletter Mockup</ProjectSectionTitle>
        <SubtitleText>Scroll through an edition of <strong>Starlies</strong></SubtitleText>
        <PhoneScrollMockUp mockup={NewsletterMockUp} />
      <ViewMoreProjects />
    </ProjectPageWrapper>
  )
}

export default Starlies;
