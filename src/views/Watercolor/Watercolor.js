import React, { useEffect } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { PageHeadline, SectionTitle, BodyText, PageTransition } from '../../theme';
import {
  FeaturedImage,
  FeaturedWrapper,
  ProjectPageWrapper,
  ProjectTitleWrapper,
  ProjectText,
  PhotoRow,
  ProjectSectionTitle,
  Columns3
} from '../projectpage_theme.js';
import ConnectionsFeaturedImage from '../../assets/connections/sharpie_watercolor.png';
import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import WatercolorFeatured from '../../assets/watercolor/watercolor_product.png';
import PlantsFramed from '../../assets/watercolor/plants_framed.png';
import AbstractFramed from '../../assets/watercolor/abstract_framed.png';
import PomegranateFramed from '../../assets/watercolor/pomegranate_framed.png';

import ImageZoom from '../../components/ImageZoom';

export const Connections = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TransitionGroup appear exit={false}>
      <Transition>
      {(state) => {
        return (
          <PageTransition state={state}>
            <FeaturedWrapper>
              <ProjectTitleWrapper>
                <SectionTitle>Illustration</SectionTitle>
                <PageHeadline>Watercolor</PageHeadline>
                <BodyText>Personal project</BodyText>
                <ProjectText>
                  <BodyText>
                    While in quarantine, I began using watercolor and pen to explor connections with people, nature, and the world around me. These aim to be expressive, simple pieces the evoke motion and joy.
                  </BodyText>
                </ProjectText>
              </ProjectTitleWrapper>
              <FeaturedImage src={WatercolorFeatured} />
            </FeaturedWrapper>
            <ProjectPageWrapper>
            <PhotoRow style={{paddingTop: `55px`}}>
              <ImageZoom columns={Columns3} src={PomegranateFramed} />
              <ImageZoom columns={Columns3} src={PlantsFramed} />
              <ImageZoom columns={Columns3} src={AbstractFramed} />
            </PhotoRow>
            <ViewMoreProjects />
          </ProjectPageWrapper>
          </PageTransition>
        )
      }}
      </Transition>
    </TransitionGroup>
  )
}

export default Connections;
