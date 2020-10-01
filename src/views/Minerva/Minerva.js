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
  SubtitleText
} from '../projectpage_theme.js';
import MinervaScreens from '../../assets/minerva/screens_mockup.png';

import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import { PhoneScrollMockUp } from '../../components/PhoneScrollMockUp';
import { LaptopScrollMockup } from '../../components/LaptopScrollMockup';

import SiteMap from '../../assets/minerva/minerva_site_map.png';
import MobileMockup from '../../assets/minerva/mobile_mockup.png';
import DesktopMockup from '../../assets/minerva/desktop_mockup.png';
import Wireframes from '../../assets/minerva/wireframes.png';

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
                <BodyText>Personal project <br />July 2020 - September 2020</BodyText>
                <ProjectText>
                  <BodyText>
                    The Minerva Analytics brand redesign exercise.
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
              <ProjectSectionTitle>Process</ProjectSectionTitle>
              <BodyText>
                When considering the entire brand and site, it was important to see who would be entering the site, from where, and what the end goal would be. For some, the end goal would just be to digest the information and leave with a solid understanding of Minerva Analytics. For some, it would be to get them to invest in Minerva. For others, it was to get them to apply for a job. The challenge lies in how do you appeal to both types of audiences? 
              </BodyText>
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
              <ProjectSectionTitle>Site design</ProjectSectionTitle>
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