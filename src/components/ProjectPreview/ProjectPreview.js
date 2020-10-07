import React from 'react';
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
    <PreviewWrapper to={props.projectPath} placeholder={props.placeholder}>
      {props.thumbnail ? <Thumbnail src={props.thumbnail} /> : null}
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
