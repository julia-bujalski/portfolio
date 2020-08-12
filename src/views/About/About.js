import React, { useEffect } from 'react';
import { PageHeadline, BodyText, PageWrapper } from '../../theme';
import {
  Headshot,
  AboutPageHero,
  AboutContent,
  AboutPageEmph
} from './About.styles'

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageWrapper>
      <AboutPageHero>
        <AboutContent>
          <PageHeadline>cheers!</PageHeadline>
          <BodyText>Hi, I'm Julia.</BodyText>
          <BodyText>
            I'm a currently a <span>UI/UX Designer at Minerva Analytics</span> and a 2018 graduate of Emmanuel College with a <span>degree in Mathematics and Graphic Design.</span> 
          </BodyText>
          <BodyText>
            I started getting into web design during an internship at Cogo labs during the summer of my junior year of college. This was a great way for me to combine the art and technical sides of my brain into a constructive, professional career path. While working in web development, I've ventured into front end development - constantly interested in asking myself questions and finding the answers. I'm a bit impulsive, overly empathetic, and intense but it drives my need to solve problems and create.
          </BodyText>
          <AboutPageEmph>
            I should insert something about how I like other things besides web design, not quite sure how to phrase it.
          </AboutPageEmph>
        </AboutContent>
        <Headshot src="https://freight.cargo.site/w/698/q/94/i/1aefa034fe9721f660ad715df778885fcffc4ed7721367a27b58f3a251aa24ec/IMG_1662.png" />
      </AboutPageHero>
    </PageWrapper>
  )
}

export default About;
