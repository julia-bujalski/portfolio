import React, { useEffect } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { PageHeadline, SectionTitle, BodyText, PageTransition } from '../../theme';
import {
  FeaturedImage,
  FeaturedWrapper,
  ProjectPageWrapper,
  ProjectTitleWrapper,

  ProjectText
} from '../projectpage_theme.js';
import MinervaScreens from '../../assets/minerva/screens_mockup.png';
import { ProjectWIP } from '../../components/ProjectWIP';
import { ViewMoreProjects } from '../../components/ViewMoreProjects';

const TealBackgroundColor = `#b7f7ef`;

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
              <ProjectWIP />
              <ViewMoreProjects />
            </ProjectPageWrapper>
          </PageTransition>
        )
      }}
      </Transition>
    </TransitionGroup>
  )
}

export default Minerva