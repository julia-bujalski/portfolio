import React, { useEffect } from 'react';
import { PageHeadline, SectionTitle, BodyText } from '../../theme';
import {
  FeaturedImage,
  FeaturedWrapper,
  ProjectPageWrapper,
  ProjectTitleWrapper,
  ProjectText,
  ProjectImagesWrapper,
  PhotoRow,
  ProjectImageB,
  ProjectSectionTitle
} from '../Introspection/Introspection.styles';
import QuickscopeFeaturedImage from '../../assets/quickscope_mockup.png';
import QuickscopeArticleA from '../../assets/quickscope_articleA.png';
import QuickscopeArticleB from '../../assets/quickscope_articleB.png';
import QuickscopeFacebook from '../../assets/quickscope_facebook.png';
import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import { PhoneScrollMockUp } from '../../components/PhoneScrollMockUp';

export const Quickscope = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
      </ProjectPageWrapper>
        <ProjectImagesWrapper>
          <ProjectSectionTitle>Scroll through an issue of Quickscope</ProjectSectionTitle>
          <PhoneScrollMockUp />
          <ProjectSectionTitle>Ad Campaigns</ProjectSectionTitle>
          <PhotoRow>
            <ProjectImageB src={QuickscopeArticleA} />
            <ProjectImageB src={QuickscopeArticleB} />
            <ProjectImageB src={QuickscopeFacebook} />
          </PhotoRow>
      </ProjectImagesWrapper>
      <ViewMoreProjects />
    </>
  )
}

export default Quickscope;
