import React from 'react';
import { ProjectWIP } from '../../components/ProjectWIP';
import { PageHeadline, SectionTitle, BodyText } from '../../theme';
import { FeaturedImage, FeaturedWrapper, ProjectPageWrapper, ProjectTitleWrapper, ProjectText } from '../Introspection/Introspection.styles';
import HausilyFeaturedImage from '../../assets/hausily.png';

export const Hausily = () => {
  return (
    <ProjectPageWrapper>
      <FeaturedWrapper>
        <ProjectTitleWrapper>
          <SectionTitle>Branding & UI/UX</SectionTitle>
          <PageHeadline>Hausily</PageHeadline>
          <BodyText>Cogo Labs <br /> Sept 2018 - Nov 2018</BodyText>
          <ProjectText>
        <BodyText>
          As a designer on Core Cogo's Web Team, we work as resources for the rest of the company, including the incubating start ups that are small and do not have their own designer. I was tasked with creating the branding and site design for their early stage start up. This site's goal was to hire data-driven individuals that are interested in creating a web product in the home owner market. Visit <a href="http://www.hausily.com" /> www.hausily.com to view the live site.
        </BodyText>
      </ProjectText>
        </ProjectTitleWrapper>
        <FeaturedImage src={HausilyFeaturedImage} />
      </FeaturedWrapper>
      <ProjectWIP />
    </ProjectPageWrapper>
  )
}

export default Hausily;
