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
    overflow-x: hidden;

    .logo {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      max-width: 150px;
      height: 100%;

      gap: 0.5rem;
      text-decoration: none;

      z-index: 2;

      img {
        width: 100%;
        max-width: 2rem;

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

        @media (max-width: 500px) {
          display: none;
        }
      }

      @media (max-width: 500px) {
        justify-content: center;

        max-width: 80px;
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
        max-height: 1.25rem;

        margin-left: 1rem;
        cursor: pointer;

        color: ${(props: HeaderProps) =>
          props.white ? "var(--white)" : "var(--brand-red)"};

        &:hover {
          filter: brightness(50%);
        }
      }

      @media (max-width: 900px) {
        position: fixed;

        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 2rem;

        top: 0;
        left: 0;
        height: 100vh;

        transform: translateX(100%);

        background: var(--beige-500);
        transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

        > a {
          width: 100%;
          max-width: 90%;

          text-align: center;
          font-size: 1.25rem;

          &.vibe {
            margin-left: unset;
          }
        }

        > svg {
          margin-left: unset;

          width: 100%;
          max-width: 2rem;
          height: 100%;
          max-height: 2rem;
        }

        &.open {
          transform: translateX(0);
        }
      }
    }

    > button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 80px;
      height: 80px;

      position: relative;

      cursor: pointer;
      background: unset;

      gap: 0.5rem;

      border: unset;
      -webkit-tap-highlight-color: transparent;

      > div {
        margin: auto;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 2rem;
        height: 12px;

        > span {
          position: absolute;
          display: block;
          width: 100%;
          height: 4px;
          background-color: var(--brand-red);
          border-radius: 1px;
          transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

          right: 0;

          &:first-of-type {
            top: 0;
          }
          &:last-of-type {
            bottom: 0;
          }

          @media (max-width: 500px) {
            &:first-of-type {
              width: 2.25rem;
            }

            &:last-of-type {
              width: 1.5rem;
            }
          }
        }
      }

      @media (min-width: 900px) {
        display: none;
      }

      @media (max-width: 900px) {
        &:not(.open):hover {
          > div > span {
            &:first-of-type {
              width: 2.25rem;
            }

            &:last-of-type {
              width: 1.5rem;
            }
          }
        }
      }

      &.open {
        > div > span {
          width: 2rem;

          &:first-of-type {
            transform: rotate(45deg);
            top: 5px;
          }
          &:last-of-type {
            transform: rotate(-45deg);
            bottom: 5px;
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    position: sticky;
    top: 0;

    backdrop-filter: blur(5px);
    background: linear-gradient(to bottom, var(--beige-500), transparent);
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
