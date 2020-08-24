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
  ProjectImage,
  ProjectSectionTitle,
  ChallengeSolutionWrapper,
  JourneyText,
  MockupWrapper
} from '../projectpage_theme.js';
import { StyleGuide } from './BackThenHistory.styles';
import ScreensMockup from '../../assets/bth/bth.png';
import StarterStyleGude from '../../assets/bth/starter_styleguide.png';

const RedBackground = `#F7DEDF`;

export const BackThenHistory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <FeaturedWrapper backgroundColor={RedBackground}>
        <ProjectTitleWrapper>
          <SectionTitle>Branding, site, marketing, & email design</SectionTitle>
          <PageHeadline>Back Then History</PageHeadline>
          <BodyText>Minerva Analytics <br />August 2020</BodyText>
          <ProjectText>
            <BodyText>
              An unusual history newsletter test site.
            </BodyText>
          </ProjectText>
        </ProjectTitleWrapper>
        <FeaturedImage src={ScreensMockup} />
      </FeaturedWrapper>
      <ProjectPageWrapper>
        <ProjectSectionTitle>Introduction</ProjectSectionTitle>
        <BodyText>
          At Minerva Analytics, I worked closesly with analysts to test media products within identified high value and high growth markets. With this product, History was the identified market and we wanted to test rapidly test 3 types of history content to determine user interest before investing too much design, engineering, or product efforts.
        </BodyText>
        <ProjectSectionTitle>
          Branding
        </ProjectSectionTitle>
        <ChallengeSolutionWrapper>
          <JourneyText>
            <SectionTitle>Challenge</SectionTitle>
            <BodyText>
              How can we create a brand that is applicable to almost any content within the history market? How can we create a site that is engaging without a clear understanding of what the product will be yet?
            </BodyText>
          </JourneyText>
          <JourneyText>
            <SectionTitle>Solution</SectionTitle>
            <BodyText>
              Pull branding inspiration from other web products in the history market while creating a fresh, memorable vibe. Focus on the general idea of "history of everyday objects" with small glimpses into content but still general for the ability to pivot if product failure.
            </BodyText>
          </JourneyText>
        </ChallengeSolutionWrapper>
        <MockupWrapper backgroundColor={RedBackground}>
          <StyleGuide src={StarterStyleGude} />
        </MockupWrapper>
      </ProjectPageWrapper>
    </>
  )
}

export default BackThenHistory;