import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import {
  BannerContainer,
  GridContainer,
  HeroContainer,
  InnerContainer,
  InnerContainerContent,
  MainContainer,
  StyledContainer,
} from "./style";

export const Home = () => (
  <>
    <BannerContainer>
      <Header />
      <HeroContainer>
        <h1>We are creatives</h1>
        <a href="#main"></a>
      </HeroContainer>
    </BannerContainer>
    <MainContainer id="main">
      <InnerContainer>
        <InnerContainerContent isOdd={true}>
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="#">Learn more</a>
        </InnerContainerContent>
        <picture>
          <source
            srcSet="/assets/images/desktop/image-transform.jpg"
            media="(min-width: 800px)"
          />
          <img src="/assets/images/mobile/image-transform.jpg" alt="" />
        </picture>
      </InnerContainer>
      <InnerContainer>
        <InnerContainerContent isOdd={false}>
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <a href="#">Learn more</a>
        </InnerContainerContent>
        <picture>
          <source
            srcSet="/assets/images/desktop/image-stand-out.jpg"
            media="(min-width: 800px)"
          />
          <img src="/assets/images/mobile/image-stand-out.jpg" alt="" />
        </picture>
      </InnerContainer>
      <GridContainer>
        <StyledContainer>
          <picture>
            <source
              srcSet="/assets/images/desktop/image-graphic-design.jpg"
              media="(min-width: 800px)"
            />
            <img src="/assets/images/mobile/image-graphic-design.jpg" alt="" />
          </picture>
          <div className="content">
            <h2>Graphic Design</h2>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              attention
            </p>
          </div>
        </StyledContainer>
        <StyledContainer>
          <picture>
            <source
              srcSet="/assets/images/desktop/image-photography.jpg"
              media="(min-width: 800px)"
            />
            <img src="/assets/images/mobile/image-photography.jpg" />
          </picture>
          <div className="content">
            <h2>Photography</h2>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </StyledContainer>
      </GridContainer>
      <Testimonials />
      <Gallery />
      <Footer />
    </MainContainer>
  </>
);
