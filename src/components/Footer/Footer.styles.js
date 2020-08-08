import styled from 'styled-components';
import { BLACK } from '../../theme';
import HeroBackground from '../../assets/hero_bg.png';

export const FooterWrapper = styled.div`
  bottom: 0;
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  padding: 30px 0px;
  box-sizing: border-box;
  color: ${BLACK};
  font-size: 14px;
  line-height: 2;
  text-align: center;
  margin-top: 100px;
  background: url(${HeroBackground}) no-repeat top;
  background-size: cover;
  background-blend-mode: lighten;
  border: solid 1px rgba(45,52,53,.1);

  a {
    color: ${BLACK};
    font-weight: 600;
  }
`;