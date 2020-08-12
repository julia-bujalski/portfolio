import React, { useEffect } from 'react';
import { PageHeadline, SectionTitle, BodyText } from '../../theme';
import { FeaturedImage, FeaturedWrapper, ProjectPageWrapper, ProjectTitleWrapper, ProjectText } from '../Introspection/Introspection.styles';
import { ProjectWIP } from '../../components/ProjectWIP';
import SpectraFeaturedImage from '../../assets/spectra_banner.jpg';

export const Spectra = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectPageWrapper>
      <FeaturedWrapper>
        <ProjectTitleWrapper>
          <SectionTitle>Branding & print design</SectionTitle>
          <PageHeadline>Cogo Spectra</PageHeadline>
          <BodyText>Cogo Labs <br />January 2019 - Present</BodyText>
          <ProjectText>
            <BodyText>
              In July of 2018, Cogo Spectra established an LGBTQ+ affinity group with the goal of creating a welcoming environment for the LGBTQ+ community and allies. I created the branding, marketing materials for events, and materials for when we marched in Boston Pride, June 2019.
            </BodyText>
          </ProjectText>
        </ProjectTitleWrapper>
        <FeaturedImage src={SpectraFeaturedImage} />
      </FeaturedWrapper>
      <ProjectWIP />
    </ProjectPageWrapper>
  )
}

export default Spectra;
