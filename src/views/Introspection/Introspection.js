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
} from '../Introspection/Introspection.styles';
import { ViewMoreProjects } from '../../components/ViewMoreProjects';
import Booklets from '../../assets/introspection/booklets.png';
import Comfort1 from '../../assets/introspection/comfort1.png';
import Ecstasy1 from '../../assets/introspection/ecstasy1.png';
import GalleryBook from '../../assets/introspection/gallerybook.png';
import Rage1 from '../../assets/introspection/rage1.png';
import Rage2 from '../../assets/introspection/rage2.png';
import Tension1 from '../../assets/introspection/tension1.png';

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
      <ProjectPageWrapper>
        <FeaturedWrapper>
          <ProjectTitleWrapper>
            <SectionTitle>Mixed media typography</SectionTitle>
            <PageHeadline>Introspection</PageHeadline>
            <BodyText>Emmanuel College Senior Thesis <br /> Sept 2017 - May 2018</BodyText>
            <ProjectText>
              <BodyText>
                Introspection is a visual exploration in the communication of emotional experiences through common materials and experimental typography. <br /> <br />Through 15 in person interviews, I gathered quotes of peoples’ associations with five emotions: <strong>ecstasy, tension, rage, comfort, and grief.</strong> The overall goal is to get the viewer to understand these emotions and reflect on their own emotional experiences.
              </BodyText>
            </ProjectText>
          </ProjectTitleWrapper>
          <FeaturedImage src="https://freight.cargo.site/w/1260/q/94/i/b69408e5823e0446764e93caefbe15b2a00cabe474d71a8dfc4008c5f2e2efb7/booklet.png" />
        </FeaturedWrapper>
        <PhotoRow>
          <ProjectImageB src="https://freight.cargo.site/w/840/q/94/i/5c6441166afd6ff826fd70a23504c8f4bbe734f4e30cd3d371013bb2047c38d7/booklets1.png" />
          <ProjectImageB src="https://freight.cargo.site/w/720/q/94/i/431708c63deedba18fe9f61d73df7122a01e76f5a18a9df84bf7b840b3c0f7c4/booklets2.png" />
          <ProjectImageB src={Booklets} />
        </PhotoRow>
        <ProjectSectionTitle>Comfort</ProjectSectionTitle>
        <Booklet bookletLink="https://www.yumpu.com/en/embed/view/Bydj4TQlY6Ie90o7" />
        <PhotoRow>
          <ProjectImageB src="https://freight.cargo.site/w/1054/q/94/i/77833e8c7e352aa3251457f69d397324cddb6c67729dc77621ccbbbc4f78b5fa/comfort.png" />
          <ProjectImageB src={Comfort1} />
        </PhotoRow>
        <ProjectSectionTitle>Rage</ProjectSectionTitle>
        <Booklet bookletLink="https://www.yumpu.com/en/embed/view/ksn8IMH39WjzdouV" />
        <PhotoRow>
          <ProjectImageB src="https://freight.cargo.site/w/1000/q/94/i/a4b50386e93e7ca0ccff25288159663f47a4cd63a995100ae216e102404ac740/reckless.png" />
          <ProjectImageB src={Rage1} />
          <ProjectImageB src={Rage2} />
        </PhotoRow>
        <ProjectSectionTitle>Grief</ProjectSectionTitle>
        <Booklet bookletLink="https://www.yumpu.com/en/embed/view/o7gvb8JNxzmciOKl" />
        <PhotoRow>
          <ProjectImageB src="https://freight.cargo.site/w/1000/q/94/i/a147ca1070201a760ba1c0c966551730b1f66e917c5bc9385300201afb98e0cf/grief.png" />
        </PhotoRow>
        <ProjectSectionTitle>Ecstasy</ProjectSectionTitle>
        <Booklet bookletLink="https://www.yumpu.com/en/embed/view/kSY12GZTKwhuFpt7" />
        <PhotoRow>
          <ProjectImageB src="https://freight.cargo.site/w/1000/q/94/i/72fca17cfbbec1b1e988ac249941927a69953a0daad68da53dc435e270fd5200/ecstasy.png" />
          <ProjectImageB src={Ecstasy1} />
        </PhotoRow>
        <ProjectSectionTitle>Tension</ProjectSectionTitle>
        <Booklet bookletLink="https://www.yumpu.com/en/embed/view/90fgl2JS1xaIZMmB" />
        <PhotoRow>
          <ProjectImageB src="https://freight.cargo.site/w/2500/q/75/i/892adb913dfb7032af35617048ec94a4256d65fbd26daa5916f326db84f767df/tension.png" />
          <ProjectImageB src={Tension1} />
        </PhotoRow>
        <ProjectSectionTitle>Gallery Book</ProjectSectionTitle>
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
  )
}

export default Introspection;
