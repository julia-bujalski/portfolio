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
`;

export const ImageZoom = (props) => {
  return (
    <Zoom>
      <ImagePreview src={props.src} />
    </Zoom>
  )
}

export default ImageZoom;
