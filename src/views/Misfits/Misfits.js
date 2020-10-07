import React, { useEffect } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { PageHeadline, BodyText, PageTransition } from '../../theme';
import {
  PhotoRow,
  ProjectSectionTitle,
  ProjectPageWrapper,
  SubtitleText
} from '../projectpage_theme.js';
import ScribblesFramed from '../../assets/scribbles_framed.png';
import EyeStretch from '../../assets/misfits/eye_lino.png';
import FaceLitho from '../../assets/misfits/face_litho.png';
import HandWoodcut from '../../assets/misfits/hand_woodcut.png';
import HandFeetLino from '../../assets/misfits/handfeet_lino.png';
import PurpleSquish from '../../assets/misfits/purple_squish.png';
import BerkshireProject from '../../assets/misfits/berkshire_project_logo.png';

import { ProjectPreview } from '../../components/ProjectPreview';
import ImageZoom from '../../components/ImageZoom';
import MinervaThumbnail from '../../assets/minerva/thumbnail_mockup.png';
import StarliesThumbnail from '../../assets/starlies/starlies.png';
import HausilyThumbnail from '../../assets/hausily/hausily.png';
import QuickscopeThumbnail from '../../assets/quickscope/quickscope_mockup.png';
import BackThenHistoryThumbnail from '../../assets/bth/bth.png';
import { ProjectsGrid } from '../Home/Home.styles';
import Product2 from '../../assets/spectra/product2.png';
import IntrospectionThumbnail from '../../assets/introspection/gallerybook_booklets.png';

export const Misfits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TransitionGroup appear exit={false}>
      <Transition>
      {(state) => {
        return (
          <PageTransition state={state}>
            <ProjectPageWrapper>
              <PageHeadline>
                all work
              </PageHeadline>
              <BodyText>
                Collection of logos, sketches, and other projets made along the way. Select a project to learn more.
              </BodyText>
              <ProjectSectionTitle style={{paddingTop: `40px`}}>
                UI/UX Projects
              </ProjectSectionTitle>
              <ProjectsGrid>
                <ProjectPreview 
                  projectPath="/hausily"
                  thumbnail={HausilyThumbnail}
                  title="Hausily"
                  medium="Branding & UI/UX design"
                />
                <ProjectPreview 
                  projectPath="/starlies"
                  thumbnail={StarliesThumbnail}
                  title="Starlies"
                  medium="Product, marketing, & UX design"
                />
                <ProjectPreview 
                  projectPath="/minerva"
                  thumbnail={MinervaThumbnail}
                  title="Minerva Analytics"
                  medium="Branding & site design exercise"
                />
              </ProjectsGrid>
              <ProjectSectionTitle style={{paddingTop: `0px`}}>Email Design and Development</ProjectSectionTitle>
              <ProjectsGrid>
                <ProjectPreview 
                    projectPath="/quickscope"
                    thumbnail={QuickscopeThumbnail}
                    title="Quickscocpe"
                    medium="Email design & front end development"
                  />
                  <ProjectPreview 
                    projectPath="/backthenhistory"
                    thumbnail={BackThenHistoryThumbnail}
                    title="Back Then History"
                    medium="Branding, site, marketing, & email design"
                  />
                <ProjectPreview placeholder />
              </ProjectsGrid>
              <ProjectSectionTitle>Print Design</ProjectSectionTitle>
              <ProjectsGrid>
                <ProjectPreview 
                  projectPath="/spectra"
                  thumbnail={Product2}
                  title="Cogo Spectra"
                  medium="Branding & print design"
                />
                <ProjectPreview 
                  projectPath="/introspection"
                  thumbnail={IntrospectionThumbnail}
                  title="Introspection"
                  medium="Mixed media typographic sculpture"
                />
                <ProjectPreview placeholder />
              </ProjectsGrid>
              <ProjectSectionTitle>Logos</ProjectSectionTitle>
                <SubtitleText>Select a logo to zoom in</SubtitleText>
              <PhotoRow>
                <ImageZoom src="https://media.git.cogolo.net/user/430/files/25433e80-beb6-11e9-9855-08af6f18e344" />
                <ImageZoom src="https://media.git.cogolo.net/user/430/files/1dc44880-b2ad-11e9-968e-09c766284392" />
                <ImageZoom src="https://media.git.cogolo.net/user/430/files/b412721c-6eed-11e8-8b96-d78bd63adc14" />
                <ImageZoom src={BerkshireProject} />
              </PhotoRow>
              <ProjectSectionTitle>Studio pieces</ProjectSectionTitle>
              <SubtitleText>Select a piece to zoom in</SubtitleText>
              <PhotoRow>
                <ImageZoom src={ScribblesFramed} />
                <ImageZoom src={HandFeetLino} />
                <ImageZoom src={EyeStretch} />
              </PhotoRow>
              <PhotoRow>
                <ImageZoom src={FaceLitho} />
                <ImageZoom src={HandWoodcut} />
                <ImageZoom src={PurpleSquish} />
              </PhotoRow>
            </ProjectPageWrapper>
          </PageTransition>
          )
      }}
      </Transition>
      </TransitionGroup>
  )
}

export default Misfits;
