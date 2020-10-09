import React from 'react';
import Zoom from 'react-medium-image-zoom';
import './ImageZoomStyles.css';
import styled from 'styled-components';

const ImagePreview = styled.img`
  object-position: top;
  width: 100%;
  object-fit: cover;
  height: 100%;
  margin-bottom: 25px;
  max-height: 80vh;
  object-position: center;
`;

const Test = styled.div`
  ${(props) => (props.columns) || `width: 100%`};
`;

export const ImageZoom = (props) => {
  return (
    <Test columns={props.columns}>
      <Zoom>
        <ImagePreview src={props.src} />
      </Zoom>
    </Test>
  )
}

export default ImageZoom;
