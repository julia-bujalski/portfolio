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
  FullSizedProjectImage
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
import LogoInspiration from '../../assets/spectra/logo_inspiration.png';
import CogoLogo from '../../assets/spectra/cogo_logo.png';
import CogoWebsite from '../../assets/spectra/cogo_website.png';
import LogoProcess from '../../assets/spectra/logo_process.png';

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
              <ProjectSectionTitle>
                Logo Process
              </ProjectSectionTitle>
              <BodyText>
                As a cisgender woman in the LGBTQ community, I knew I could understand the representation that should be in this logo mark<i>to some extent</i>, but I knew I wouldn't be able to speak to all gender identities or sexualities without talking to people! I started off this logo brainstorm by researching other Pride company's designs. I looked beyond "rainbow washing" design to try and tune into companies that thought deeper about how to represent the LGBTQ community.
              </BodyText>
              <PhotoRow>
                <FullSizedProjectImage src={LogoInspiration} />
              </PhotoRow>
              <BodyText>
                After researching LGBTQ branding in other companies, I looked towards the Cogo branding. Cogo Spectra is the afinity group within Cogo so I knew I wanted the Spectra branding to feel connected and reminiscient of the values Cogo holds while still feeling unique.
              </BodyText>
              <PhotoRow>
                <ProjectImageC src={CogoLogo} />
                <ProjectImageC src={CogoWebsite} />
              </PhotoRow>
              <BodyText>
                After significant preliminary research, I went through a number of iteraitons. During this, I met with members of spectra about 3 times to ensure that I was representing everyone in the group and doing so in an appropriate and respectful manner.
              </BodyText>
              <PhotoRow>
                <FullSizedProjectImage src={LogoProcess} />
              </PhotoRow>
              <ProjectSectionTitle>
                Final Branding
              </ProjectSectionTitle>
              <PhotoRow>
                <ProjectImageC style={{width: `30%`}} src={LogoIllustration} />
                <ProjectImageC src={LogoWordmark} style={{width: `65%`}}/>
              </PhotoRow>
              <BodyText>
                These two graphics live separately depending on the product and purpose. The illustration on the left plays off of the <a href="https://www.cogolabs.com">Cogo Labs</a> branding with the rocket while using the LGBTQ flag to emphasize how we are powered by the beautiful, diverse community. I used the progressive Pride flag with the arrow in it to "reclaim the movement from the sole space of cisgender white gay men who’ve historically run LGBT organizations and who've garnered much of the attention around issues facing the community". The colors in the arrow represent the trans and asexual individuals that were previously left out of the color scheme. The word mark uses the same colors to evoke the LGBTQ flag but is decorated with deconstructed gender symbols to celebrate gender identities as well as sexual orientations.
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
