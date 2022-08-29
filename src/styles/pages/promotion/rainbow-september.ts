import styled, { keyframes } from "styled-components";

const revealBanner = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const RainbowSeptemberWelcome = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: -80px;

  position: relative;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

    width: 100%;
    height: 100%;

    color: white;

    z-index: 2;
    padding: 0 1rem 80px;

    text-align: center;

    > h1 {
      font-size: 4rem;
      line-height: 80%;

      margin-bottom: 1rem;

      @media (max-width: 768px) {
        font-size: 3rem;
      }
    }

    > a {
      display: flex;
      align-items: center;
      justify-content: center;

      text-decoration: none;
      font-size: 1.25rem;
      gap: 1rem;

      color: var(--black);
      background: #fefefe;
      border-radius: 0.5rem;
      padding: 0.85rem 3rem;

      margin-top: 1rem;

      &:hover {
        background: var(--white);
      }

      @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0.85rem 3rem;
      }
    }
  }

  > img {
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;

    filter: brightness(35%);

    mask-image: linear-gradient(#0000 0%, #000 25%, #0000 95%);
    z-index: 0;

    pointer-events: none;
    user-select: none;

    animation: ${revealBanner} 2s ease;
  }
`;

export const RainbowSeptemberPresentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  margin: 0 auto;

  padding: 5rem 1rem;

  overflow: hidden;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 5rem;

    width: 100%;
    max-width: 1200px;

    > img {
      width: 100%;
      max-width: 45%;
      height: 600px;

      object-fit: cover;

      pointer-events: none;
      user-select: none;

      transform: scaleX(-1);

      mask-image: linear-gradient(
        to left,
        transparent 0%,
        black 35%,
        black 75%,
        transparent 100%
      );

      @media (max-width: 768px) {
        height: 50vh;

        object-fit: cover;
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      color: var(--white);

      gap: 1.5rem;

      width: 100%;

      > h1 {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        font-size: 3.5rem;
        line-height: 100%;

        width: 100%;
        gap: 1rem;

        > svg {
          width: 100%;
          max-width: 3rem;
          height: 100%;

          transform: rotate(15deg);
        }
      }

      > a {
        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;
        font-size: 1rem;

        gap: 1rem;

        color: var(--black);
        background: #fefefe;
        border-radius: 0.5rem;
        padding: 0.85rem 1.5rem;

        cursor: pointer;

        &:hover {
          background: var(--white);
        }
      }
    }

    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 2rem;

      > div {
        text-align: center;

        align-items: center;

        > h1 {
          justify-content: center;
        }
      }

      > img {
        max-width: unset;
        height: 100%;
      }
    }
  }
`;
