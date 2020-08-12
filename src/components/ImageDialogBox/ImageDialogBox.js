import React from 'react';
import { BackgroundOverlay, EnlargedImage } from './ImageDialog.styles'

export const ImageDialogBox = (props) => {
  return (
    <BackgroundOverlay>
      <EnlargedImage src={props.image} />
    </BackgroundOverlay>
  )
}

export default ImageDialogBox;