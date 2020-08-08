import React from 'react';
import { ProjectPreview } from '../../components/ProjectPreview';
import { Contact } from '../../components/Contact';
import StarliesThumbnail from '../../assets/starlies.png';
import SpectraThumbnail from '../../assets/spectra_banner.jpg';
import HausilyThumbnail from '../../assets/hausily.png';
import IntrospectionThumbnail from '../../assets/introspection.png';
import ConnectionsThumbnail from '../../assets/sharpie_watercolor.png';
import QuickscopeThumbnail from '../../assets/quickscope_mockup.png';
import { SectionTitle, ContentWrapper, BodyText } from '../../theme';
import {
  HeroTitle,
  HeroWrapper,
  PageContentWrapper,
  HomeText,
  HeroContentWrapper,
  ProjectsGrid,
} from './Home.styles'

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContentWrapper>
        <HeroTitle>
          hi! I'm julia bujalski
        </HeroTitle>
        <HomeText>
          Cambridge, MA based web designer currently working at Minerva Analytics
        </HomeText>
      </HeroContentWrapper>
    </HeroWrapper>
  )
}

const FeaturedWork = () => {
  return (
    <>
      <SectionTitle id="work">Featured Work</SectionTitle>
      <ProjectsGrid>
        <ProjectPreview 
          projectPath="/starlies"
          thumbnail={StarliesThumbnail}
          title="Starlies"
          medium="Product, marketing, and UX design"
        />
        <ProjectPreview 
          projectPath="/spectra"
          thumbnail={SpectraThumbnail}
          title="Cogo Spectra"
          medium="Branding & print design"
        />
        <ProjectPreview 
          projectPath="/hausily"
          thumbnail={HausilyThumbnail}
          title="Hausily"
          medium="Branding & UI/UX design"
        />
        <ProjectPreview 
          projectPath="/connections"
          thumbnail={ConnectionsThumbnail}
          title="Connection Exploration"
          medium="Watercolor & pen illustartion"
        />
        <ProjectPreview 
          projectPath="/quickscope"
          thumbnail={QuickscopeThumbnail}
          title="Quickscocpe"
          medium="Email design & front end development"
        />
        <ProjectPreview 
          projectPath="/introspection"
          thumbnail={IntrospectionThumbnail}
          title="Introspection"
          medium="Mixed media typographic sculpture"
        />
      </ProjectsGrid>
    </>
  )
}

export const Home = () => {
  return (
    <>
      <Hero />
      <ContentWrapper>
        <FeaturedWork />
      </ContentWrapper>
      <ContentWrapper>
        <Contact />
      </ContentWrapper>
      <ContentWrapper>
        <SectionTitle>Cheers!</SectionTitle>
      </ContentWrapper>
    </>
  )
}

export default Home;