import React, { useEffect } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { PageHeadline, SectionTitle, BodyText, PageTransition } from '../../theme';
import {
  FeaturedImage,
  FeaturedWrapper,
  ProjectPageWrapper,
  ProjectTitleWrapper,
  ProjectSectionTitle,
  ProjectText,
  MockupWrapper,
  ProjectImage,
  PhotoRow,
  SubtitleText,
  FullSizedProjectImage,
  ChallengeSolutionWrapper,
  JourneyText
} from '../projectpage_theme.js';
import MinervaScreens from '../../assets/minerva/screens_mockup.png';

import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import { PhoneScrollMockUp } from '../../components/PhoneScrollMockUp';
import { LaptopScrollMockup } from '../../components/LaptopScrollMockup';

import SiteMap from '../../assets/minerva/minerva_site_map.png';
import MobileMockup from '../../assets/minerva/mobile_mockup.png';
import DesktopMockup from '../../assets/minerva/desktop_mockup.png';
import Wireframes from '../../assets/minerva/wireframes.png';
import LogoBrainstorm from '../../assets/minerva/logo_brainstorm.png';
import BrandBrainstorm from '../../assets/minerva/brand_brainstorm.png';
import FinalBranding from '../../assets/minerva/final_branding.png';

const TealBackgroundColor = `#b7f7ef`;

const ProcessImage = styled(ProjectImage)`
  max-height: unset;
  width: 90%;
  margin: 0 auto;
  display: block;
`;

export const Minerva = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TransitionGroup appear exit={false}>
      <Transition>
      {(state) => {
        return (
          <PageTransition state={state}>
            <FeaturedWrapper backgroundColor={TealBackgroundColor}>
              <ProjectTitleWrapper>
                <SectionTitle>Branding & site design</SectionTitle>
                <PageHeadline>Minerva Analytics</PageHeadline>
                <BodyText>Personal project</BodyText>
                <ProjectText>
                  <BodyText>
                    The Minerva Analytics brand redesign exercise
                  </BodyText>
                </ProjectText>
              </ProjectTitleWrapper>
              <FeaturedImage src={MinervaScreens} width="100%" />
            </FeaturedWrapper>
            <ProjectPageWrapper>
              <ProjectSectionTitle>Introduction</ProjectSectionTitle>
              <BodyText>
                Minerva Analytics is a tech start up finding it's space in the media sphere. As an analytics based company, the mission has evolved greatly since it's conception to connect with the media space and appeal to all of its audiences - investors, prospective employees, and users of their products. Their <a href="https://minervaanalytics.co">site</a> and brand was create closely to the conception of the company and doesn't efficiently illustrate their processes or connect with their intended audiences. With this exercise, I've added a modern touch to the visuals representing the brand and give more insight into the company's functions.
              </BodyText>
              <ProjectSectionTitle>Branding process</ProjectSectionTitle>
              <BodyText>
                When considering the Minerva brand, it was important to consider all audiences and the overall end goal of the Minerva brand. The three main audiences are prospective employees, prospective investors, and current employees. The main goal is to elevate the brands in Minerva's media portfolio and showcase our strong technology and internal resources. With these users and goals, I approached logo and brand development with a main adjectives in mind - <strong>fun, conversational, collaborative, innovative, and confident.</strong>
              </BodyText>
              <PhotoRow>
                <FullSizedProjectImage src={LogoBrainstorm} />
              </PhotoRow>
              <BodyText>
                The top logo is the current minerva logo and the ones below are iterations off of that logo. The goal of this exercise was a branding refresh aasa the companies goals were being refined. With these designs, I wanted to stay in tune with the strong, technology feel that the current logo had but include modern elements such as a sans-serif font, color blocks, and vector shapes. Moving towards the brand as a whole, I continued to focus on the brand adjectives and work towards branding that would show our energetic and innovative culture.
              </BodyText>
              <PhotoRow>
                <FullSizedProjectImage src={BrandBrainstorm} />
              </PhotoRow>
              <ProjectSectionTitle>Final branding</ProjectSectionTitle>
              <PhotoRow>
                <FullSizedProjectImage src={FinalBranding} />
              </PhotoRow>
              <ProjectSectionTitle>Site design process</ProjectSectionTitle>
              <ChallengeSolutionWrapper>
              <JourneyText>
                <SectionTitle>Challenge</SectionTitle>
                <BodyText>
                  How do you appeal to different types of audiences when designing a single site? How do you ensure all users leave with the informtaion they need?
                </BodyText>
              </JourneyText>
              <JourneyText>
                <SectionTitle>Solution</SectionTitle>
                <BodyText>
                  Include specific information for more technical audiences like investors while using visual design to humanize the company and showcase our culture.
                </BodyText>
              </JourneyText>
            </ChallengeSolutionWrapper>
              <MockupWrapper backgroundColor={TealBackgroundColor}>
                <ProcessImage src={SiteMap} />
              </MockupWrapper>
              <BodyText>
                To address this challenge, I thought about the aspects of the single page site that could appeal to the specific goals that each audience has. I created a team and culture section to humanize the employees and connect  with prospective employees. To appeal to both prospective employees and possible investors, I included high level statistics and succinct descriptions of Minerva's mission to show the impact that the company has on their markets and what their goals are.
              </BodyText>
              <ProjectSectionTitle>Wireframes</ProjectSectionTitle>
              <MockupWrapper backgroundColor={TealBackgroundColor}>
                <ProcessImage src={Wireframes} />
              </MockupWrapper>
              <ProjectSectionTitle>Final site design</ProjectSectionTitle>
              <SubtitleText>Scroll through mock ups of the Minerva Branding Exercise </SubtitleText>
              <MockupWrapper backgroundColor={TealBackgroundColor}>
                <PhotoRow>
                  <PhoneScrollMockUp row mockup={MobileMockup} />
                  <LaptopScrollMockup mockup={DesktopMockup} />
                </PhotoRow>
              </MockupWrapper>
              <ViewMoreProjects UI />
            </ProjectPageWrapper>
          </PageTransition>
        )
      }}
      </Transition>
    </TransitionGroup>
  )
}

export default Minerva