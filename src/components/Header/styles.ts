import styled, { keyframes } from "styled-components";

interface HeaderProps {
  white?: boolean;
  glass?: boolean;
}

export const HeaderContainer = styled.header<HeaderProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  width: 100%;
  height: 80px;
  position: relative;

  z-index: 10;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    height: 100%;

    padding: 0 1rem;

    .logo {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      max-width: 150px;
      height: 100%;

      gap: 0.5rem;
      text-decoration: none;

      img {
        width: 100%;
        max-width: 2.5rem;

        filter: ${(props: HeaderProps) =>
          props.white
            ? "invert(100%) sepia(17%) saturate(0%) hue-rotate(35deg) brightness(450%) contrast(101%);"
            : "invert(21%) sepia(24%) saturate(6973%) hue-rotate(350deg) brightness(86%) contrast(82%);"};
      }

      span {
        font-size: 1.5rem;
        font-weight: bold;
        text-transform: uppercase;
        color: ${(props: HeaderProps) =>
          props.white ? "var(--white)" : "var(--brand-red)"};
      }
    }

    .navbar {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      list-style: none;
      width: 100%;
      height: 100%;

      /* gap: 0.5rem; */

      > a {
        padding: 0.85rem 1.5rem;

        text-decoration: none;
        font-weight: bold;
        font-size: 0.95rem;

        color: ${(props: HeaderProps) =>
          props.white ? "var(--white)" : "var(--brand-red)"};
        cursor: pointer;

        &.vibe {
          margin-left: 1rem;

          color: ${(props: HeaderProps) =>
            props.white ? "var(--black)" : "var(--beige-100)"};

          background: ${(props: HeaderProps) =>
            props.white ? "#FEFEFE" : "var(--brand-red)"};
          border-radius: 0.5rem;

          &:hover {
            background: ${(props: HeaderProps) =>
              props.white ? "var(--white)" : "var(--brand-red-500)"};
          }
        }

        &:not(.vibe) {
          &:hover {
            filter: brightness(50%);
          }
        }
      }

      > svg {
        width: 100%;
        max-width: 1.25rem;
        height: 100%;

        margin-left: 1rem;
        cursor: pointer;

        color: ${(props: HeaderProps) =>
          props.white ? "var(--white)" : "var(--brand-red)"};
      }

      @media (max-width: 900px) {
        display: none;
      }
    }
  }
`;

const revealNews = keyframes`
  0% {    
    opacity: 0;
    transform: translateY(-4rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const NewsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  width: 100%;
  height: 3rem;

  padding: 1rem;

  color: var(--white);
  background: var(--brand-red);

  animation: ${revealNews} 2s ease;

  a {
    color: var(--beige-500);
  }

  @media (max-width: 768px) {
    height: 5rem;
  }
`;
