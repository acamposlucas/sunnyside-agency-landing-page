import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors["cyan-100"]};
  padding-block: 4.5rem;
  padding-inline: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  ul[aria-label="Social links"] {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    list-style: none;

    li {
      a {
        svg {
          fill: ${(props) => props.theme.colors["cyan-400"]};
          transition: fill 0.1s ease-in;
          &:hover {
            fill: ${(props) => props.theme.colors.white};
          }
        }
      }
    }
  }
`;

export const InnerContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  nav {
    ul {
      list-style: none;
      display: flex;
      gap: 1rem;

      li {
        a {
          text-decoration: none;
          color: ${(props) => props.theme.colors["cyan-400"]};
          transition: color 0.1s ease-in;
          &:hover {
            color: ${(props) => props.theme.colors.white};
          }
        }
      }
    }
  }
`;
