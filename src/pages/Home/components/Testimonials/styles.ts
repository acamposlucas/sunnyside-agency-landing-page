import styled from "styled-components";

export const TestimonialsContainer = styled.section`
  padding-block: 5rem;
  padding-inline: 2.5rem;

  h2 {
    color: ${(props) => props.theme.colors["blue-200"]};
    font-family: ${(props) => props.theme.fontFamily.secondary};
    letter-spacing: 1.2px;
    text-transform: uppercase;
    text-align: center;
  }

  ul {
    margin-block-start: 4rem;
    margin-inline: auto;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    @media (min-width: 600px) {
      flex-direction: row;
      flex-wrap: wrap;
    }

    li {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      justify-content: center;
      max-width: 21rem;

      img {
        aspect-ratio: 1;
        width: 72px;
        border-radius: 100%;
      }

      p {
        color: ${(props) => props.theme.colors["blue-400"]};
        line-height: 1.5;
        text-align: center;
      }

      strong {
        display: block;
        font-family: ${(props) => props.theme.fontFamily.secondary};
        font-weight: ${(props) => props.theme.fontWeight.black};
        text-align: center;
        margin-block-end: 0.5rem;
      }

      span {
        color: ${(props) => props.theme.colors["blue-200"]};
        font-size: 0.875rem;
      }
    }
  }
`;
