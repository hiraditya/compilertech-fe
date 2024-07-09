import React from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../styles/GlobalStyle";

const Hero: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    accessibility: false,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots: React.ReactNode) => (
      <DotsWrapper>
        <ul>{dots}</ul>
      </DotsWrapper>
    ),
  };

  let isFirefoxBrowser: boolean;
  try {
    // @ts-ignore
    isFirefoxBrowser = typeof InstallTrigger !== undefined;
  } catch {
    isFirefoxBrowser = false;
  }
  console.log(isFirefoxBrowser);

  return (
    <StyledSection id="hero">
      <CarouselWrapper>
        <Slider {...settings}>
          <div>
            <img src="./carousel_1.webp" alt="Slide 1" />
          </div>
          <div>
            <img src="./carousel_2.webp" alt="Slide 1" />
          </div>
          <div>
            <img src="./carousel_3.webp" alt="Slide 1" />
          </div>
        </Slider>
        <CarouselOverlay>
          {!isFirefoxBrowser ? (
            <>
              <HidingText>Theme:</HidingText>"Innovations in Compiler
              Technologies for a Rapidly Evolving Landscape"
            </>
          ) : (
            <img className="hero-text-img" src="./hero_image.svg" />
          )}
        </CarouselOverlay>
      </CarouselWrapper>
    </StyledSection>
  );
};

const HidingText = styled.span`
  @media (max-width: 786px) {
    display: none;
  }
`;
const StyledSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 60vh;
  width: 100%;
`;

const CarouselWrapper = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;

  .slick-slider {
    height: 100%;
  }

  .slick-slide {
    max-height: 60vh;

    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      filter: brightness(40%);
    }
  }

  .slick-dots {
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: flex !important;
    justify-content: center;
    align-items: center;
    li {
      margin: 0 5px;
    }
    li button:before {
      font-size: 12px;
      color: #eae9e9;
    }
    li.slick-active button:before {
      color: white;
    }

    &::before {
      content: "COMING SOON, BANGALORE!";
      font-family: "Bebas Neue", sans-serif;
      letter-spacing: 2px;
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      color: white;
      font-size: 32px;
      line-height: 48px;
      width: 100%;
    }
  }
`;

const DotsWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    padding: 0;
  }
`;

const CarouselOverlay = styled.h1`
  width: 50%;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Bebas Neue";
  font-size: clamp(32px, 5vw, 48px);
  letter-spacing: 2px;
  text-align: center;
  background-image: linear-gradient(
    135deg,
    white,
    lightblue,
    ${({ theme }) => theme.primary},
    #ff6f00
  );
  background-clip: text;
  background-size: 100%;
  color: transparent;
  @media (min-width: ${MOBILE_BREAKPOINT}) and (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 32px;
    width: 80%;
    top: 70%;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 80%;
    bottom: 20%;
    top: 0;
    transform: translate(-50%, +50%);
  }
  .hero-text-img {
    width: 100%;
    height: auto;
  }
`;

export default Hero;
