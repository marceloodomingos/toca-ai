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
