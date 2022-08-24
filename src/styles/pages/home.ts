import styled from "styled-components";

export const Presentation = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;

  height: calc(100vh - 80px);
  width: 100%;
  max-width: 1400px;

  margin: 0 auto;

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
    }

    > p {
      font-size: 1.25rem;
    }
  }

  > img {
    position: absolute;
    right: -15%;
    top: 0;

    width: 100%;
    height: 100%;

    z-index: 0;

    object-fit: contain;

    pointer-events: none;
    user-select: none;

    mask-image: linear-gradient(to right, transparent 25%, black 50%);
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
  padding: 10rem 0;
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
      line-height: 100%;
    }
  }

  > ul {
    display: flex;
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

      flex-basis: calc(100% / 3);

      > i {
        font-size: 3rem;
        font-style: normal;
      }

      > span {
        font-size: 1.75rem;
        font-weight: bold;
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
  width: 100%;
  margin: 0 auto;

  padding: 10rem 0;
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
      line-height: 100%;
    }
  }

  ul {
    list-style-type: decimal;
  }
`;
