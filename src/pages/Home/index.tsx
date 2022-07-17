import React from "react";
import { Header } from "../../components/Header";
import { BannerContainer, HeroContainer } from "./style";

export const Home = () => {
  return (
    <BannerContainer>
      <Header />
      <HeroContainer>
        <h1>We are creatives</h1>
        <a href="#"></a>
      </HeroContainer>
    </BannerContainer>
  );
};
