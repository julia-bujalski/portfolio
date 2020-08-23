import React, { useEffect } from 'react';
import { PageHeadline, BodyText, SectionTitle } from '../../theme';
import {
  FeaturedImage,
  FeaturedWrapper,
  ProjectPageWrapper,
  ProjectTitleWrapper,
  ProjectText,
  PhotoRow,
  ProjectImageB,
  ProjectSectionTitle,
  BookletWrapper,
  BookletSubtitle
} from '../projectpage_theme.js';
import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import Booklets from '../../assets/introspection/booklets.png';
import Comfort1 from '../../assets/introspection/comfort1.png';
import Comfort2 from '../../assets/introspection/comfort2.png';
import Comfort3 from '../../assets/introspection/comfort3.png';
import Ecstasy1 from '../../assets/introspection/ecstasy1.png';
import Ecstasy2 from '../../assets/introspection/ecstasy2.png';
import Ecstasy3 from '../../assets/introspection/ecstasy3.png';
import Grief1 from '../../assets/introspection/grief1.png';
import Grief2 from '../../assets/introspection/grief2.png';
import GalleryBook from '../../assets/introspection/gallerybook.png';
import Rage1 from '../../assets/introspection/rage1.png';
import Rage2 from '../../assets/introspection/rage2.png';
import Rage3 from '../../assets/introspection/rage3.png';
import Tension1 from '../../assets/introspection/tension1.png';
import Tension2 from '../../assets/introspection/tension2.png';
import Tension3 from '../../assets/introspection/tension3.png';

const Booklet = (props) => {
  return (
    <>
    <BookletSubtitle>
      View this page on desktop to read the booklet
    </BookletSubtitle>
    <BookletWrapper>
      <div style={{position: `relative`, paddingBottom: `56.25%`, height: `0`, overflow: `hidden`, maxWidth: `100%`, marginBottom:  `25px`}} data-page-width="500" data-page-height="400" id="ypembedcontainer">
          <iframe title="Comfort Booklet" src={props.bookletLink} frameborder="0" allowfullscreen="true" allowtransparency="true" style={{position: `absolute`, top: `0`, left: `0`, width: `100%`, height: `100%`}}></iframe>
      </div>
    </BookletWrapper>
    </>
  )
}

export const Introspection = () => {
  useEffect(() => {
    console.log("testing");
    window.scrollTo(0, 0);
  }, []);

  return (
      <>
        <FeaturedWrapper backgroundColor="#f6f3f9">
          <ProjectTitleWrapper>
            <SectionTitle>Mixed media typography</SectionTitle>
            <PageHeadline>Introspection</PageHeadline>
            <BodyText>Emmanuel College Senior Thesis <br /> Sept 2017 - May 2018</BodyText>
            <ProjectText>
              <BodyText>
                A visual exploration in the communication of emotional experiences through common materials and experimental typography.
              </BodyText>
            </ProjectText>
          </ProjectTitleWrapper>
          <FeaturedImage src="https://freight.cargo.site/w/1260/q/94/i/b69408e5823e0446764e93caefbe15b2a00cabe474d71a8dfc4008c5f2e2efb7/booklet.png" />
        </FeaturedWrapper>
        <ProjectPageWrapper>
        <ProjectSectionTitle>
          Introduction
        </ProjectSectionTitle>
        <BodyText>
        Through 15 in person interviews, I gathered quotes of peoples’ associations with five emotions: <strong>ecstasy, tension, rage, comfort, and grief.</strong> The overall goal is to get the viewer to understand these emotions and reflect on their own emotional experiences.
        </BodyText>
        <PhotoRow>
          <ProjectImageB src="https://freight.cargo.site/w/840/q/94/i/5c6441166afd6ff826fd70a23504c8f4bbe734f4e30cd3d371013bb2047c38d7/booklets1.png" />
          <ProjectImageB src="https://freight.cargo.site/w/720/q/94/i/431708c63deedba18fe9f61d73df7122a01e76f5a18a9df84bf7b840b3c0f7c4/booklets2.png" />
          <ProjectImageB src={Booklets} />
        </PhotoRow>
        <ProjectSectionTitle>Comfort</ProjectSectionTitle>
        <PhotoRow>
          <ProjectImageB src={Comfort2} />
          <ProjectImageB src={Comfort1} />
          <ProjectImageB src={Comfort3} />
        </PhotoRow>
        <Booklet bookletLink="https://www.yumpu.com/en/embed/view/Bydj4TQlY6Ie90o7" />
        <ProjectSectionTitle>Rage</ProjectSectionTitle>
        <PhotoRow>
          <ProjectImageB src={Rage3} />
          <ProjectImageB src={Rage1} />
          <ProjectImageB src={Rage2} />
        </PhotoRow>
        <Booklet bookletLink="https://www.yumpu.com/en/embed/view/ksn8IMH39WjzdouV" />
        <ProjectSectionTitle>Grief</ProjectSectionTitle>
        <PhotoRow>
          <ProjectImageB src={Grief1} />
          <ProjectImageB src={Grief2} />
        </PhotoRow>
        <Booklet bookletLink="https://www.yumpu.com/en/embed/view/o7gvb8JNxzmciOKl" />
        <ProjectSectionTitle>Ecstasy</ProjectSectionTitle>
        <PhotoRow>
          <ProjectImageB src={Ecstasy3} />
          <ProjectImageB src={Ecstasy2} />
          <ProjectImageB src={Ecstasy1} />
        </PhotoRow>
        <Booklet bookletLink="https://www.yumpu.com/en/embed/view/kSY12GZTKwhuFpt7" />
        <ProjectSectionTitle>Tension</ProjectSectionTitle>
        <PhotoRow>
          <ProjectImageB src={Tension3} />
          <ProjectImageB src={Tension1} />
          <ProjectImageB src={Tension2} />
        </PhotoRow>
        <Booklet bookletLink="https://www.yumpu.com/en/embed/view/90fgl2JS1xaIZMmB" />
        <ProjectSectionTitle>Gallery book</ProjectSectionTitle>
        <PhotoRow>
          <ProjectImageB src="https://freight.cargo.site/w/600/q/94/i/9f7744c9294def8fc371f3495d68276befb71e8cfb50da86e07a607fe675e0ff/gallerybook1.png" />
          <ProjectImageB src="https://freight.cargo.site/w/600/q/94/i/28d0b420e722d4309f8c52e3d82fba27df7d78814922ea4fc2f5def840379762/gallerbook2.png" />
          <ProjectImageB src={GalleryBook} />
        </PhotoRow>
        <Booklet bookletLink ="https://www.yumpu.com/xx/embed/view/c1ObFENmkyMCQq0v" />
        <ProjectSectionTitle>Process</ProjectSectionTitle>
        <Booklet bookletLink="https://www.yumpu.com/en/embed/view/H2UtYDFj0TfdnOP1" />
        <script src="https://players.yumpu.com/modules/embed/yp_r_iframe.js"></script>
      <ViewMoreProjects />
    </ProjectPageWrapper>
    </>
  )
}

export default Introspection;
