import React from 'react';
import StarliesThumbnail from '../../assets/starlies.png';
import { 
  PreviewWrapper,
  Thumbnail,
  Overlay,
  PreviewText,
  Title,
  Medium,
} from './ProjectPreview.styles'

export const ProjectPreview = (props) => {
  return (
    <PreviewWrapper to={props.projectPath}>
      <Thumbnail src={props.thumbnail} />
      <Overlay>
        <PreviewText>
          <Title>{props.title}</Title>
          <Medium>{props.medium}</Medium>
        </PreviewText>
      </Overlay>
    </PreviewWrapper>
  )
}

export default ProjectPreview;
