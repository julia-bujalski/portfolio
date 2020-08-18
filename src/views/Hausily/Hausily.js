import React, { useEffect } from 'react';
import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import { PageHeadline, SectionTitle, BodyText } from '../../theme';
import { PhoneScrollMockUp } from '../../components/PhoneScrollMockUp';
import { LaptopScrollMockup } from '../../components/LaptopScrollMockup';
import {
  FeaturedImage,
  FeaturedWrapper,
  ProjectPageWrapper,
  ProjectTitleWrapper,
  ProjectText,
  PhotoRow,
  ProjectImageC,
  ProjectSectionTitle,
  SubtitleText,
  MockupWrapper
} from '../Introspection/Introspection.styles';
import HausilyFeaturedImage from '../../assets/hausily.png';
import HausilyStyleGuide from '../../assets/hausily_styleguide.png';
import HausilyStyleGuide2 from '../../assets/hausily_styleguide2.png';

export const Hausily = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectPageWrapper>
      <FeaturedWrapper>
        <ProjectTitleWrapper>
          <SectionTitle>Branding & UI/UX</SectionTitle>
          <PageHeadline>Hausily</PageHeadline>
          <BodyText>Cogo Labs <br /> Sept 2018 - Nov 2018</BodyText>
          <ProjectText>
        <BodyText>
          As a designer on Core Cogo's Web Team, we work as resources for the rest of the company, including the incubating start ups that are small and do not have their own designer. I was tasked with creating the branding and site design for their early stage start up. This site's goal was to hire data-driven individuals that are interested in creating a web product in the home owner market. Visit <a href="http://www.hausily.com" target="_blank" rel="noopener noreferrer">hausily.com</a> to view the live site.
        </BodyText>
      </ProjectText>
        </ProjectTitleWrapper>
        <FeaturedImage src={HausilyFeaturedImage} />
      </FeaturedWrapper>
      <ProjectSectionTitle>Mockups</ProjectSectionTitle>
      <SubtitleText>Scroll through mock ups of the Hausily site</SubtitleText>
      <MockupWrapper>
        <PhotoRow>
          <PhoneScrollMockUp row mockup="https://freight.cargo.site/w/500/q/75/i/9d7106c27f42f0216f189539d3d88a764d8d1299d9c3f69a3797e3fde552296d/Mobile_mockups.jpg" />
          <LaptopScrollMockup mockup="https://freight.cargo.site/w/2000/q/75/i/dea183596282c676f8c5a27f2c18b10968f29d3916fbb83f868da926421f8d03/Desktop_mockupsasdfasdf.jpg" />
        </PhotoRow>
      </MockupWrapper>
      <ProjectSectionTitle>Styleguide</ProjectSectionTitle>
      <MockupWrapper>
        <PhotoRow>
          <ProjectImageC src={HausilyStyleGuide} />
          <ProjectImageC src={HausilyStyleGuide2} />
        </PhotoRow>
      </MockupWrapper>
    <ViewMoreProjects />
    </ProjectPageWrapper>
  )
}

export default Hausily;
