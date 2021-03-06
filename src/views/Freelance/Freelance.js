import React, { useEffect } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { PageHeadline, SectionTitle, BodyText, PageTransition } from '../../theme';
import {
  FeaturedImage,
  FeaturedWrapper,
  ProjectPageWrapper,
  ProjectTitleWrapper,
  ProjectImage,
  ProjectSectionTitle,
  ChallengeSolutionWrapper,
  PhotoRow,
  Columns3,
  SubtitleText,
} from '../projectpage_theme.js';
import WatercolorHouse from '../../assets/freelance/house_watercolor.png';
import HouseThumbnail1 from '../../assets/freelance/house1.png';
import HouseThumbnail2 from '../../assets/freelance/house2.png';
import HouseThumbnail3 from '../../assets/freelance/house3.png';
import BrockettFarmFull from '../../assets/freelance/brockettfarm_watercolor.png';
import FloorplansMockup from '../../assets/freelance/floorplans_mockup.png';
import BrockettFarm1 from '../../assets/freelance/brockettfarm1.png';
import BrockettFarm2 from '../../assets/freelance/brockettfarm2.png';
import ResumeMockup from '../../assets/freelance/resume_mockup.png';

import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import ImageZoom from '../../components/ImageZoom';

const PeriwinkleBackground = `#f0e4ff`;

export const Freelance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TransitionGroup appear exit={false}>
      <Transition>
      {(state) => {
        return (
          <PageTransition state={state}>
          <FeaturedWrapper backgroundColor={PeriwinkleBackground}>
              <ProjectTitleWrapper>
                <SectionTitle>Mixed Media</SectionTitle>
                <PageHeadline>Freelance Work</PageHeadline>
                <BodyText>Self Employed</BodyText>
                <BodyText>Mediums include watercolor and digital floorplans</BodyText>
                <BodyText>I'm always interested in exploring new freelance projects! Shoot me an email at julia.bujalski@gmail.com to connect.</BodyText>
              </ProjectTitleWrapper>
              <FeaturedImage src={ResumeMockup} />
            </FeaturedWrapper>
          <ProjectPageWrapper>
            <ProjectSectionTitle>
              Watercolor real estate
            </ProjectSectionTitle>
            <SubtitleText>Click image to zoom in</SubtitleText>
            <ChallengeSolutionWrapper>
            <BodyText>
              These pieces were created for a local real estate company. After completing a sale, these pieces were given as gifts to remember their home.
            </BodyText>
            </ChallengeSolutionWrapper>
            <ImageZoom src={WatercolorHouse} />
            <PhotoRow>
              <ImageZoom columns={Columns3} src={HouseThumbnail1} />
              <ImageZoom columns={Columns3} src={HouseThumbnail3} />
              <ImageZoom columns={Columns3} src={HouseThumbnail2} />
            </PhotoRow>
            <PhotoRow>
              <ImageZoom columns={Columns3} src={BrockettFarm1} />
              <ImageZoom columns={Columns3} src={BrockettFarmFull} />
              <ImageZoom columns={Columns3} src={BrockettFarm2} />
            </PhotoRow>
            <ProjectSectionTitle>
              Digital Floorplans for Oak Creek Apartments
            </ProjectSectionTitle>
            <ChallengeSolutionWrapper>
              <BodyText>
                I worked closely with an apartment complex to create more up to date and accurate floor plans for their units. <a href="https://oakcreekatl.com/index.php/oak-creek-floorplans">Check out their site to see the floorplans live!</a>
              </BodyText>
            </ChallengeSolutionWrapper>
            <ProjectImage src={FloorplansMockup} />
            <ViewMoreProjects />
          </ProjectPageWrapper>
          </PageTransition>
          )
      }}
    </Transition>
  </TransitionGroup>
  )
}

export default Freelance;