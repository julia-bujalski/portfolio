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
                  I'm a 2018 graduate of Emmanuel College with a <span>degree in Mathematics and Graphic Design,</span> currently a <span>UI/UX Designer at Minerva Analytics</span>
                </BodyText>
                <BodyText>
                  I started getting into web design during an internship at Cogo Labs during the summer of my junior year of college. I enjoyed finding the intersection of the artistic and technical sides of my brain towards a constructive, professional career path. While working in web development, I've ventured into email design, front end development, marketing design, and product ideation. Outside of web development, I enjoy watercolor illustration, printmaking, and am always looking to try new art mediums.
                </BodyText>
                <AboutPageEmph>
                  Outside of work, you can find me hiking, cat sitting, or enjoying a glass pinot grigio in a grass field.
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
