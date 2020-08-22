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
  ProjectSectionTitle
} from '../projectpage_theme.js';
import ConnectionsFeaturedImage from '../../assets/connections/sharpie_watercolor.png';
import SharpieFace from '../../assets/connections/sharpie_face.png';
import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import ConnectionsA from '../../assets/connections/sharpie_watercolor2.png';
import ConnectionsB from '../../assets/connections/sharpie_watercolor3.png';

export const Connections = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <FeaturedWrapper>
        <ProjectTitleWrapper>
          <SectionTitle>Illustration</SectionTitle>
          <PageHeadline>Connections</PageHeadline>
          <BodyText>Personal project <br /> April 2020 - Present</BodyText>
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
        <ProjectImageB src={ConnectionsFeaturedImage} />
        <ProjectImageB src={SharpieFace} />
        <ProjectImageB src={ConnectionsB} />
      </PhotoRow>
      <ViewMoreProjects />
    </ProjectPageWrapper>
    </>
  )
}

export default Connections;
