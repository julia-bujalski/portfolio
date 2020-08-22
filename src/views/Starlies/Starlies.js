import React, { useEffect } from 'react';
import { PageHeadline, SectionTitle, BodyText } from '../../theme';
import {
  FeaturedImage,
  FeaturedWrapper,
  ProjectPageWrapper,
  ProjectTitleWrapper,
  ProjectText,
  PhotoRow,
  ProjectImageB,
  ProjectSectionTitle,
  SubtitleText,
  MockupWrapper,
  ChallengeSolutionWrapper,
  JourneyText
} from '../projectpage_theme.js';
import CompatibilityCalculatorPromo from '../../assets/starlies/compcalc_promo.png';
import CompatibilityCalculatorMockup from '../../assets/starlies/compatibility_calculator.png';
import MoonQuote from '../../assets/starlies/moon_quote.png';
import SignSpecificAd from '../../assets/starlies/signspecific_ad.png';
import NewsletterMockUp from '../../assets/starlies/starlies_newslettermockup.png';
import ScreensMockup from '../../assets/starlies/starlies_screens_mockup.png';

import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import { PhoneScrollMockUp } from '../../components/PhoneScrollMockUp';

const YellowBackground="#FFF7BF";

export const Starlies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <FeaturedWrapper backgroundColor={YellowBackground}>
          <ProjectTitleWrapper>
            <SectionTitle>Product, marketing, and UI/UX design</SectionTitle>
            <PageHeadline>Starlies</PageHeadline>
            <BodyText>Minerva Analytics <br /> January 2020 - Present</BodyText>
            <ProjectText>
              <BodyText>
                A horoscope and astrology website.
              </BodyText>
            </ProjectText>
          </ProjectTitleWrapper>
          <FeaturedImage src={ScreensMockup} />
        </FeaturedWrapper>
        <ProjectPageWrapper>
        <ProjectSectionTitle>Introduction</ProjectSectionTitle>
        <BodyText>
          I worked on the Starlies product in varying degrees during my time at Minerva Analytics. The brand was created by another designer at the company and I supported the development through on site feature design and development, email design & code, social graphics, and user testing amounting to one of the most successful products under in Minerva's media portfolio. The site experience and daily newsletter connects you with horoscopes and other astrological content such as birth charts, celebrity quotes, and moon phases. Check out the live site at <a href="https://www.starlies.com" target="_blank" rel="noopener noreferrer">starlies.com</a>.
        </BodyText>
        <ProjectSectionTitle>Compatibility Calculator</ProjectSectionTitle>
        <ChallengeSolutionWrapper>
          <JourneyText>
            <SectionTitle>Challenge</SectionTitle>
            <BodyText>
              How can we get users to stay on site for longer than the, on avergae, 65 seconds it takes for them to read their horoscope? How can we increase organic traffic?
            </BodyText>
          </JourneyText>
          <JourneyText>
            <SectionTitle>Solution</SectionTitle>
            <BodyText>
              Add a feature that encourages user interaction beyond readingg text. Tap into keyword rich features and with the help of SEM analysts.
            </BodyText>
          </JourneyText>
        </ChallengeSolutionWrapper>
        <MockupWrapper backgroundColor={YellowBackground}>
          <a href="https://www.starlies.com/compatibility-calculator" target="_blank" rel="noopener noreferrer">
            <PhoneScrollMockUp mockup={CompatibilityCalculatorMockup} />
          </a>
        </MockupWrapper>
        <BodyText>This feature was added to Starlies in July 2020 with the goal of increasing time on site and daily active users. I was responsible for the design and development of this feature including structure and styling of the page and calling the API. <a href="https://www.starlies.com/compatibility-calculator" target="_blank" rel="noopener noreferrer"> Click the mock up to visit the site and determine your compatibility! </a>
        </BodyText>
        <ProjectSectionTitle>Ad Campaigns </ProjectSectionTitle>
        <PhotoRow>
          <ProjectImageB src={CompatibilityCalculatorPromo} />
          <ProjectImageB src={MoonQuote} />
          <ProjectImageB src={SignSpecificAd} />
        </PhotoRow>
        <ProjectSectionTitle>Newsletter Mockup</ProjectSectionTitle>
        <SubtitleText>Scroll through an edition of <strong>Starlies</strong></SubtitleText>
        <MockupWrapper backgroundColor={YellowBackground}>
          <PhoneScrollMockUp mockup={NewsletterMockUp} />
        </MockupWrapper>
      <ViewMoreProjects />
    </ProjectPageWrapper>
    </>
  )
}

export default Starlies;
