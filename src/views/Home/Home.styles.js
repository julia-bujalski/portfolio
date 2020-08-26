import styled from 'styled-components';

export const ProjectsGrid = styled.div`
  display: flex;
  margin: 0px auto 50px auto;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 40px;

  @media screen and (max-width: 620px) {
    display: block;
    padding-top: 30px;
  }
`;
