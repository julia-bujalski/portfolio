import React from 'react';
import { SectionTitle  } from '../../theme';
import { ProjectLink, LinkWrapper, ViewMoreWrapper } from './ViewMoreProjects.styles'

export const ViewMoreProjects = () => {
  return (
    <ViewMoreWrapper>
      <SectionTitle>
        View more projects
      </SectionTitle>
      <LinkWrapper>
        <ProjectLink to="/backthenhistory">Back Then History</ProjectLink>
        <ProjectLink to="/connections">Connections</ProjectLink>
        <ProjectLink to="/hausily">Hausily</ProjectLink>
        <ProjectLink to="/introspection">Introspection</ProjectLink>
        <ProjectLink to="/minerva">Minerva Analytics</ProjectLink>
        <ProjectLink to="/quickscope">Quickscope</ProjectLink>
        <ProjectLink to="/spectra">Spectra</ProjectLink>
        <ProjectLink to="/starlies">Starlies</ProjectLink>
      </LinkWrapper>
    </ViewMoreWrapper>
  )
}

export default ViewMoreProjects;