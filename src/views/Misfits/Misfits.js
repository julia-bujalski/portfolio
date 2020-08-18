import React, { useEffect } from 'react';
import { PageHeadline, BodyText, PageWrapper } from '../../theme';
import {
  PhotoRow,
  ProjectImageB,
} from '../Introspection/Introspection.styles';
import ScribblesFramed from '../../assets/scribbles_framed.jpg';
import EyeStretch from '../../assets/misfits/eye_lino.png';
import FaceLitho from '../../assets/misfits/face_litho.png';
import HandWoodcut from '../../assets/misfits/hand_woodcut.png';
import HandFeetLino from '../../assets/misfits/handfeet_lino.png';

export const Misfits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      <PageHeadline>
        Misfits
      </PageHeadline>
      <BodyText style={{paddingBottom: `25px`}}>
        Collection of sketches, creative vomit, and other odds & ends.
      </BodyText>
      <PhotoRow>
        <ProjectImageB src={ScribblesFramed} />
        <ProjectImageB src={FaceLitho} />
        <ProjectImageB src={HandWoodcut} />
      </PhotoRow>
      <PhotoRow>
        <ProjectImageB src={HandFeetLino} />
        <ProjectImageB src={EyeStretch} />
      </PhotoRow>
    </PageWrapper>
  )
}

export default Misfits;
