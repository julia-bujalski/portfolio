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
  ProjectSectionTitle,
  Columns3,
  ChallengeSolutionWrapper,
  JourneyText,
  MockupWrapper
} from '../projectpage_theme.js';
import LaptopMockup from '../../assets/dirtymouth/dirtymouth_laptop_mockup.png';
import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import ConnectionsA from '../../assets/connections/sharpie_watercolor2.png';
import ConnectionsB from '../../assets/connections/sharpie_watercolor3.png';
import OldDesign from '../../assets/dirtymouth/old_site.png';
import Moodboard from '../../assets/dirtymouth/moodboard.png';
import StyleGuide from '../../assets/dirtymouth/styleguide.png';
import HomepageMockup from '../../assets/dirtymouth/homepage_mockup.png';

import ImageZoom from '../../components/ImageZoom';
import { LaptopScrollMockup } from '../../components/LaptopScrollMockup';

export const Connections = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TransitionGroup appear exit={false}>
      <Transition>
      {(state) => {
        return (
          <PageTransition state={state}>
            <FeaturedWrapper>
              <ProjectTitleWrapper>
                <SectionTitle>Branding & UI design</SectionTitle>
                <PageHeadline>Dirtymouth</PageHeadline>
                <BodyText>Freelance project</BodyText>
                <ProjectText>
                  <BodyText>
                    Dirtymouth is a collegiate, saterical apparel brand created by a friend of mine. He reached out to me when they were expanding from Dartmouth based apparel to all college apparel in hopes to revamp their branding and site. <a href="https://dirtymouthapparel.com/">Click here</a> to check out their live shopify site.
                  </BodyText>
                </ProjectText>
              </ProjectTitleWrapper>
              <FeaturedImage src={LaptopMockup} />
            </FeaturedWrapper>
            <ProjectPageWrapper>
            <ProjectSectionTitle>Introduction</ProjectSectionTitle>
            <BodyText>
              Dirtymouth aims to be the new college apparel. At the beginning of this project, they had established thmselves as the Dartmouth apparel brand. Theirr goal is to launch to all Ivy Leagues and gain footing as a "hype", trendy, college apparel brand. With this pivot, they needed a brand refresh from their current branding that was rooted in Dartmouth typography and imagery. When I was presented with this project, I was also given a number of inspiration brands that focused on streetwear design such as Supreme, Yeezy, Bape, and Undefeated.
            </BodyText>
            <ChallengeSolutionWrapper>
              <JourneyText>
                <SectionTitle>Challenge</SectionTitle>
                <BodyText>
                  How can you evoke college while still feeling trendy? How can you stay connected to the Dartmouth roots while appealing to all college's designs and taglines?
                </BodyText>
              </JourneyText>
              <JourneyText>
                <SectionTitle>Solution</SectionTitle>
                <BodyText>
                  Pull inspiration from the bright, bold colors, and type manipulation while staying true to the clean, almost intellectual branding of colleges. 
                </BodyText>
              </JourneyText>
            </ChallengeSolutionWrapper>
            <ProjectSectionTitle>Current site design</ProjectSectionTitle>
            <PhotoRow>
              <ImageZoom src={OldDesign} />
            </PhotoRow>
            <BodyText>
              The current site design and branding leans heavily on the Dartmouth branding and is entirely Dartmouth specific. The dark green feels collegiate but it is not pulling any notion of streetwear or high trend into it. 
            </BodyText>
            <ProjectSectionTitle>Design research</ProjectSectionTitle>
            <BodyText>
              Based on the goals of Dirtymouth and the inspirational brands I was given, I conducted market research and an exploration of type treatments, color palettes, and logo drafts. The current brand really hones in on the "Dartmouth" and college aspect of the brand. The proucts themselves speak to the streetwear aesthetic but the brand itself needs to embody the edge, modernity, and boldness of streetwear if that is the final goal.
            </BodyText>
            <PhotoRow>
              <ImageZoom src={Moodboard} />
            </PhotoRow>
            <BodyText>
              After exploring fonts, I was drawn to the Old English font that is currently used in "Dirtymouth" beecause of its ties to the Ivy League colleges and academia. I also thought there was potential to use type manipulation and make it feel streetwear.
            </BodyText>
            <BodyText>
              When looking into typography, I wanted the type system to complement the Old English font in the logo in a way that wasn't ovrepowering but still felt connecte. I looked towards Adidast and Supreme with clean, sans-serif, fonts. The color palettes I was looking towards included nods towards academia with strong neutrals but with a bold touch to feel reminiscent of street wear.
            </BodyText>
            <ProjectSectionTitle>Final style guide
            </ProjectSectionTitle>
            <PhotoRow>
              <ImageZoom src={StyleGuide} />
            </PhotoRow>
            <ProjectSectionTitle>
              Site design
            </ProjectSectionTitle>
            <BodyText>
              This site is hosted using shopify so there are some developmental limitations when designing the site. When pitching this art direction and branding, I included a proof of concept for the landing page to demonstrate how this branding would translate to their site. These key concepts were noted <strong>bold neons, Old English font as a pattern to match the logo, charcoal gray to show depth and a strong neutral, collage graphics for an edge streetwear feel, and a subtle monospace font to contribute to that edge</strong>. <a href="https://dirtymouthapparel.com/" target="_blank">Check out the live site</a> to see how this translated to their shopify site.
            </BodyText>
            <MockupWrapper>
              <PhotoRow>
                <LaptopScrollMockup row mockup={HomepageMockup} />
              </PhotoRow>
            </MockupWrapper>
            <ViewMoreProjects UI />
          </ProjectPageWrapper>
          </PageTransition>
        )
      }}
      </Transition>
    </TransitionGroup>
  )
}

export default Connections;
