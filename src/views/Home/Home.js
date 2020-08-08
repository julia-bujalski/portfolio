import React from 'react';
import {
  HeroTitle,
  HeroWrapper,
  PageContentWrapper,
  HeroSubtitle
} from './Home.styles'

const Hero = () => {
  return (
    <HeroWrapper>
      <PageContentWrapper>
        <HeroTitle>
          hi! I'm julia bujalski, boston based web designer currently working at minerva analytics.
        </HeroTitle>
        <HeroSubtitle>
          This site is currently under construction. Thanks for bearing with this creative vomit.
        </HeroSubtitle>
      </PageContentWrapper>
    </HeroWrapper>
  )
}

export const Home = () => {
  return (
    <Hero />
  )
}

export default Home;