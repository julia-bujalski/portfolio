import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SharpieWatercolor from '../../assets/connections/sharpie_watercolor2.png';
import EcstasyBulbs from '../../assets/introspection/ecstasy3.png';
import HausilyScreens from '../../assets/hausily/hausily_screens_mockup.png';
import MinervaScreens from '../../assets/minerva/screens_mockup.png';
import SpectraProduct from '../../assets/spectra/product3.png';
import Squish from '../../assets/squish_noframe.png';
import { 
  SlideshowImage,
  HeroWrapper,
  SlideshowWrapper,
  HeroContentWrapper,
  HeroText,
  HeroTitle,
} from './HeroSlideshow.styles';


const properties = {
  duration: 4000,
  transitionDuration: 1000,
  indicators: true,
  arrows: false,
  easing: 'ease-out'
};

export const HeroSlideshow = () => {
    return (
      <HeroWrapper>
      <HeroContentWrapper>
        <HeroTitle>
          hi! I'm julia bujalski
        </HeroTitle>
        <HeroText>
          Cambridge, MA based creative currently working as a UI/UX Designer at Minerva Analytics.
        </HeroText>
      </HeroContentWrapper>
      <SlideshowWrapper>
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide" key="0">
            <SlideshowImage className="lazy" src={SharpieWatercolor} alt="Sharpie and watercolor illustration" />
          </div>
          <div className="each-slide" key="2">
            <SlideshowImage className="lazy" src={MinervaScreens} alt="Minerva site screen design" />
          </div>
          <div className="each-slide" key="0">
            <SlideshowImage className="lazy" src={SpectraProduct} alt="Spectra info cards and stickers" />
          </div>
          <div className="each-slide" key="1">
            <SlideshowImage className="lazy" src={Squish} alt="Digital face painting" />
          </div>
          <div className="each-slide" key="2">
            <SlideshowImage className="lazy" src={HausilyScreens} alt="Hausily site screen design" />
          </div>
          <div className="each-slide" key="1">
            <SlideshowImage className="lazy" src={EcstasyBulbs} alt="Ecstasy lightbulb typography sculpture" />
          </div>
        </Slide>
      </div>
      </SlideshowWrapper>
      </HeroWrapper>
    )
}

export default HeroSlideshow;
