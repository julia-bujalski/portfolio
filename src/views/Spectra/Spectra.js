import React, { useEffect } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { PageHeadline, SectionTitle, BodyText, PageTransition } from '../../theme';
import {
  FeaturedImage,
  FeaturedWrapper,
  ProjectPageWrapper,
  ProjectTitleWrapper,
  ProjectText,
  PhotoRow,
  ProjectImageB,
  ProjectImageC,
  ProjectSectionTitle,
  ChallengeSolutionWrapper,
  JourneyText,
} from '../projectpage_theme.js';
import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import DonationGraphic from '../../assets/spectra/spectra_donation.png';
import NetworkingGraphic from '../../assets/spectra/spectra_networking.png';
import SpectraHat from '../../assets/spectra/spectra_hat.png';
import LogoWordmark from '../../assets/spectra/logo_wordmark.png';
import LogoIllustration from '../../assets/spectra/logo_illustration.png';
import Product1 from '../../assets/spectra/product1.png';
import Product2 from '../../assets/spectra/product2.png';
import Product3 from '../../assets/spectra/product3.png';
import Banner from '../../assets/spectra/spectra_banner.png';

const PeachBackgroundColor=`#fdd7d4`;

export const Spectra = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TransitionGroup appear exit={false}>
      <Transition>
      {(state) => {
        return (
          <PageTransition state={state}>
            <FeaturedWrapper backgroundColor={PeachBackgroundColor}>
              <ProjectTitleWrapper>
                <SectionTitle>Branding & print design</SectionTitle>
                <PageHeadline>Cogo Spectra</PageHeadline>
                <BodyText>Cogo Labs</BodyText>
                <ProjectText>
                  <BodyText>
                    The Cogo Labs LGBTQ affinity group
                  </BodyText>
                </ProjectText>
              </ProjectTitleWrapper>
              <FeaturedImage src={Banner} width="100%" />
              </FeaturedWrapper>
              <ProjectPageWrapper>
              <ProjectSectionTitle>Introduction</ProjectSectionTitle>
              <BodyText>In July of 2018, Cogo Spectra established an LGBTQ+ affinity group with the goal of creating a welcoming environment for the LGBTQ+ community and allies. I created the branding, marketing materials for events, and materials for when we marched in Boston Pride.</BodyText>
              <ProjectSectionTitle>Branding</ProjectSectionTitle>
              <ChallengeSolutionWrapper>
                <JourneyText>
                  <SectionTitle>Challenge</SectionTitle>
                  <BodyText>
                    How can I create a brand that doesn't feel like 'rainbow washing'? How can I create a logo mark that acknowledges and celebrates all genders and sexualities?
                  </BodyText>
                </JourneyText>
                <JourneyText>
                  <SectionTitle>Solution</SectionTitle>
                  <BodyText>
                    Interview members of Spectra to see what is important to them, use symbolism across the LGBTQ and gender spectrum.
                  </BodyText>
                </JourneyText>
              </ChallengeSolutionWrapper>
              <PhotoRow>
                <ProjectImageC style={{width: `30%`}} src={LogoIllustration} />
                <ProjectImageC src={LogoWordmark} style={{width: `65%`}}/>
              </PhotoRow>
              <BodyText>
                These two graphics live separately depending on the product and purpose. The illustration plays off of the <a href="https://www.cogolabs.com">Cogo Labs</a> branding with the rocket but uses the LGBTQ flag to emphasize how we are powered by the beautiful, diverse community. I used the flag with the arrow within it to acknowledge the sexualities that were left out of the original pride flag. The word mark uses the same colors to evoke the LGBTQ flag but is decorated with deconstructed gender symbols to celebrate everyones gender identity and journey.
              </BodyText>
              <ProjectSectionTitle>Recruiting materials </ProjectSectionTitle>
              <PhotoRow>
                <ProjectImageB src={Product1} />
                <ProjectImageB src={Product2} />
                <ProjectImageB src={Product3} />
              </PhotoRow>
              <ProjectSectionTitle>Additional marketing materials</ProjectSectionTitle>
              <PhotoRow>
                <ProjectImageB src={DonationGraphic} />
                <ProjectImageB src={NetworkingGraphic} />
                <ProjectImageB src={SpectraHat} />
              </PhotoRow>
            <ViewMoreProjects />
          </ProjectPageWrapper>
        </PageTransition>
        )
      }}
      </Transition>
    </TransitionGroup>
  )
}

export default Spectra;
