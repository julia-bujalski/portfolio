import React, { useEffect } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { ProjectPreview } from '../../components/ProjectPreview';
import { Contact } from '../../components/Contact';
import { HeroSlideshow } from '../../components/HeroSlideshow';

import StarliesThumbnail from '../../assets/starlies/starlies.png';
import HausilyThumbnail from '../../assets/hausily/hausily.png';
import QuickscopeThumbnail from '../../assets/quickscope/quickscope_mockup.png';
import BackThenHistoryThumbnail from '../../assets/bth/bth.png';
import Product2 from '../../assets/spectra/product2.png';
import IntrospectionThumbnail from '../../assets/introspection/gallerybook_booklets.png';
import ConnectionsThumbnail from '../../assets/connections/sharpie_watercolor.png';
import MinervaThumbnail from '../../assets/minerva/thumbnail_mockup.png';
import FreelanceThumbnail from '../../assets/freelance/house_watercolor.png';
import WatercolorThumbnail from '../../assets/watercolor/watercolor_product.png';

import { ProjectsGrid, FurtherWorkLink } from './Home.styles';
import {
  SectionTitle,
  ContentWrapper,
  BodyText,
  PageTransition
} from '../../theme';

export const FeaturedWork = (props) => {
  return (
    <>
      {props.allWorkPage ? '' : <SectionTitle id="work">Featured Work</SectionTitle>}
      <ProjectsGrid>
        <ProjectPreview 
            projectPath="/hausily"
            thumbnail={HausilyThumbnail}
            title="Hausily"
            medium="Branding & UI/UX design"
          />
        <ProjectPreview 
          projectPath="/watercolor"
          thumbnail={WatercolorThumbnail}
          title="Watercolor"
          medium="Watercolor & illustration"
        />
        <ProjectPreview 
          projectPath="/quickscope"
          thumbnail={QuickscopeThumbnail}
          title="Quickscocpe"
          medium="Email design & front end development"
        />
        <ProjectPreview 
          projectPath="/spectra"
          thumbnail={Product2}
          title="Cogo Spectra"
          medium="Branding & print design"
        />
        <ProjectPreview 
          projectPath="/starlies"
          thumbnail={StarliesThumbnail}
          title="Starlies"
          medium="Product, marketing, & UX design"
        />
        <ProjectPreview 
          projectPath="/introspection"
          thumbnail={IntrospectionThumbnail}
          title="Introspection"
          medium="Mixed media typographic sculpture"
        />
        <ProjectPreview 
          projectPath="/backthenhistory"
          thumbnail={BackThenHistoryThumbnail}
          title="Back Then History"
          medium="Branding, site, marketing, & email design"
        />
        <ProjectPreview 
          projectPath="/freelance"
          thumbnail={FreelanceThumbnail}
          title="Freelance Work"
          medium="Mixed medium"
        />
        <ProjectPreview 
          projectPath="/minerva"
          thumbnail={MinervaThumbnail}
          title="Minerva Analytics"
          medium="Branding & site design exercise"
        />
        {props.allWorkPage ? '' :
        <BodyText style={{paddingTop: `0px`, textAlign: `right`, width: `100%`}}>
          <FurtherWorkLink to='/allwork'>
            Check out the rest of my work
          </FurtherWorkLink>
        </BodyText>
      }
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