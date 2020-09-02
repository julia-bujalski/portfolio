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
  ProjectImageB,
  PhotoRow,
} from '../projectpage_theme.js';
import { MockupSectionWrapper } from './Freelance.styles';
import WatercolorHouse from '../../assets/freelance/house_watercolor.png';
import HouseThumbnail1 from '../../assets/freelance/house1.png';
import HouseThumbnail2 from '../../assets/freelance/house2.png';
import HouseThumbnail3 from '../../assets/freelance/house3.png';
import ResumeMockup from '../../assets/freelance/resume_mockup.png';

import { ViewMoreProjects } from '../../components/ViewMoreProjects';

const PeriwinkleBackground = `#e8dbfb`;

export const Freelance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TransitionGroup appear exit={false}>
      <Transition>
      {(state) => {
        return (
          <PageTransition state={state}>
          <FeaturedWrapper backgroundColor={PeriwinkleBackground}>
              <ProjectTitleWrapper>
                <SectionTitle>Mixed Media</SectionTitle>
                <PageHeadline>Freelance Work</PageHeadline>
                <BodyText>Self Employed <br /> Jan 2019 - Present</BodyText>
                <BodyText>Mediums include watercolor and digital floorplans.</BodyText>
              </ProjectTitleWrapper>
              <FeaturedImage src={ResumeMockup} />
            </FeaturedWrapper>
          <ProjectPageWrapper>
            <ProjectSectionTitle>
              Watercolor Real Estate
            </ProjectSectionTitle>
            <ChallengeSolutionWrapper>
            <BodyText>
              These pieces were created for a local real estate company. After completing a sale, these pieces were given as gifts to remember their home.
            </BodyText>
            </ChallengeSolutionWrapper>
            <ProjectImage src={WatercolorHouse} />
            <PhotoRow>
              <ProjectImageB src={HouseThumbnail1} />
              <ProjectImageB src={HouseThumbnail3} />
              <ProjectImageB src={HouseThumbnail2} />
            </PhotoRow>
          </ProjectPageWrapper>
          </PageTransition>
          )
      }}
    </Transition>
  </TransitionGroup>
  )
}

export default Freelance;