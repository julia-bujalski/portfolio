import React, { useEffect } from 'react';
import { PageHeadline, SectionTitle, BodyText } from '../../theme';
import {
  FeaturedImage,
  FeaturedWrapper,
  ProjectPageWrapper,
  ProjectTitleWrapper,
  ProjectText,
  PhotoRow,
  ProjectImageB
} from '../Introspection/Introspection.styles';
import ConnectionsFeaturedImage from '../../assets/sharpie_watercolor.png';
import SharpieFace from '../../assets/sharpie_face.png';
import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import ConnectionsA from '../../assets/sharpie_watercolor2.png';
import ConnectionsB from '../../assets/sharpie_watercolor3.png';

export const Connections = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectPageWrapper>
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
        <FeaturedImage src={ConnectionsFeaturedImage} />
      </FeaturedWrapper>
      <PhotoRow>
        <ProjectImageB src={ConnectionsA} />
        <ProjectImageB src={SharpieFace} />
        <ProjectImageB src={ConnectionsB} />
      </PhotoRow>
      <ViewMoreProjects />
    </ProjectPageWrapper>
  )
}

export default Connections;
