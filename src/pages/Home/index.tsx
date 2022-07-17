import React from "react";
import { Header } from "../../components/Header";
import {
  BannerContainer,
  HeroContainer,
  InnerContainer,
  InnerContainerContent,
  MainContainer,
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
            srcSet="src\assets\images\desktop\image-transform.jpg"
            media="(min-width: 1440px)"
          />
          <img src="src\assets\images\mobile\image-transform.jpg" alt="" />
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
            srcSet="src\assets\images\desktop\image-stand-out.jpg"
            media="(min-width: 1440px)"
          />
          <img src="src\assets\images\mobile\image-stand-out.jpg" alt="" />
        </picture>
      </InnerContainer>
    </MainContainer>
  </>
);
