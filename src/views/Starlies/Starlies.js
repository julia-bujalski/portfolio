import React, { useEffect } from 'react';
import { PageHeadline, SectionTitle, BodyText } from '../../theme';
import { FeaturedImage, FeaturedWrapper, ProjectPageWrapper, ProjectTitleWrapper, ProjectText } from '../Introspection/Introspection.styles';
import { ProjectWIP } from '../../components/ProjectWIP';
import StarliesFeaturedImage from '../../assets/starlies.png';
import { ViewMoreProjects } from '../../components/ViewMoreProjects';

export const Starlies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectPageWrapper>
        <FeaturedWrapper>
          <ProjectTitleWrapper>
            <SectionTitle>Product, marketing, and UI/UX design</SectionTitle>
            <PageHeadline>Starlies</PageHeadline>
            <BodyText>Minerva Analytics <br /> January 2020 - Present</BodyText>
            <ProjectText>
              <BodyText>
                I worked on the Starlies product in varying degrees during my time at Minerva Analytics. The brand was created by another designer at the company and I supported the development through on site feature design and development, email design & code, social graphics, and user testing amounting to one of the most successful products under in Minerva's portfolio. The site experience and daily newsletter connects you with horoscopes and other astrological content such as birth charts, celebrity quotes, and moon phases. Check out the live site at <a href="https://www.starlies.com">starlies.com</a>.
              </BodyText>
            </ProjectText>
          </ProjectTitleWrapper>
          <FeaturedImage src={StarliesFeaturedImage} />
        </FeaturedWrapper>
        <ProjectWIP />
      </ProjectPageWrapper>
      <ViewMoreProjects />
    </>
  )
}

export default Starlies;
