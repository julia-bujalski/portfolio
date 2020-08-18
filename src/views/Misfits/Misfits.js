import React, { useEffect } from 'react';
import { PageHeadline, BodyText, PageWrapper } from '../../theme';
import {
  PhotoRow,
  ProjectImageB,
} from '../Introspection/Introspection.styles';
import ScribblesFramed from '../../assets/scribbles_framed.jpg';

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
      </PhotoRow>
    </PageWrapper>
  )
}

export default Misfits;
