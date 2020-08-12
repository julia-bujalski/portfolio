import React, { useEffect } from 'react';
import { PageHeadline, SectionTitle, BodyText } from '../../theme';
import { FeaturedImage, FeaturedWrapper, ProjectPageWrapper, ProjectTitleWrapper, ProjectText } from '../Introspection/Introspection.styles';
import { ProjectWIP } from '../../components/ProjectWIP';
import QuickscopeFeaturedImage from '../../assets/quickscope_mockup.png';


export const Quickscope = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectPageWrapper>
      <FeaturedWrapper>
        <ProjectTitleWrapper>
          <SectionTitle>Email design & front end development</SectionTitle>
          <PageHeadline>Quickscope</PageHeadline>
          <BodyText>Minerva Analytics <br /> January 2020 - Present</BodyText>
          <ProjectText>
            <BodyText>
              I supported Quickscope, the daily video gaming newsletter, as a designer at Minerva Analytics. I created the email design, social graphics, and helped support development of the site with ReactJS styled components.
            </BodyText>
          </ProjectText>
        </ProjectTitleWrapper>
        <FeaturedImage src={QuickscopeFeaturedImage} />
      </FeaturedWrapper>
      <ProjectWIP />
    </ProjectPageWrapper>
  )
}

export default Quickscope;
