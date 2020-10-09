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
import SharpieFace from '../../assets/connections/sharpie_face.png';
import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import ConnectionsA from '../../assets/connections/sharpie_watercolor2.png';
import ConnectionsB from '../../assets/connections/sharpie_watercolor3.png';
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
                <PageHeadline>Connections</PageHeadline>
                <BodyText>Personal project</BodyText>
                <ProjectText>
                  <BodyText>
                    While in quarantine, I began using art and illustration to explore the connections that I have with myself, with other people, and with the world. These pieces consider feelings, emotions, and overall connection to the world around me.
                  </BodyText>
                </ProjectText>
              </ProjectTitleWrapper>
              <FeaturedImage src={ConnectionsA} />
            </FeaturedWrapper>
            <ProjectPageWrapper>
            <ProjectSectionTitle>Illustrations</ProjectSectionTitle>
            <PhotoRow style={{paddingTop: `35px`}}>
              <ImageZoom columns={Columns3} src={ConnectionsFeaturedImage} />
              <ImageZoom columns={Columns3} src={SharpieFace} />
              <ImageZoom columns={Columns3} src={ConnectionsB} />
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
