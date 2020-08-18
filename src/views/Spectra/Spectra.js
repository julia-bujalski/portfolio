import React, { useEffect } from 'react';
import { PageHeadline, SectionTitle, BodyText } from '../../theme';
import {
  FeaturedImage,
  FeaturedWrapper,
  ProjectPageWrapper,
  ProjectTitleWrapper,
  ProjectText,
  ProjectImage,
  PhotoRow,
  ProjectImageB
} from '../Introspection/Introspection.styles';
import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import SpectraFeaturedImage from '../../assets/spectra_banner.jpg';
import DonationGraphic from '../../assets/spectra_donation.png';
import HalloweenGraphic from '../../assets/spectra_halloween.png';
import NetworkingGraphic from '../../assets/spectra_networking.png';
import SpectraHat from '../../assets/spectra_hat.png';

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
        <PhotoRow>
          <ProjectImageB src="https://freight.cargo.site/w/432/q/94/i/24cb2095c090ff6a4c5250d1e96370797e15e05b2cfbaa41de7ebc543ce1ad29/postcard1.jpeg" />
          <ProjectImageB src="https://freight.cargo.site/w/432/q/94/i/1db7960b073dd5a5433040892c1f21064208b2d8458d4844ebc930b1a6586dd0/post-card-2.jpeg" />
          <ProjectImageB src={DonationGraphic} />
          <ProjectImageB src={HalloweenGraphic} />
          <ProjectImageB src={NetworkingGraphic} />
          <ProjectImageB src={SpectraHat} />
        </PhotoRow>
        <ProjectImage src="https://freight.cargo.site/w/1782/q/94/i/85e75e65bb835a0c2c708c34b22ab9b30c1048b94c3a6adc1c1d38e29e908cac/pride.jpg" width="100%" />
      <ViewMoreProjects />
    </ProjectPageWrapper>
  )
}

export default Spectra;
