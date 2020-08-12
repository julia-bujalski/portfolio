import React, { useEffect } from 'react';
import { ProjectWIP } from '../../components/ProjectWIP';
import { PageHeadline, SectionTitle, BodyText } from '../../theme';
import { FeaturedImage, FeaturedWrapper, ProjectPageWrapper, ProjectTitleWrapper } from './Introspection.styles';
import { ViewMoreProjects } from '../../components/ViewMoreProjects';

export const Introspection = () => {
  useEffect(() => {
    console.log("testing");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectPageWrapper>
        <FeaturedWrapper>
          <ProjectTitleWrapper>
            <SectionTitle>Mixed media typography</SectionTitle>
            <PageHeadline>Introspection</PageHeadline>
            <BodyText>Emmanuel College Senior Thesis <br /> Sept 2017 - May 2018</BodyText>
          </ProjectTitleWrapper>
          <FeaturedImage src="https://freight.cargo.site/w/1260/q/94/i/b69408e5823e0446764e93caefbe15b2a00cabe474d71a8dfc4008c5f2e2efb7/booklet.png" />
        </FeaturedWrapper>
        <ProjectWIP />
      </ProjectPageWrapper>
      <ViewMoreProjects />
    </>
  )
}

export default Introspection;
