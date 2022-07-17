import styled from "styled-components";

export const BannerContainer = styled.div`
  background-image: url("src/assets/images/mobile/image-header.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 80vh;
  position: relative;

  @media (min-width: 1024px) {
    background-image: url("src/assets/images/desktop/image-header.jpg");
  }
`;

export const HeroContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-block-start: 3rem;
  gap: 3rem;

  @media (min-width: 1024px) {
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

export const MainContainer = styled.main`
  overflow: hidden;
`;

export const InnerContainer = styled.div`
  display: grid;
  overflow: hidden;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  picture {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

interface innerContainerContentProps {
  isOdd?: boolean;
}

export const InnerContainerContent = styled.div<innerContainerContentProps>`
  padding-block: 4rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  order: 1;
  width: min(100%, 20rem);
  justify-self: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
    text-align: left;
    order: ${(props) => (props.isOdd ? 1 : 0)};
    justify-content: center;
  }

  h2 {
    font-family: ${(props) => props.theme.fontFamily.secondary};
    font-weight: ${(props) => props.theme.fontWeight.black};
    font-size: 2rem;

    @media (min-width: 1024px) {
      text-align: left;
    }
  }

  p {
    color: ${(props) => props.theme.colors["blue-200"]};
  }

  a {
    text-transform: uppercase;
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fontFamily.secondary};
    font-weight: ${(props) => props.theme.fontWeight.black};
    position: relative;
    width: fit-content;

    &:after {
      content: "";
      position: absolute;
      width: calc(100% + 1rem);
      background-color: ${(props) => props.theme.colors["yellow-400"]};
      height: 8px;
      opacity: 0.3;
      color: red;
      bottom: 0;
      left: -0.5rem;
      border-radius: 6px;
    }
  }
`;
