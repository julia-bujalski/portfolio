import React, { useEffect } from 'react';
import { PageHeadline, SectionTitle, BodyText } from '../../theme';
import {
  FeaturedImage,
  FeaturedWrapper,
  ProjectPageWrapper,
  ProjectTitleWrapper,
  PhotoRow,
  ProjectImageB,
  ProjectSectionTitle,
  SubtitleText,
  MockupWrapper,
  ChallengeSolutionWrapper,
  JourneyText,
} from '../projectpage_theme.js';
import QuickscopeArticleA from '../../assets/quickscope/quickscope_articleA.png';
import QuickscopeArticleB from '../../assets/quickscope/quickscope_articleB.png';
import QuickscopeFacebook from '../../assets/quickscope/quickscope_facebook.png';
import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import NewsletterMockUp from '../../assets/mockup.png';
import { PhoneScrollMockUp } from '../../components/PhoneScrollMockUp';
import ScreensMockup from '../../assets/quickscope/quickscope_screens_mockup.png';

const GreenBackground = `#D5FCE2`;

export const Quickscope = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <FeaturedWrapper backgroundColor={GreenBackground}>
        <ProjectTitleWrapper>
          <SectionTitle>Email design & front end development</SectionTitle>
          <PageHeadline>Quickscope</PageHeadline>
          <BodyText>Minerva Analytics <br /> January 2020 - Present</BodyText>
          <BodyText>A daily gaming newsletter.</BodyText>
        </ProjectTitleWrapper>
        <FeaturedImage src={ScreensMockup} />
        </FeaturedWrapper>
      <ProjectPageWrapper>
        <ProjectSectionTitle>Introduction</ProjectSectionTitle>
        <BodyText>
              I supported Quickscope, the daily video gaming newsletter, as a designer at Minerva Analytics. I created the email design, social graphics, and helped support development of the site with ReactJS styled components. Check out the live site at <a href="https://thequickscope.com" target="_blank" rel="noopener noreferrer">thequickscope.com</a>
            </BodyText>
        <ProjectSectionTitle>Newsletter Design</ProjectSectionTitle>
        <ChallengeSolutionWrapper>
          <JourneyText>
            <SectionTitle>Challenge</SectionTitle>
            <BodyText>
              The current newsletter is difficult to read, does not feel editorial, and doesn't feel cohesive with the current site branding.
            </BodyText>
          </JourneyText>
          <JourneyText>
            <SectionTitle>Solution</SectionTitle>
            <BodyText>
              Restructure the newsletter to go in order of interest based on user surveys and reduce decorative visual elements to help users digest their daily gaming news more easily and efficiently.
            </BodyText>
          </JourneyText>
        </ChallengeSolutionWrapper>
        <SubtitleText>Scroll through an issue of <strong>Quickscope</strong></SubtitleText>
        <MockupWrapper backgroundColor={GreenBackground}>
          <PhoneScrollMockUp mockup={NewsletterMockUp} />
        </MockupWrapper>
        <ProjectSectionTitle>Ad Campaigns</ProjectSectionTitle>
        <PhotoRow>
          <ProjectImageB src={QuickscopeArticleA} />
          <ProjectImageB src={QuickscopeArticleB} />
          <ProjectImageB src={QuickscopeFacebook} />
        </PhotoRow>
      <ViewMoreProjects />
    </ProjectPageWrapper>
    </>
  )
}

export default Quickscope;
