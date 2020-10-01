import React from 'react';
import { SectionTitle  } from '../../theme';
import { ProjectLink, LinkWrapper, ViewMoreWrapper } from './ViewMoreProjects.styles'

const UIProjects = () => {
  return (
    <React.Fragment>
      <ProjectLink to="/backthenhistory">Back Then History</ProjectLink>
      <ProjectLink to="/hausily">Hausily</ProjectLink>
      <ProjectLink to="/minerva">Minerva Analytics</ProjectLink>
      <ProjectLink to="/quickscope">Quickscope</ProjectLink>
      <ProjectLink to="/starlies">Starlies</ProjectLink>
    </React.Fragment>
    )
}

const StudioProjects = () => {
  return (
    <React.Fragment>
      <ProjectLink to="/connections">Connections</ProjectLink>
      <ProjectLink to="/freelance">Freelance</ProjectLink>
      <ProjectLink to="/introspection">Introspection</ProjectLink>
      <ProjectLink to="/spectra">Spectra</ProjectLink>
    </React.Fragment>
  )
}

export const ViewMoreProjects = (props) => {
  return (
    <ViewMoreWrapper>
      <SectionTitle>
        View similar projects
      </SectionTitle>
      <LinkWrapper>
        { props.UI ? <UIProjects /> : <StudioProjects />}
      </LinkWrapper>
    </ViewMoreWrapper>
  )
}

export default ViewMoreProjects;
