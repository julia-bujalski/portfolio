import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Transition, TransitionGroup } from 'react-transition-group';
import { PageHeadline, SectionTitle, BodyText, PageTransition } from '../../theme';
import {
  FeaturedImage,
  FeaturedWrapper,
  ProjectPageWrapper,
  ProjectTitleWrapper,
  PhotoRow,
  ProjectImageB,
  ProjectSectionTitle,
  SubtitleText,
  MockupWrapper,
  ChallengeSolutionWrapper,
  JourneyText,
  FullSizedProjectImage
} from '../projectpage_theme.js';
import QuickscopeArticleA from '../../assets/quickscope/quickscope_articleA.png';
import QuickscopeArticleB from '../../assets/quickscope/quickscope_articleB.png';
import QuickscopeFacebook from '../../assets/quickscope/quickscope_facebook.png';
import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import NewsletterMockUp from '../../assets/mockup.png';
import { PhoneScrollMockUp } from '../../components/PhoneScrollMockUp';
import ScreensMockup from '../../assets/quickscope/quickscope_screens_mockup.png';
import NewsletterProcess from '../../assets/quickscope/newsletter_process.png';

const GreenBackground = `#D5FCE2`;
const ResponsiveGif = styled.img`
  margin: 0 auto;
  width: 100%;
`;

export const Quickscope = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TransitionGroup appear exit={false}>
      <Transition>
      {(state) => {
        return (
          <PageTransition state={state}>
            <FeaturedWrapper backgroundColor={GreenBackground}>
              <ProjectTitleWrapper>
                <SectionTitle>Email design & front end development</SectionTitle>
                <PageHeadline>Quickscope</PageHeadline>
                <BodyText>Minerva Analytics</BodyText>
                <BodyText>A daily gaming newsletter</BodyText>
              </ProjectTitleWrapper>
              <FeaturedImage src={ScreensMockup} />
              </FeaturedWrapper>
            <ProjectPageWrapper>
              <ProjectSectionTitle>Introduction</ProjectSectionTitle>
              <BodyText>
                I supported Quickscope, the daily video gaming newsletter, as a designer at Minerva Analytics. I created the email design, social graphics, and helped support development of the site with ReactJS styled components. Check out the live site at <a href="https://thequickscope.com" target="_blank" rel="noopener noreferrer">thequickscope.com</a>
              </BodyText>
              <ChallengeSolutionWrapper>
                <JourneyText>
                  <SectionTitle>Challenge</SectionTitle>
                  <BodyText>
                    The current newsletter is difficult to read, does not feel editorial, and doesn't feel cohesive with the current site branding.
                  </BodyText>
                </JourneyText>
                <JourneyText>
                  <SectionTitle>Solution</SectionTitle>
                  <BodyText>
                    Restructure the newsletter order based on user data and reduce decorative visual elements to help users digest their daily gaming news more efficiently.
                  </BodyText>
                </JourneyText>
              </ChallengeSolutionWrapper>
              <ProjectSectionTitle>Newsletter Design Process</ProjectSectionTitle>
              <BodyText>
                  Below, you'll see the process from previous newsletter, whiteboarding, to final mock ups. With this brainstorming and design, I focused greatly on text hierarchy and a clean, consistent color scheme. These design decisions were used to make the newsletter feel cohesive and more professional. We also added the category tags, such as "REVIEW" or "UPDATE", to increase the skimmability of the newsletter. This was a goal from users based on surveys and was something lacking in our old design. We also wanted to add a personalized aspect to the newsletter. We have writers in house creating these descriptions everyday and we want to make that known! To do this, we added a sign off section to connect deeper with the readers of Quickscope.
                </BodyText>
              <PhotoRow backgroundColor={GreenBackground}>
                <FullSizedProjectImage src={NewsletterProcess} />
              </PhotoRow>
              <BodyText>
                The readers of quickscope are about 35% desktop and 75% mobile. The old design was addressed with a mobile first approach <i>but</i> was not that readable on desktop. Because of this, I prioritized responsivity when coding the new email design. These emails are sent using in house infastructure so I coded this using raw HTML. <a href="https://medium.com/@thequickscope/welcome-to-quickscope-2-0-f964d75009da" target="_blank" rel="noopener noreferrer">Click here to read more about the launch of the new newsletter and the collaboration that went into it.</a>
              </BodyText>
              <PhotoRow>
                <ResponsiveGif src="https://miro.medium.com/max/1200/1*ihXYZC0axCjZKiocLHIHsQ.gif" />
              </PhotoRow>
              <ProjectSectionTitle>Final Newsletter Design</ProjectSectionTitle>
              <SubtitleText>Scroll through an issue of <strong>Quickscope</strong></SubtitleText>
              <MockupWrapper backgroundColor={GreenBackground}>
                <PhoneScrollMockUp mockup={NewsletterMockUp} />
              </MockupWrapper>
              <ProjectSectionTitle>
                Outcomes
              </ProjectSectionTitle>
              <BodyText>
                With this test, we saw a <strong>68% increase in week over week retention</strong>. As an early newsletter, these retained users are essential for understanding user goals and how we can better help them reach these goals. In addition to these metrics, this email redesign created a more standardized design system for ease of adding more sections and a more cohesive brand overall. 
              </BodyText>
              <ProjectSectionTitle>Ad campaigns</ProjectSectionTitle>
              <BodyText>
                In addition to working on the newsletter, I've worked closely with the marketing team to create Facebook marketing campaigns to drive traffic to the site and continue to gain sign ups.
              </BodyText>
              <PhotoRow>
                <ProjectImageB src={QuickscopeArticleA} />
                <ProjectImageB src={QuickscopeArticleB} />
                <ProjectImageB src={QuickscopeFacebook} />
              </PhotoRow>
            <ViewMoreProjects UI />
          </ProjectPageWrapper>
          </PageTransition>
          )
      }}
      </Transition>
      </TransitionGroup>
  )
}

export default Quickscope;
