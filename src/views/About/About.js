import React, { useEffect } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { Contact } from '../../components/Contact';
import { PageHeadline, BodyText, PageTransition } from '../../theme';
import AboutHeadshot from '../../assets/about_photo.png';
import {
  Headshot,
  AboutPageHero,
  AboutPageEmph,
  AboutPageWrapper
} from './About.styles'

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <TransitionGroup appear exit={false}>
      <Transition>
      {(state) => {
        return (
          <PageTransition state={state}>
          <AboutPageWrapper>
            <PageHeadline>cheers!</PageHeadline>
            <AboutPageHero>
              <Headshot src={AboutHeadshot} />
              <div>
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
              </div>
            </AboutPageHero>
            <Contact />
          </AboutPageWrapper>
          </PageTransition>
        )
      }}
      </Transition>
    </TransitionGroup>
  )
}

export default About;
