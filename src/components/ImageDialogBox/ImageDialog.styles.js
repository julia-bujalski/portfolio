import styled from 'styled-components';

export const BackgroundOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.25);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const EnlargedImage = styled.img`
  width: 100%;
  max-width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;