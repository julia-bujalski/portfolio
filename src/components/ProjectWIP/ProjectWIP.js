import React from 'react';
import { SectionTitle, BodyText, PageHeadline } from '../../theme';

import { BackLink } from './ProjectWIP.styles';

export const ProjectWIP = () => {
  return (
    <>
      <SectionTitle>
        oops!
      </SectionTitle>
      <PageHeadline>
        You've stumbled into uncharted territory
      </PageHeadline>
      <BodyText>
        This page is currently under construction. Check back soon for updates or each out to <strong>julia.bujalski@gmail.com</strong> for any immediate questions. Thanks for bearing with the creative vomit! 
      </BodyText>
      <br />
      <BackLink to="/">
        Go back to home
      </BackLink>
    </>
  )
}

export default ProjectWIP;
