import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100vw;
  background: var(--beige-300);

  padding: 3rem 0;
  gap: 1rem;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 1rem;
    text-decoration: none;

    img {
      width: 100%;
      max-width: 5rem;

      filter: invert(21%) sepia(24%) saturate(6973%) hue-rotate(350deg)
        brightness(86%) contrast(82%);
    }
  }
`;
