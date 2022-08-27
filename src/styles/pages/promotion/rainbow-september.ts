import styled from "styled-components";

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
    padding-bottom: 80px;

    > h1 {
      font-size: 4rem;
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
    }
  }

  > img {
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;

    filter: brightness(35%);

    mask-image: linear-gradient(to top, transparent 0%, black 100%);
    z-index: 0;

    pointer-events: none;
    user-select: none;
  }
`;
