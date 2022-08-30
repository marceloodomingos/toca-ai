import styled from "styled-components";

type ProfileProps = {
  colorBg?: string;
  color0?: string;
  color1?: string;
  color2?: string;
  color3?: string;
};

export const PlayerControlsContainer = styled.div<ProfileProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100vh;

  background: ${(p) => p.colorBg};

  position: relative;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;

    max-width: 50%;
    margin-left: -0.4rem;

    object-fit: cover;

    transition: all 0.5s ease-out;
    mask-image: linear-gradient(to right, #000 50%, #0000 100%);

    user-select: none;
    pointer-events: none;
  }
`;

export const PlayerAudioControls = styled.div<ProfileProps>`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100px;

  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);

  z-index: 2;

  mask-image: linear-gradient(to top, #000 95%, #0000 100%);
  backdrop-filter: blur(5px);

  .control-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 0 1rem;
    position: relative;

    > div {
      padding: 0 1rem;
    }
  }

  .actual-music {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 800px;

    gap: 0.5rem;

    .action-buttons {
      display: flex;
      justify-content: center;
      align-items: center;

      gap: 0.5rem;

      > button {
        display: flex;
        justify-content: center;
        align-items: center;

        border: none;
        border-radius: 50%;

        width: 3rem;
        height: 3rem;

        > svg {
          width: 100%;
          height: 100%;

          padding: 0.85rem;
        }

        &:first-child,
        &:last-child {
          color: ${(p) => p.color1};
          background: transparent;
        }

        &:not(:first-child, :last-child) {
          background: ${(p) => p.color2};
          color: ${(p) => p.color0};
        }
      }
    }

    .current-time {
      position: relative;

      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      gap: 0.5rem;

      > p {
        font-size: 16px;
        width: 100%;
        max-width: 50px;

        color: ${(p) => p.color1};

        &:first-child {
          text-align: left;
        }

        &:last-child {
          text-align: right;
        }
      }

      > input {
        --seek-before-width: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        appearance: none;

        width: 100%;

        background: ${(p) => p.color2};
        border-radius: 999px;

        cursor: move;
        cursor: grab;

        &:before {
          content: "";
          height: 5px;
          width: var(--seek-before-width);
          background: ${(p) => p.color2};
          z-index: 2;
          cursor: pointer;
        }

        &::-webkit-slider-runnable-track {
          background: ${(p) => p.color1};
          border-radius: 10px;
          position: relative;
          width: 100%;
          height: 5px;
          outline: none;
        }

        &::-webkit-slider-thumb {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background: ${(p) => p.color2};
          border: none;
          margin-top: -0.35rem;
          -webkit-appearance: none;
        }
      }
    }
  }

  .volume {
    display: flex;

    width: 100%;
    max-width: 150px;

    color: ${(p) => p.color1};

    > svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    > input {
      appearance: none;

      width: 100%;
      max-width: 90%;

      background: transparent;
      border-radius: 999px;

      cursor: move;
      cursor: grab;

      &::-webkit-slider-runnable-track {
        background: ${(p) => p.color1};
        border-radius: 10px;
        position: relative;
        width: 100%;
        height: 5px;
        outline: none;
      }

      &::-webkit-slider-thumb {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: ${(p) => p.color2};
        border: none;
        margin-top: -0.35rem;
        -webkit-appearance: none;
      }
    }
  }
`;

export const AudioLyrics = styled.div<ProfileProps>`
  position: absolute;

  right: 2rem;
  top: 2rem;

  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100%;

  color: ${(p) => p.color2};

  text-align: right;
  gap: 1rem;

  > .about-music {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: 100%;
    gap: 1rem;

    .title {
      > h1 {
        font-size: 2.5rem;
        font-weight: bold;
        line-height: 80%;
        width: 100%;
      }

      > span {
        font-size: 1.25rem;
        font-weight: 200;
        width: 100%;
      }
    }

    > img {
      width: 100%;
      max-width: 5rem;
      height: 100%;
      max-height: 5rem;

      object-fit: cover;
      border-radius: 50%;
    }
  }

  > ul {
    height: calc(87vh);
    padding-bottom: calc(150px + 1rem);

    overflow: hidden scroll;

    &::-webkit-scrollbar {
      width: 0;
    }

    > p {
      opacity: 0.5;
      font-size: 1rem;
      margin: 0;

      /* transition: all 0.5s ease; */

      &.singing {
        opacity: 1;
        font-size: 1.25rem;
        margin: 0.25rem 0;
      }
    }
  }
`;
