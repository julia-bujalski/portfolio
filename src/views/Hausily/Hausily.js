import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Transition, TransitionGroup } from 'react-transition-group';
import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import { PageHeadline, SectionTitle, BodyText, PageTransition } from '../../theme';
import { PhoneScrollMockUp } from '../../components/PhoneScrollMockUp';
import { LaptopScrollMockup } from '../../components/LaptopScrollMockup';
import {
  FeaturedImage,
  FeaturedWrapper,
  ProjectPageWrapper,
  ProjectTitleWrapper,
  PhotoRow,
  ProjectImageC,
  ProjectSectionTitle,
  SubtitleText,
  MockupWrapper,
  ChallengeSolutionWrapper,
  JourneyText,
  ProjectImage,
} from '../projectpage_theme.js';
import HausilyStyleGuide from '../../assets/hausily/hausily_styleguide.png';
import HausilyStyleGuide2 from '../../assets/hausily/hausily_styleguide2.png';
import ScreensMockup from '../../assets/hausily/hausily_screens_mockup.png';
import DesktopMockup from '../../assets/hausily/mockup_desktop.png';
import MobileMockup from '../../assets/hausily/mockup_mobile.png';
import Wireframes from '../../assets/hausily/wireframes.png';
import SiteMap from '../../assets/hausily/site_map.png';
import LogoProcess from '../../assets/hausily/logo_process.png';

const BlueBackground = `#d6edf7`;

const ProcessImage = styled(ProjectImage)`
  max-height: unset;
  width: 90%;
  margin: 0 auto;
  display: block;
  padding-bottom: 30px;
`;

export const Hausily = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TransitionGroup appear exit={false}>
      <Transition>
      {(state) => {
        return (
          <PageTransition state={state}>
            <FeaturedWrapper backgroundColor={BlueBackground}>
              <ProjectTitleWrapper>
                <SectionTitle>Branding & UI/UX</SectionTitle>
                <PageHeadline>Hausily</PageHeadline>
                <BodyText>Cogo Labs</BodyText>
                <BodyText>A homeowners start up site</BodyText>
              </ProjectTitleWrapper>
              <FeaturedImage src={ScreensMockup} />
            </FeaturedWrapper>
            <ProjectPageWrapper>
            <ProjectSectionTitle>Introduction</ProjectSectionTitle>
            <BodyText>
                As a designer on Cogo's Web Team, I worked as a resource for the rest of the company, including the small incubating start ups that do not have their own designer. I was tasked with creating the branding and site design for Hausily, the early stage start up. The site's goal was to hire data-driven individuals that are interested in creating a web product in the home owner market. Visit <a href="http://www.hausily.com" target="_blank" rel="noopener noreferrer">hausily.com</a> to view the live site.
              </BodyText>
            <ProjectSectionTitle>Logo Design Process</ProjectSectionTitle>
            <BodyText>
              With this project, I worked closely with the Hausily team to understand their needs of the logo and site before beginning. With their visuals, they wanted to stay on the profession side - Hausily is the corporate entity not the eventual homeowner product. They wanted a house as the icon to be very obvious and looked towards the Toast branding as inspiration. With these goals, I brainstormed home themes and visuals, tuning into works like habitat, household, abode, base, and house. With this process, I ended up pitching multiple logos to the team, <a href="https://drive.google.com/file/d/1OHyDLwyJL9qJt_5wI67z5-cAODO8Q4o3/view?usp=sharing" target="_blank" rel="noopener noreferrer">click here to view the final logo presentation given to the Hausily Team.</a>
            </BodyText>
            <PhotoRow>
              <ProjectImage src={LogoProcess} />
            </PhotoRow>
            <ProjectSectionTitle>Final Style Guide</ProjectSectionTitle>
            <MockupWrapper backgroundColor={BlueBackground}>
              <PhotoRow>
                <ProjectImageC src={HausilyStyleGuide} />
                <ProjectImageC src={HausilyStyleGuide2} />
              </PhotoRow>
            </MockupWrapper>
            <ProjectSectionTitle>Site Design Process</ProjectSectionTitle>
            <ChallengeSolutionWrapper>
                <JourneyText>
                  <SectionTitle>Challenge</SectionTitle>
                  <BodyText>
                    Hausily is an early stage start up with a broad product plan that needs to recruit valuable analytics and engineering talent to join their team.
                  </BodyText>
                </JourneyText>
                <JourneyText>
                  <SectionTitle>Solution</SectionTitle>
                  <BodyText>
                    Design a site that focuses on the exploratory aspects of start up development, the available user data, and open positions.
                  </BodyText>
                </JourneyText>
              </ChallengeSolutionWrapper>
              <MockupWrapper backgroundColor={BlueBackground}>
              <ProcessImage src={Wireframes} />
              <ProcessImage src={SiteMap} />
            </MockupWrapper>
            <ProjectSectionTitle>Final Site Designs </ProjectSectionTitle>
            <SubtitleText>Scroll through mock ups of the Hausily site</SubtitleText>
            <MockupWrapper backgroundColor={BlueBackground}>
              <PhotoRow>
                <PhoneScrollMockUp row mockup={MobileMockup} />
                <LaptopScrollMockup mockup={DesktopMockup} />
              </PhotoRow>
            </MockupWrapper>
            <ProjectSectionTitle>
              Outcomes
            </ProjectSectionTitle>
            <BodyText>
              With this project, Hausily was now able to ramp up their recruiting efforts and hire outside of the Cogo affiliation! They were also able to contact and attract investors beyond the the Cogo affiliation. Overall, this project enabled Hausily to be and feel like the independent company they are.
            </BodyText>
          <ViewMoreProjects />
          </ProjectPageWrapper>
        </PageTransition>
        )
      }}
      </Transition>
      </TransitionGroup>
  )
}

export default Hausily;
