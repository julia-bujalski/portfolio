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
  ProjectSectionTitle,
  SubtitleText,
  MockupWrapper,
  ChallengeSolutionWrapper,
  JourneyText,
  ProjectImage,
} from '../projectpage_theme.js';
import { NavMockupImageLeft, NavMockupImageRight, SignUpModalMockup, ConfirmationFunnelWrapper } from './Starlies.styles.js';
import CompatibilityCalculatorPromo from '../../assets/starlies/compcalc_promo.png';
import CompatibilityCalculatorMockup from '../../assets/starlies/compatibility_calculator.png';
import MoonQuote from '../../assets/starlies/moon_quote.png';
import SignSpecificAd from '../../assets/starlies/signspecific_ad.png';
import NewsletterMockUp from '../../assets/starlies/starlies_newslettermockup.png';
import ScreensMockup from '../../assets/starlies/starlies_screens_mockup.png';
import NavigationMobile from '../../assets/starlies/navigation_mobile.png';
import NavigationDesktop from '../../assets/starlies/navigation_desktop.png';
import SiteMap from '../../assets/starlies/sitemap.png';
import SignUpModalControl from '../../assets/starlies/signupmodal_control.png';
import SignUpModalVariation from '../../assets/starlies/signupmodal_variation.png';
import EmailControl from '../../assets/starlies/email_control.png';
import EmailVariation from '../../assets/starlies/email_variation.png';

import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import { PhoneScrollMockUp } from '../../components/PhoneScrollMockUp';

const YellowBackground="#FFF7BF";

export const Starlies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TransitionGroup appear exit={false}>
      <Transition>
      {(state) => {
        return (
          <PageTransition state={state}>
            <FeaturedWrapper backgroundColor={YellowBackground}>
              <ProjectTitleWrapper>
                <SectionTitle>Product, marketing, and UI/UX design</SectionTitle>
                <PageHeadline>Starlies</PageHeadline>
                <BodyText>Minerva Analytics <br /> January 2020 - Present</BodyText>
                <ProjectText>
                  <BodyText>
                    A horoscope and astrology website.
                  </BodyText>
                </ProjectText>
              </ProjectTitleWrapper>
              <FeaturedImage src={ScreensMockup} />
            </FeaturedWrapper>
            <ProjectPageWrapper>
            <ProjectSectionTitle>Introduction</ProjectSectionTitle>
            <BodyText>
              I worked on the Starlies product in varying degrees during my time at Minerva Analytics. The brand was created by another designer at the company and I supported the development through on site feature design and development, email design & code, social graphics, and user testing amounting to one of the most successful products under in Minerva's media portfolio. The site experience and daily newsletter connects you with horoscopes and other astrological content such as birth charts, celebrity quotes, and moon phases. Check out the live site at <a href="https://www.starlies.com" target="_blank" rel="noopener noreferrer">starlies.com</a>.
            </BodyText>
            <ProjectSectionTitle>Sitemap</ProjectSectionTitle>
              <ProjectImage src={SiteMap} />
            <ProjectSectionTitle>Collapsable navigation</ProjectSectionTitle>
            <ChallengeSolutionWrapper>
              <JourneyText>
                <SectionTitle>Challenge</SectionTitle>
                <BodyText>
                  The only way to get around the site is through clicking different signs through the grid of sign icons. If we want to add pages to the site, theres no clear method of showing that option to the user.
                </BodyText>
              </JourneyText>
              <JourneyText>
                <SectionTitle>Solution</SectionTitle>
                <BodyText>
                  Add an expandable navigation system to increase SEO with appropriate page linking, make the available content clear to the user, and allow for scaling to adding more pages.
                </BodyText>
              </JourneyText>
            </ChallengeSolutionWrapper>
            <PhotoRow>
              <NavMockupImageLeft src={NavigationDesktop} />
              <NavMockupImageRight src={NavigationMobile} />
            </PhotoRow>
            <BodyText>
              Over 70% of Starlies users are mobile so when designing this, I decided to make it always collapsable to decrease development time so that we could iterate on this feature if it was engaging. It was also designed with the intention that we could easily add more page links if necessary. I designed and coded this feature using ReactJS and CSS animations for a light weight, collapsable, navigation system. View the live feature at <a href="https://starlies.com">starlies.com</a>
            </BodyText>
            <ProjectSectionTitle>Compatibility calculator</ProjectSectionTitle>
            <ChallengeSolutionWrapper>
              <JourneyText>
                <SectionTitle>Challenge</SectionTitle>
                <BodyText>
                  How can we get users to stay on site for longer than the, on avergae, 65 seconds it takes for them to read their horoscope? How can we increase organic traffic?
                </BodyText>
              </JourneyText>
              <JourneyText>
                <SectionTitle>Solution</SectionTitle>
                <BodyText>
                  Add a feature that encourages user interaction beyond readingg text. Tap into keyword rich features and with the help of SEM analysts.
                </BodyText>
              </JourneyText>
            </ChallengeSolutionWrapper>
            <MockupWrapper backgroundColor={YellowBackground}>
              <a href="https://www.starlies.com/compatibility-calculator" target="_blank" rel="noopener noreferrer">
                <PhoneScrollMockUp mockup={CompatibilityCalculatorMockup} />
              </a>
            </MockupWrapper>
            <BodyText>This feature was added to Starlies in July 2020 with the goal of increasing time on site and daily active users. I was responsible for the design and development of this feature including structure and styling of the page and calling the API. <a href="https://www.starlies.com/compatibility-calculator" target="_blank" rel="noopener noreferrer"> Click the mock up to visit the site and determine your compatibility! </a>
            </BodyText>
            <ProjectSectionTitle>Confirmation funnel testing</ProjectSectionTitle>
            <BodyText>
              With this effort, I worked closely with analysts and product managers to create intentional languages changes and tests so that we could improve these metrics. These tests were all AB tests with allocating 50% of traffic to the control and 50% to the variation leg.
            </BodyText>
            <ChallengeSolutionWrapper>
              <JourneyText>
                <SectionTitle>Challenge</SectionTitle>
                <BodyText>
                  How do we increase user sign up and confirmation rate so that we are gathering more valuable users through our paid traffic channels?
                </BodyText>
              </JourneyText>
              <JourneyText>
                <SectionTitle>Solution</SectionTitle>
                <BodyText>
                  Test language and visuals within the first two stages of the confirmation funnel - sign up modal and confirmation email - to create meaningful initial reactions so that the users feel connected to Starlies.
                </BodyText>
              </JourneyText>
            </ChallengeSolutionWrapper>
            <SectionTitle>Sign up modal</SectionTitle>
            <BodyText>
              The goal with the variation here, seen on the right, was to remove excess information and draw the users eye directly down towards the input fields. We used user sign ups as our success metric nad continued to monitor confirmation rate.
            </BodyText>
            <MockupWrapper backgroundColor={YellowBackground}>
              <ConfirmationFunnelWrapper>
                <SignUpModalMockup src={SignUpModalControl} />
                <SignUpModalMockup src={SignUpModalVariation} />
              </ConfirmationFunnelWrapper>
            </MockupWrapper>
            <SectionTitle>Confirmation email</SectionTitle>
            <BodyText>
              The variation leg of this test had a similar approach as the sign up modal variation - reduce the amount of noise both in the copy and visually to clearly tell the user what is needed to be done. We used confirmation rate as our success metric and monitored week 0 to week 1 user retention. The variation leg ended up having an 8% higher confirmation rate, showing how the small changes can make a large impact in user behavior.
            </BodyText>
            <MockupWrapper backgroundColor={YellowBackground}>
              <ConfirmationFunnelWrapper>
                <ProjectImageB src={EmailControl} />
                <ProjectImageB src={EmailVariation} />
              </ConfirmationFunnelWrapper>
            </MockupWrapper>
            <ProjectSectionTitle>Ad campaigns </ProjectSectionTitle>
            <BodyText>
              These ads, among numerous others, were created when working with marketing analysts for both paid and unpaid social efforts. They were used to promote features, test out new content types like quotes, and targeting efforts.
            </BodyText>
            <PhotoRow>
              <ProjectImageB src={CompatibilityCalculatorPromo} />
              <ProjectImageB src={MoonQuote} />
              <ProjectImageB src={SignSpecificAd} />
            </PhotoRow>
            <ProjectSectionTitle>Newsletter mockup</ProjectSectionTitle>
            <SubtitleText>Scroll through an edition of <strong>Starlies</strong></SubtitleText>
            <MockupWrapper backgroundColor={YellowBackground}>
              <PhoneScrollMockUp mockup={NewsletterMockUp} />
            </MockupWrapper>
          <ViewMoreProjects />
        </ProjectPageWrapper>
      </PageTransition>
      )
    }}
    </Transition>
    </TransitionGroup>
  )
}

export default Starlies;
