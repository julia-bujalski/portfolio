import styled from 'styled-components';
import { PageWrapper, TABLET, MOBILE, SectionTitle, BodyText } from '../../theme';

export const FeaturedImage = styled.img`
  width: 55%;
  max-height: 500px;
  object-fit: cover;

  @media only screen and (max-width: ${TABLET}) {
    margin-top: 50px;
    width: 100%;
  }
`;

export const FeaturedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 75px;

  @media only screen and (max-width: ${TABLET}) {
    flex-direction: column;
    padding-bottom: 25px;
  }
`;

export const ProjectPageWrapper = styled(PageWrapper)`
  width: 90%;
`;

export const ProjectTitleWrapper = styled.div`
  padding-right: 30px;

  @media only screen and (max-width: ${TABLET}) {
    padding: 0;
  }
`;

export const ProjectText = styled.div`
  max-width: 500px;
`;

export const ProjectImagesWrapper = styled(PageWrapper)`
  
`;

export const ProjectImage = styled.img`
  width: 100%;
  margin-bottom: 25px;
  object-fit: cover;
  max-height: 80vh;
`;

export const ProjectImageB = styled(ProjectImage)`
  width: 30%;
  object-position: top;

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

  @media only screen and (max-width: ${MOBILE}) {
    flex-direction: column;
    padding: 50px 0px;
  }
`;


export const ProjectSectionTitle = styled(SectionTitle)`
  padding: 75px 0px 25px 0px;
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
