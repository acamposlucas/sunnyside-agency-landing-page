import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding-inline: clamp(1.5rem, 1.5rem, 3rem);
  padding-block: 2rem;
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const LogoWrapper = styled.div`
  width: clamp(120px, 120px, 160px);
  height: 16px;

  img {
    width: 100%;
  }
`;

interface NavigationProps {
  isOpen: boolean;
}

export const Navigation = styled.nav<NavigationProps>`
  display: contents;

  ul {
    align-items: center;
    background-color: ${(props) => props.theme.colors.white};
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    gap: 2.5rem;
    list-style: none;
    padding-block: 3rem;
    position: fixed;
    width: calc(100vw - 3rem);
    top: 6rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;

    &:after {
      content: "";
      width: 0px;
      height: 0px;
      position: absolute;
      top: -24px;
      right: 0;
      border-bottom: 24px solid ${(props) => props.theme.colors.white};
      border-left: 24px solid transparent;
      clip-path: polygon(0 100%, 100% 0, 100% 100%);
    }

    li {
      a {
        color: ${(props) => props.theme.colors["blue-200"]};
        text-decoration: none;
        &:visited {
          color: ${(props) => props.theme.colors["blue-200"]};
        }
      }
    }
  }
`;

export const ContactButton = styled.a`
  background-color: ${(props) => props.theme.colors["yellow-400"]};
  border-radius: 50px;
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
  font-family: ${(props) => props.theme.fontFamily.secondary};
  text-transform: uppercase;
  padding-block: 1rem;
  padding-inline: 1.5rem;
`;
