import styled from 'styled-components';
import { BLACK } from '../../theme';
import { Link } from 'react-router-dom';

export const Thumbnail = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;

  @media only screen and (max-width: 620px) {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

export const PreviewWrapper = styled(Link)`
  position: relative;
  width: 30%;
  margin-bottom: 50px;
  color: ${BLACK};

  &:hover img {
    transform: scale (1.3);
  }

  @media screen and (max-width: 620px) {
    margin: 15px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 3px;
  left: 0;
  right: 0;
  height: 250px;
  width: 100%;
  opacity: 0;
  transition: .3s ease;
  background-color: rgba(255, 255, 255, .85);
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const PreviewText = styled.div`
  color: ${BLACK};
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  width: 80%;
`;

export const Title = styled.div`
  font-family: 'Open Sans', serif;
  line-height: 1.3;
  letter-spacing: 1;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 5px;
`;

export const Medium = styled.div`
  font-family: 'Open Sans', serif;
  font-size: 12px;
`;