import styled from "styled-components";

export const Presentation = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;

  height: calc(100vh - 80px);
  width: 100%;
  max-width: 1400px;

  margin: 0 auto;
  padding: 0 1rem;

  overflow: hidden;

  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    color: var(--brand-red);

    gap: 1rem;

    width: 100%;
    max-width: 45%;

    > h1 {
      font-size: 5rem;
      line-height: 80%;

      @media (max-width: 768px) {
        font-size: 3rem;
        width: 100%;
        max-width: 420px;
      }

      @media (max-width: 500px) {
        font-size: 2rem;
        width: 100%;
        max-width: 420px;
      }
    }

    > p {
      font-size: 1.25rem;
    }

    @media (max-width: 1200px) {
      text-align: center;
      align-items: center;

      padding-bottom: 80px;

      max-width: 650px;
    }

    @media (max-width: 768px) {
      padding-bottom: unset;
      padding: 5rem 0;
    }
  }

  > img {
    position: absolute;

    @media (min-width: 1200px) {
      right: -15%;
      top: 0;

      width: 100%;
      height: 100%;
    }

    @media (max-width: 1200px) {
      z-index: -1;

      right: -20%;
      bottom: -13%;

      height: 100vh;

      mask-image: linear-gradient(to right, transparent, black);
    }

    @media (max-width: 768px) {
      bottom: -10%;

      height: 65vh;
    }

    z-index: 0;

    object-fit: contain;

    pointer-events: none;
    user-select: none;

    mask-image: linear-gradient(to right, transparent 25%, black 50%);
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  margin: 0 auto;

  background: var(--beige-300);
  padding: 10rem 1rem;
  gap: 5rem;

  overflow: hidden;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: var(--brand-red);

    > h1 {
      font-size: 4rem;
      line-height: 80%;
    }

    @media (max-width: 900px) {
      text-align: center;

      > h1 {
        font-size: 2.5rem;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    gap: 1rem;

    width: 100%;
    max-width: 1400px;

    list-style: none;

    > li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      text-align: center;
      gap: 1rem;

      flex-basis: calc(100% / 3.075);

      > svg {
        width: 100%;
        max-width: 5rem;
        height: 100%;

        color: var(--brand-red);
      }

      > span {
        font-size: 1.75rem;
        font-weight: bold;
      }
    }

    @media (max-width: 900px) {
      flex-wrap: nowrap;
      flex-direction: column;

      > li {
        gap: 1rem;

        > span {
          font-size: 1.25rem;
        }
      }
    }
  }
`;

export const MostPopularSongs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  max-width: 1400px;
  margin: 0 auto;

  padding: 10rem 1rem;
  gap: 5rem;

  overflow: visible;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: var(--brand-red);

    > h1 {
      font-size: 4rem;
      line-height: 80%;
    }

    @media (max-width: 900px) {
      text-align: center;

      > h1 {
        font-size: 2.5rem;
      }
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    gap: 2rem;
    width: 100%;

    > li {
      display: flex;
      flex-basis: 100%;
      align-items: flex-start;

      width: 100%;

      position: relative;
      list-style-type: decimal;
      border-radius: 1rem;

      &::marker {
        font-size: 10rem;
        font-weight: bold;
      }

      .metadata {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: relative;

        > img {
          width: 100%;
          max-width: 200px;
          min-width: 200px;

          border-radius: 0.25rem;

          pointer-events: none;
          user-select: none;
        }

        > p {
          display: flex;
          justify-content: center;
          align-items: center;

          position: absolute;

          font-weight: bold;

          border-radius: 50%;

          background: var(--beige-500);
          color: var(--brand-red);
          /* -webkit-text-stroke: 0.25rem var(--brand-red); */

          z-index: 2;

          @media (min-width: 1450px) {
            width: 5rem;
            height: 5rem;
            font-size: 2rem;

            top: 50%;
            left: 0%;
            transform: translate(-50%, -50%);
          }

          @media (max-width: 1450px) {
            width: 4rem;
            height: 4rem;
            font-size: 1.5rem;

            bottom: -15%;
            transform: translateX(-50%, -50%);
          }
        }

        @media (min-width: 768px) {
          margin-right: 2rem;
        }
      }

      .about-music {
        padding: 1rem 0;
        width: 100%;
        height: 100%;

        span {
          font-size: 2rem;
          font-weight: bold;

          line-height: 100%;
        }

        .artists {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          width: 100%;

          > p {
            font-size: 1.15rem;
            font-weight: 200;
          }
        }

        audio {
          &::-webkit-media-controls-panel {
            background-color: var(--beige-100);
          }
          &::-webkit-media-controls-toggle-closed-captions-button,
          &::-webkit-media-controls-rewind-button {
            display: none;
          }
        }
      }

      .player {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        max-width: 100px;
        height: 100%;

        > svg {
          width: 100%;
          max-width: 3rem;
          height: 100%;
          max-height: 3rem;

          color: var(--black);

          cursor: pointer;
        }
      }

      @media (min-width: 768px) {
        &:nth-child(odd) {
          border-style: solid;
          border-width: 0.25rem 0;
          border-color: var(--beige-500);

          .metadata {
            box-shadow: 0.25rem 0.25rem var(--brand-red);
            border-radius: 0.25rem;
          }
        }

        &:nth-child(even) {
          background: var(--beige-500);

          .metadata {
            box-shadow: 0.25rem 0.25rem var(--brand-red);
            border-radius: 0.25rem;

            > p {
              color: var(--beige-500);
              background: var(--brand-red);
            }
          }
        }
      }

      @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;

        gap: 0;

        .metadata {
          box-shadow: 0 0.35rem var(--brand-red);
          border-radius: 0.25rem;

          > img {
            max-width: 500px;
          }
        }

        .about-music {
          text-align: center;
          padding: 4rem 1rem 1rem;

          > span {
            font-size: 1.25rem;
          }

          > p {
            font-size: 0.85rem;
          }

          .artists {
            justify-content: center;
          }
        }
      }
    }

    > button {
      margin: 0 auto;

      color: var(--beige-100);
      background: var(--brand-red);
      border-radius: 1rem;
      border: unset;

      padding: 0.85rem 3rem;

      width: 100%;
      max-width: 300px;

      font-size: 1rem;

      cursor: pointer;
    }

    @media (max-width: 1450px) {
      gap: 2rem;
    }

    @media (min-width: 768px) and (max-width: 1450px) {
      gap: 3rem;
    }
  }
`;
