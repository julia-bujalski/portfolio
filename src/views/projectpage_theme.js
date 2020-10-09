import styled from 'styled-components';
import { PageWrapper, TABLET, MOBILE, BodyText, BLACK } from '../theme';

export const FeaturedImage = styled.img`
  width: 55%;
  max-height: 500px;
  object-fit: cover;
  box-shadow: -5px 2px 11px -6px rgba(0,0,0,.1);

  @media only screen and (max-width: ${TABLET}) {
    margin-top: 50px;
    width: 100%;
    max-height: 350px;
  }
`;

export const FeaturedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  background-color: ${(props) => props.backgroundColor || `#ffffff`};

  @media only screen and (max-width: ${TABLET}) {
    flex-direction: column;
  }
`;

export const ProjectPageWrapper = styled(PageWrapper)`
  width: 80%;
  max-width: 900px;
  padding-top: unset;

  @media only screen and (max-width: ${TABLET}) {
    width: 90%;
    padding-top: unset;
  }
`;

export const ProjectTitleWrapper = styled.div`
  padding-right: 30px;
  padding-left: 7%;
  padding-top: 55px;
  padding-bottom: 35px;

  @media only screen and (max-width: ${TABLET}) {
    width: 90%;
    margin: 0 auto;
    padding: unset;
  }
`;

export const ProjectText = styled.div`
  max-width: 500px;
`;

export const ProjectImage = styled.img`
  width: 100%;
  margin-bottom: 25px;
  object-fit: cover;
  max-height: 80vh;
`;

export const ProjectImageB = styled(ProjectImage)`
  object-position: top;
  width: 30%;
  object-fit: cover;
  height: 100%;

  @media only screen and (max-width: ${TABLET}) {
    width: 45%;
  }

  @media only screen and (max-width: ${MOBILE}) {
    width: 100%;
  }
`;

export const ProjectImageC = styled(ProjectImage)`
  width: 45%;
  object-position: top;

  @media only screen and (max-width: ${MOBILE}) {
    width: 100%;
  }
`;

export const PhotoRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 25px 0px;

  @media only screen and (max-width: ${MOBILE}) {
    flex-direction: column;
  }
`;


export const ProjectSectionTitle = styled.div`
  padding: 50px 0px 10px 0px;
  font-size: 24px;
  font-family: 'Playfair Display', sans-serif;
  font-weight: 700;
  color: ${BLACK};
  font-size: 26px;

`;

export const SubtitleText = styled(BodyText)`
  padding-top: 0px;
  font-style: italic;
`;

export const BookletWrapper = styled.div`
  display: block;

  @media (max-width: ${MOBILE}) {
    display: none;
  }
`;

export const MockupWrapper = styled.div`
  background-color: ${(props) => props.backgroundColor || `#F5F5F5`};
  margin-top: 15px;
  padding: 35px 0px;

  @media (max-width: ${MOBILE}) {
    background-color: unset;
    padding: unset;
    margin: unset;
  }
`;

export const BookletSubtitle = styled(SubtitleText)`
  display: none;
  padding-bottom: 15px;

  @media (max-width: ${MOBILE}) {
    display: block;
  }
`;

export const ChallengeSolutionWrapper = styled.div`
  display: flex;
  padding-bottom: 25px;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${MOBILE}) {
    flex-direction: column;
  }
`;

export const JourneyText = styled.div`
  width: 45%;

  @media (max-width: ${MOBILE}) {
    width: 100%;
  }
`;

export const FullSizedProjectImage = styled.img`
  width: 100%;
`;

export const Columns3 = `
  width: 30%; 

  @media only screen and (max-width: 768px) {
    width: 45%;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const Columns2 = `
  width: 45%;

  @media only screen and (max-width: ${MOBILE}) {
    width: 100%;
  }
`;

