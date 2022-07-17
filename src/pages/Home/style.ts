import styled from "styled-components";

export const BannerContainer = styled.div`
  background-image: url("src/assets/images/mobile/image-header.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 80vh;
  position: relative;

  @media (min-width: 1440px) {
    background-image: url("src/assets/images/desktop/image-header.jpg");
  }
`;

export const HeroContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-block-start: 3rem;
  gap: 3rem;

  @media (min-width: 1440px) {
    padding-block-start: 8rem;
  }
  h1 {
    font-family: ${(props) => props.theme.fontFamily.secondary};
    font-weight: ${(props) => props.theme.fontWeight.black};
    font-size: clamp(2rem, 2.5rem, 6rem);
    text-transform: uppercase;
    text-align: center;
    color: ${(props) => props.theme.colors.white};
    letter-spacing: 0.1em;
  }

  a {
    background-image: url("src/assets/images/icon-arrow-down.svg");
    background-repeat: no-repeat;
    display: block;
    height: 120px;
    width: 40px;
  }
`;
