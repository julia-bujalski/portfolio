import React, { useEffect } from 'react';
import { PageHeadline, BodyText, PageWrapper } from '../../theme';

export const Misfits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      <PageHeadline>
        Misfits
      </PageHeadline>
      <BodyText>
        Collection of sketches, creative vomit, and other odds & ends.
      </BodyText>
    </PageWrapper>
  )
}

export default Misfits;
