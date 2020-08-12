import React from 'react';
import { SectionTitle, PageWrapper  } from '../../theme';
import { ProjectLink, LinkWrapper } from './ViewMoreProjects.styles'

export const ViewMoreProjects = () => {
  return (
    <PageWrapper>
      <SectionTitle>
        View more projects
      </SectionTitle>
      <LinkWrapper>
        <ProjectLink to="/connections">Connections</ProjectLink>
        <ProjectLink to="/hausily">Hausily</ProjectLink>
        <ProjectLink to="/introspection">Introspection</ProjectLink>
        <ProjectLink to="/quickscope">Quickscope</ProjectLink>
        <ProjectLink to="/spectra">Spectra</ProjectLink>
        <ProjectLink to="/starlies">Starlies</ProjectLink>
      </LinkWrapper>
    </PageWrapper>
  )
}

export default ViewMoreProjects;