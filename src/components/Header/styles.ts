import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  width: 100%;
  height: 80px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1200px;
    height: 100%;

    padding: 0 1rem;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      max-width: 150px;

      gap: 0.5rem;
      text-decoration: none;

      img {
        width: 100%;
        max-width: 2.5rem;

        filter: invert(21%) sepia(24%) saturate(6973%) hue-rotate(350deg)
          brightness(86%) contrast(82%);
      }

      span {
        font-size: 1.5rem;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--brand-red);
      }
    }

    .navbar {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      list-style: none;
      width: 100%;

      /* gap: 0.5rem; */

      > a {
        padding: 0.85rem 1.5rem;

        text-decoration: none;
        font-weight: bold;
        font-size: 0.95rem;

        color: var(--brand-red);
        cursor: pointer;

        &.vibe {
          margin-left: 1rem;

          color: var(--beige-500);

          background: var(--brand-red);
          border-radius: 0.5rem;

          &:hover {
            background: var(--brand-red-500);
          }
        }
      }

      > svg {
        width: 100%;
        max-width: 1.25rem;
        height: 100%;

        margin-left: 1rem;
        cursor: pointer;

        color: var(--brand-red);
      }

      @media (max-width: 900px) {
        display: none;
      }
    }
  }
`;
