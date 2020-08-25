import React, { useEffect } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { PageHeadline, BodyText, PageTransition } from '../../theme';
import {
  PhotoRow,
  ProjectImageB,
  ProjectSectionTitle,
  ProjectPageWrapper
} from '../projectpage_theme.js';
import ScribblesFramed from '../../assets/scribbles_framed.png';
import EyeStretch from '../../assets/misfits/eye_lino.png';
import FaceLitho from '../../assets/misfits/face_litho.png';
import HandWoodcut from '../../assets/misfits/hand_woodcut.png';
import HandFeetLino from '../../assets/misfits/handfeet_lino.png';
import PurpleSquish from '../../assets/misfits/purple_squish.png';

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
                Further work
              </PageHeadline>
              <BodyText style={{paddingBottom: `25px`}}>
                Collection of logos, sketches, and other projets made along the way.
              </BodyText>
              <ProjectSectionTitle>Logos</ProjectSectionTitle>
              <PhotoRow>
                <ProjectImageB src="https://media.git.cogolo.net/user/430/files/25433e80-beb6-11e9-9855-08af6f18e344" />
                <ProjectImageB src="https://media.git.cogolo.net/user/430/files/1dc44880-b2ad-11e9-968e-09c766284392" />
                <ProjectImageB src="https://media.git.cogolo.net/user/430/files/b412721c-6eed-11e8-8b96-d78bd63adc14" />
              </PhotoRow>
              <ProjectSectionTitle>Studio pieces</ProjectSectionTitle>
              <PhotoRow>
                <ProjectImageB src={ScribblesFramed} />
                <ProjectImageB src={HandFeetLino} />
                <ProjectImageB src={EyeStretch} />
              </PhotoRow>
              <PhotoRow>
                <ProjectImageB src={FaceLitho} />
                <ProjectImageB src={HandWoodcut} />
                <ProjectImageB src={PurpleSquish} />
              </PhotoRow>
              <ProjectSectionTitle>Print materials</ProjectSectionTitle>
            </ProjectPageWrapper>
          </PageTransition>
          )
      }}
      </Transition>
      </TransitionGroup>
  )
}

export default Misfits;
