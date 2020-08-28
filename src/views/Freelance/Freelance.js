import React, { useEffect } from 'react';
import { ProjectPageWrapper } from '../projectpage_theme';
import { ProjectWIP } from '../../components/ProjectWIP';
import { ViewMoreProjects } from '../../components/ViewMoreProjects';

export const Freelance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectPageWrapper>
      <ProjectWIP />
      <ViewMoreProjects />
    </ProjectPageWrapper>
  )
}

export default Freelance;