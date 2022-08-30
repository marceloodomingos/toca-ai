import styled from "styled-components";

interface FooterProps {
  dark?: boolean;
}

export const FooterContainer = styled.footer<FooterProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100vw;
  background: ${(props: FooterProps) =>
    props.dark ? "var(--black)" : "var(--beige-500)"};

  padding: 3rem 1rem;
  gap: 1rem;

  color: ${(props: FooterProps) =>
    props.dark ? "var(--white)" : "var(--black)"};

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 1rem;
    text-decoration: none;

    img {
      width: 100%;
      max-width: 2.5rem;

      filter: ${(props: FooterProps) =>
        props.dark
          ? "invert(100%) sepia(17%) saturate(0%) hue-rotate(35deg) brightness(450%) contrast(101%);"
          : "invert(21%) sepia(24%) saturate(6973%) hue-rotate(350deg) brightness(86%) contrast(82%);"};

      pointer-events: none;
      user-select: none;
    }
  }
`;
