import React, { useEffect } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { ProjectPreview } from '../../components/ProjectPreview';
import { Contact } from '../../components/Contact';
import { HeroSlideshow } from '../../components/HeroSlideshow';

import StarliesThumbnail from '../../assets/starlies/starlies.png';
import HausilyThumbnail from '../../assets/hausily/hausily.png';
import QuickscopeThumbnail from '../../assets/quickscope/quickscope_mockup.png';
import BackThenHistoryThumbnail from '../../assets/bth/bth.png';
import Product2 from '../../assets/spectra/product2.png';

import { ProjectsGrid } from './Home.styles';
import {
  SectionTitle,
  ContentWrapper,
  BodyText,
  PageTransition
} from '../../theme';

const FeaturedWork = () => {
  return (
    <>
      <SectionTitle id="work">Featured Work</SectionTitle>
      <ProjectsGrid>
        <ProjectPreview 
            projectPath="/hausily"
            thumbnail={HausilyThumbnail}
            title="Hausily"
            medium="Branding & UI/UX design"
          />
        <ProjectPreview 
          projectPath="/spectra"
          thumbnail={Product2}
          title="Cogo Spectra"
          medium="Branding & print design"
        />
        <ProjectPreview 
          projectPath="/quickscope"
          thumbnail={QuickscopeThumbnail}
          title="Quickscocpe"
          medium="Email design & front end development"
        />
        <ProjectPreview 
          projectPath="/introspection"
          thumbnail="https://freight.cargo.site/w/1260/q/94/i/b69408e5823e0446764e93caefbe15b2a00cabe474d71a8dfc4008c5f2e2efb7/booklet.png"
          title="Introspection"
          medium="Mixed media typographic sculpture"
        />
        <ProjectPreview 
          projectPath="/starlies"
          thumbnail={StarliesThumbnail}
          title="Starlies"
          medium="Product, marketing, & UX design"
        />
        <ProjectPreview 
          projectPath="/backthenhistory"
          thumbnail={BackThenHistoryThumbnail}
          title="BackThenHistory"
          medium="Branding, site, marketing, & email design"
        />
        <BodyText style={{paddingTop: `0px`, textAlign: `right`, width: `100%`}}>
          <Link to='/misfits'>
            Check out the rest of my work >
          </Link>
        </BodyText>
      </ProjectsGrid>
    </>
  )
}

export const Home = ({ in: inProp }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <TransitionGroup appear exit={false}>
    <Transition>
    {(state) => {
      return (
        <PageTransition state={state}>
          <HeroSlideshow />
          <ContentWrapper>
            <FeaturedWork />
          </ContentWrapper>
          <ContentWrapper>
            <Contact />
          </ContentWrapper>
          <ContentWrapper>
            <SectionTitle>Cheers!</SectionTitle>
          </ContentWrapper>
        </PageTransition>
      )
    }}
    </Transition>
    </TransitionGroup>
  )
}

export default Home;