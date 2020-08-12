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
  font-size: 22px;
  letter-spacing: 5px;
  font-weight: 600;
  text-align: left;

  @media only screen and (max-width: ${TABLET}) {
    font-size: 18px;
  }
`;

export const ContentWrapper = styled.div`
  width: 80%;
  margin: 50px auto 0 auto;

  @media only screen and (max-width: ${TABLET}) {
    width: 90%;
  }
`;

export const PageWrapper = styled(ContentWrapper)`
  margin-top: unset;
  padding-top: 150px;
  min-height: 50vh;

  @media only screen and (max-width: ${TABLET}) {
    padding-top: 75px;
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

  a {
    font-weight: bold;
    text-decoration: underline;
    color: ${BLACK};
  }
`;

export const PageHeadline = styled.div`
  font-family: 'Playfair Display';
  font-size: 58px;
  line-height: 1.5;
  margin: 0;
  color: ${BLACK};
  font-weight: 800;
  text-align: left;

  @media only screen and (max-width: ${TABLET}) {
    font-size: 32px;
  }

  @media only screeen and (max-width: ${MOBILE}) {
    font-size: 24px;
  }
`;
