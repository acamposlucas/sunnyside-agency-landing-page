import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

  @media (min-width: 550px) {
    grid-template-columns: repeat(4, 1fr);
  }

  picture {
    border: 0;

    img {
      display: block;
      width: 100%;
      height: 100%;
      max-height: 400px;
    }
  }
`;
