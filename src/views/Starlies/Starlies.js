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
  SubtitleText,
  MockupWrapper,
  ChallengeSolutionWrapper,
  JourneyText,
  ProjectImage,
  Columns2,
  Columns3,
} from '../projectpage_theme.js';
import { NavMockupImageLeft, NavMockupImageRight, ConfirmationFunnelWrapper } from './Starlies.styles.js';
import CompatibilityCalculatorPromo from '../../assets/starlies/compcalc_promo.png';
import CompatibilityCalculatorMockup from '../../assets/starlies/compatibility_calculator.png';
import MoonQuote from '../../assets/starlies/moon_quote.png';
import SignSpecificAd from '../../assets/starlies/signspecific_ad.png';
import NewsletterMockUp from '../../assets/starlies/starlies_newslettermockup.png';
import ScreensMockup from '../../assets/starlies/starlies_screens_mockup.png';
import NavigationMobile from '../../assets/starlies/navigation_mobile.png';
import NavigationDesktop from '../../assets/starlies/navigation_desktop.png';
import SiteMap from '../../assets/starlies/sitemap.png';
import EmailControl from '../../assets/starlies/email_control.png';
import EmailVariation from '../../assets/starlies/email_variation.png';
import LandingPage from '../../assets/starlies/landingpage.png';
import SignUpModal from '../../assets/starlies/signup_modal.png';

import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import { PhoneScrollMockUp } from '../../components/PhoneScrollMockUp';
import ImageZoom from '../../components/ImageZoom';

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
                <BodyText>Minerva Analytics</BodyText>
                <ProjectText>
                  <BodyText>
                    A horoscope and astrology website
                  </BodyText>
                </ProjectText>
              </ProjectTitleWrapper>
              <FeaturedImage src={ScreensMockup} />
            </FeaturedWrapper>
            <ProjectPageWrapper>
            <ProjectSectionTitle>Introduction</ProjectSectionTitle>
            <BodyText>
              I was brought onto the Starlies team when it was a successful, simple site that hosted daily horoscopes and delivered a daily horoscope newsletter. The underlying thread of our efforts was to increase our userbase and revenue through supplementary astrology content and optimizing the site experience. Check out the live site at <a href="https://www.starlies.com" target="_blank" rel="noopener noreferrer">starlies.com</a>.
            </BodyText>
            <ChallengeSolutionWrapper>
              <JourneyText>
                <SectionTitle>Challenge</SectionTitle>
                <BodyText>
                  How do you ramp up a site that already has a consistent, trustworthy user base and stable revenue and no obvious areas for growth? 
                </BodyText>
              </JourneyText>
              <JourneyText>
                <SectionTitle>Solution</SectionTitle>
                <BodyText>
                  Conduct user testing to gauge the users interest and aggresively test the current product to optimize the user experience while driving traffic through paid ad campaigns. 
                </BodyText>
              </JourneyText>
            </ChallengeSolutionWrapper>
            <ProjectSectionTitle>Sitemap</ProjectSectionTitle>
            <BodyText>
              Initially when we started trying to build out Starlies, we were treating the supplementary information as separate features. After noticing this disconnect, we focused greately on site maps and the user's flow through the site rather just the users interactions within a single feature.  
            </BodyText>
            <PhotoRow>
              <ProjectImage src={SiteMap} />
            </PhotoRow>
            <ProjectSectionTitle>Confirmation email AB testing</ProjectSectionTitle>
            <BodyText>
              When combing through the user experience, we noticed a relatively low confirmation rate. We value double opt in users so increasing this confirmation rate would be instrumental to growing the product and product revenue. Below, you'll see the (then) current confirmation email on the left and the variation leg of the test on the right. The design approach was the reduce the amount of noise in both copy and visual elements to clearly tell the user what is needed to be done.
              </BodyText>
            <MockupWrapper backgroundColor={YellowBackground}>
              <ConfirmationFunnelWrapper>
                <ImageZoom columns={Columns3} src={EmailControl} />
                <ImageZoom columns={Columns3} src={EmailVariation} />
              </ConfirmationFunnelWrapper>
            </MockupWrapper>
            <BodyText>
              We used the confirmation rate as our success metric and closely monitored week 0 to week 1 user retention for any obscure drops or changes. I design and coded this email sa well as worked closely with analysts in the set up and monitoring of this test. <strong>In the end, the variation leg had an 8% higher confirmation rate</strong> showing how small design changes and email code changes can have a large impact in user behvaior and email deliverability. 
            </BodyText>
            <ProjectSectionTitle id="landing-page">Sign up flow testing</ProjectSectionTitle>
            <BodyText>
              At the time, Starlies was gaining most of it's visitors and sign ups through facebook campaigns that sent users to an <a href="https://www.starlies.com/#signup" target="_blank" rel="noopener noreferrer">immediate sign up wall</a>. The goal of this test was to understand how user behavior would change if we sent them to a <a href="https://www.starlies.com/signup" target="_blank" rel="noopener noreferrer">landing page</a>.
            </BodyText>
            <PhotoRow>
              <ImageZoom columns={Columns2} src={SignUpModal} />
              <ImageZoom columns={Columns2} src={LandingPage} />
            </PhotoRow>
            <BodyText>
              The goal was to keep the language similar - the text in the modal is included in the landing page - but the landing page focuses on showcasing the value add of Starlies. Visually, I used the yellow as an accent color instead of a background color to let the text and product mock up draw the user in. This marketing test ran for a week and we used sign ups per ad clicks as the success metric. The landing page produced <strong>1.6% more sign ups</strong> and a <strong>$0.12 lower customer acquisition cost</strong>. 
            </BodyText>
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
                  How can we get users to stay on site for longer than the, on average, 65 seconds it takes for them to read their horoscope? How can we increase organic traffic?
                </BodyText>
              </JourneyText>
              <JourneyText>
                <SectionTitle>Solution</SectionTitle>
                <BodyText>
                  Add a feature that encourages user interaction beyond reading text. Tap into keyword rich features and with the help of SEM analysts.
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
            <ProjectSectionTitle>Ad campaigns </ProjectSectionTitle>
            <BodyText>
              These ads, among numerous others, were created when working with marketing analysts for both paid and unpaid social efforts. They were used to promote features, test out new content types like quotes, and targeting efforts.
            </BodyText>
            <PhotoRow>
              <ImageZoom columns={Columns3} src={CompatibilityCalculatorPromo} />
              <ImageZoom columns={Columns3} src={MoonQuote} />
              <ImageZoom columns={Columns3} src={SignSpecificAd} />
            </PhotoRow>
            <ProjectSectionTitle>Newsletter mockup</ProjectSectionTitle>
            <SubtitleText>Scroll through an edition of <strong>Starlies</strong></SubtitleText>
            <MockupWrapper backgroundColor={YellowBackground}>
              <PhoneScrollMockUp mockup={NewsletterMockUp} />
            </MockupWrapper>
            <ProjectSectionTitle>Outcomes</ProjectSectionTitle>
            <BodyText>
              While working on Starlies, I was able to work very closely with engineers and analysts to enhance try and enhance this project. This gave me a deeper look into the foundation of product testing and front end development. I was able to build skills to stronger testing, such as understanding our success metric and testing strategy before designing and following results that were statistically significant. I was also able to enhance my ReactJS experience. Prior to this project, I had worked lightly in React but with Starlies, I was given the opportunity to code entire features and experiment with Redux. In the end, my work on Starlies has increased an <strong>80% increase in weekly revenue</strong> and a <strong>150% increase in weekly retained first party users</strong>. 
            </BodyText>
          <ViewMoreProjects UI />
        </ProjectPageWrapper>
      </PageTransition>
      )
    }}
    </Transition>
    </TransitionGroup>
  )
}

export default Starlies;
