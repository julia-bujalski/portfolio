import React, { useEffect } from 'react';
import { PageHeadline, SectionTitle, BodyText } from '../../theme';
import { FeaturedImage, FeaturedWrapper, ProjectPageWrapper, ProjectTitleWrapper, ProjectText } from '../Introspection/Introspection.styles';
import ConnectionsFeaturedImage from '../../assets/sharpie_watercolor.png'
import { ProjectWIP } from '../../components/ProjectWIP';

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
      <ProjectWIP />
    </ProjectPageWrapper>
  )
}

export default Connections;
