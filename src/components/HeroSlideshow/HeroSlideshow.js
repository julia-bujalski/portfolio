import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SharpieWatercolor from '../../assets/connections/sharpie_watercolor2.png';
import EcstasyBulbs from '../../assets/introspection/ecstasy3.png';
import HausilyScreens from '../../assets/hausily/hausily_screens_mockup.png';
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
          I'm a UI/UX Designer at Minerva Analytics something about empathy and beauty.
        </HeroText>
      </HeroContentWrapper>
      <SlideshowWrapper>
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide" key="0">
            <SlideshowImage className="lazy" src={SharpieWatercolor} alt="sample" />
          </div>
          <div className="each-slide" key="0">
            <SlideshowImage className="lazy" src={SpectraProduct} alt="sample" />
          </div>
          <div className="each-slide" key="2">
            <SlideshowImage className="lazy" src={HausilyScreens} alt="sample" />
          </div>
          <div className="each-slide" key="1">
            <SlideshowImage className="lazy" src={Squish} alt="sample" />
          </div>
          <div className="each-slide" key="1">
            <SlideshowImage className="lazy" src={EcstasyBulbs} alt="sample" />
          </div>
        </Slide>
      </div>
      </SlideshowWrapper>
      </HeroWrapper>
    )
}

export default HeroSlideshow;
