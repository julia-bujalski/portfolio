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
  ContactEmph,
  ContactInfo,
  ResumePreview,
  ContactWrapper,
  ResumeWrapper,
  ResumeText,
  ResumeLink,
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
      <SectionTitle>Featured Work</SectionTitle>
      <ProjectsGrid>
        <ProjectPreview 
          thumbnail={StarliesThumbnail}
          title="Starlies"
          medium="Product, marketing, and UX design"
        />
        <ProjectPreview 
          thumbnail={SpectraThumbnail}
          title="Cogo Spectra"
          medium="Branding & print design"
        />
        <ProjectPreview 
          thumbnail={HausilyThumbnail}
          title="Hausily"
          medium="Branding & UI/UX design"
        />
        <ProjectPreview 
          thumbnail={ConnectionsThumbnail}
          title="Connection Exploration"
          medium="Watercolor & pen illustartion"
        />
        <ProjectPreview 
          thumbnail={QuickscopeThumbnail}
          title="Quickscocpe"
          medium="Email design & front end development"
        />
        <ProjectPreview 
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