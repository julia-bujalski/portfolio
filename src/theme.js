import styled from 'styled-components';

export const BLACK = `#2D3435`;

export const EXTRA_LARGE = `1200px`;
export const LARGE = `992px`;
export const TABLET = `768px`;
export const MOBILE = `576px`;

export const SectionTitle = styled.div`
  font-family: 'Open Sans';
  text-transform: uppercase;
  color: ${BLACK};
  font-size: 24px;
  letter-spacing: 5px;
  font-weight: 600;
  text-align: left;
`;

export const ContentWrapper = styled.div`
  width: 80%;
  margin: 100px auto 0 auto;

  @media only screen and (max-width: ${TABLET}) {
    width: 90%;
  }

  @media only screen and (max-width: ${MOBILE}) {
    width: 100%;
  }
`;

export const BodyText = styled.div`
  color: ${BLACK};
  font-family: 'Open Sans';
  font-weight: Light;
  letter-spacing: 1px;
  line-height: 1.5;
  padding-top: 25px;
  text-align: left;
`;
