import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Transition, TransitionGroup } from 'react-transition-group';
import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import { PageHeadline, SectionTitle, BodyText, PageTransition } from '../../theme';
import { PhoneScrollMockUp } from '../../components/PhoneScrollMockUp';
import { LaptopScrollMockup } from '../../components/LaptopScrollMockup';
import {
  FeaturedImage,
  FeaturedWrapper,
  ProjectPageWrapper,
  ProjectTitleWrapper,
  PhotoRow,
  ProjectImageC,
  ProjectSectionTitle,
  SubtitleText,
  MockupWrapper,
  ChallengeSolutionWrapper,
  JourneyText,
  ProjectImage,
} from '../projectpage_theme.js';
import HausilyStyleGuide from '../../assets/hausily/hausily_styleguide.png';
import HausilyStyleGuide2 from '../../assets/hausily/hausily_styleguide2.png';
import ScreensMockup from '../../assets/hausily/hausily_screens_mockup.png';
import DesktopMockup from '../../assets/hausily/mockup_desktop.png';
import MobileMockup from '../../assets/hausily/mockup_mobile.png';
import Wireframes from '../../assets/hausily/wireframes.png';
import SiteMap from '../../assets/hausily/site_map.png';

const BlueBackground = `#d6edf7`;

const ProcessImage = styled(ProjectImage)`
  max-height: unset;
  width: 90%;
  margin: 0 auto;
  display: block;
  padding-bottom: 30px;
`;

export const Hausily = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TransitionGroup appear exit={false}>
      <Transition>
      {(state) => {
        return (
          <PageTransition state={state}>
            <FeaturedWrapper backgroundColor={BlueBackground}>
              <ProjectTitleWrapper>
                <SectionTitle>Branding & UI/UX</SectionTitle>
                <PageHeadline>Hausily</PageHeadline>
                <BodyText>Cogo Labs <br /> Sept 2018 - Nov 2018</BodyText>
                <BodyText>A homeowners start up site.</BodyText>
              </ProjectTitleWrapper>
              <FeaturedImage src={ScreensMockup} />
            </FeaturedWrapper>
            <ProjectPageWrapper>
            <ProjectSectionTitle>Introduction</ProjectSectionTitle>
            <BodyText>
                As a designer on Cogo's Web Team, I worked as a resource for the rest of the company, including the small incubating start ups that do not have their own designer. I was tasked with creating the branding and site design for Hausily, the early stage start up. The site's goal was to hire data-driven individuals that are interested in creating a web product in the home owner market. Visit <a href="http://www.hausily.com" target="_blank" rel="noopener noreferrer">hausily.com</a> to view the live site.
              </BodyText>
            <ProjectSectionTitle>Process</ProjectSectionTitle>
            <ChallengeSolutionWrapper>
                <JourneyText>
                  <SectionTitle>Challenge</SectionTitle>
                  <BodyText>
                    Hausily is an early stage start up with a broad product plan that needs to recruit valuable analytics and engineering talent to join their team.
                  </BodyText>
                </JourneyText>
                <JourneyText>
                  <SectionTitle>Solution</SectionTitle>
                  <BodyText>
                    Design a site that focuses on the exploratory aspects of start up development, the available user data, and open positions.
                  </BodyText>
                </JourneyText>
              </ChallengeSolutionWrapper>
              <MockupWrapper backgroundColor={BlueBackground}>
              <ProcessImage src={Wireframes} />
              <ProcessImage src={SiteMap} />
            </MockupWrapper>
            <ProjectSectionTitle>Style guide</ProjectSectionTitle>
            <MockupWrapper backgroundColor={BlueBackground}>
              <PhotoRow>
                <ProjectImageC src={HausilyStyleGuide} />
                <ProjectImageC src={HausilyStyleGuide2} />
              </PhotoRow>
            </MockupWrapper>
            <ProjectSectionTitle>Final Site Designs </ProjectSectionTitle>
            <SubtitleText>Scroll through mock ups of the Hausily site</SubtitleText>
            <MockupWrapper backgroundColor={BlueBackground}>
              <PhotoRow>
                <PhoneScrollMockUp row mockup={MobileMockup} />
                <LaptopScrollMockup mockup={DesktopMockup} />
              </PhotoRow>
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

export default Hausily;
