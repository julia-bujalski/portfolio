import React, { useEffect } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { PageHeadline, SectionTitle, BodyText, PageTransition } from '../../theme';
import {
  FeaturedImage,
  FeaturedWrapper,
  ProjectPageWrapper,
  ProjectTitleWrapper,
  ProjectText,
  ProjectImage,
  ProjectSectionTitle,
  ChallengeSolutionWrapper,
  JourneyText,
  MockupWrapper,
  SubtitleText,
  ProjectImageC,
} from '../projectpage_theme.js';
import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import { StyleGuide, FacebookPhotoRow } from './BackThenHistory.styles';
import ScreensMockup from '../../assets/bth/bth.png';
import StarterStyleGude from '../../assets/bth/starter_styleguide.png';
import ResponsiveMockup from '../../assets/bth/responsive_mockup.png';
import ObjectsFacebook from '../../assets/bth/objects_fb.png';
import ChartsFacebook from '../../assets/bth/charts_fb.png';
import OnThisDayFacebook from '../../assets/bth/onthisday_fb.png';
import StrangePhotosFacebook from '../../assets/bth/strangephotos_fb.png';

const RedBackground = `#F7DEDF`;

export const BackThenHistory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TransitionGroup appear exit={false}>
      <Transition>
      {(state) => {
        return (
          <PageTransition state={state}>
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
              At Minerva Analytics, I work closesly with analysts to test digital media products within identified high value and high growth markets. With this effort, History was the identified market and we wanted to rapidly test 5 different types of history content to determine user interest before investing too much design, engineering, or product efforts. The goal was to create a brand and styling system that could be applied to 3 different names and history content types easily and efficiently. 
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
                  Pull branding inspiration from other web products in the history market while creating a fresh, memorable vibe. Focus on the general idea of history with small glimpses into the product description and tagline but still general for the ability to pivot if product failure.
                </BodyText>
              </JourneyText>
            </ChallengeSolutionWrapper>
            <MockupWrapper backgroundColor={RedBackground}>
              <StyleGuide src={StarterStyleGude} />
            </MockupWrapper>
            <ProjectSectionTitle>Site design</ProjectSectionTitle>
            <ChallengeSolutionWrapper>
              <JourneyText>
                <SectionTitle>Challenge</SectionTitle>
                <BodyText>
                  How do we entice users to sign up for something that doesn't exist? How do we create a site design with minimal variables based on the different content types? How do we do this as fast as possible?
                </BodyText>
              </JourneyText>
              <JourneyText>
                <SectionTitle>Solution</SectionTitle>
                <BodyText>
                  Use language that connects with excited anticipation, show a potential mock up of the newsletter while keeping it general enough to pivot in both design and content, work with engineers to ensure that the design is straight forward and easy to develop.
                </BodyText>
              </JourneyText>
            </ChallengeSolutionWrapper>
            <SubtitleText>This is the mock up for the history content for "History of Everyday Objects" - the other 4 sites varied in phone mock up and product description.
            </SubtitleText>
            <MockupWrapper backgroundColor={RedBackground}>
              <ProjectImage src={ResponsiveMockup} />
            </MockupWrapper>
            <ProjectSectionTitle>Paid social creatives</ProjectSectionTitle>
            <ChallengeSolutionWrapper>
              <JourneyText>
                <SectionTitle>Challenge</SectionTitle>
                <BodyText>
                  How do we drive traffic to a site that has no content? What channels do we have access to that will let us target users that we know are interested in the history market? What language and graphics can we use to entice users?
                </BodyText>
              </JourneyText>
              <JourneyText>
                <SectionTitle>Solution</SectionTitle>
                <BodyText>
                  Use paid Facebook marketing, a very familiar user acquisition channel at Minerva. Use punchy language that gives a clear view as to what the product could be. Utilize similar graphics that are on the site to expedite the process and small variations based on content type.
                </BodyText>
              </JourneyText>
            </ChallengeSolutionWrapper>
            <MockupWrapper backgroundColor={RedBackground}>
              <FacebookPhotoRow>
                <ProjectImageC src={ObjectsFacebook} />
                <ProjectImageC src={ChartsFacebook} />
                <ProjectImageC src={StrangePhotosFacebook} />
                <ProjectImageC src={OnThisDayFacebook} />
              </FacebookPhotoRow>
            </MockupWrapper>
            <ViewMoreProjects />
          </ProjectPageWrapper>
          </PageTransition>
          )
      }}
    </Transition>
  </TransitionGroup>
  )
}

export default BackThenHistory;