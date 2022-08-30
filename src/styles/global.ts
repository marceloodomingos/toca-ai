import { createGlobalStyle } from "styled-components";
import { Variables } from "./variables";

export const GlobalStyles = createGlobalStyle`
  ${Variables}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "DM Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    &::-webkit-scrollbar {
      width: .75rem;
    }

    &::-webkit-scrollbar-track {
      background: var(--beige-100);
    }

    &::-webkit-scrollbar-thumb {
      background: var(--beige);
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    
    background-color: var(--beige-100);

    &.open {
      height: 100vh;
      overflow: hidden hidden;
    }

    &:not(.open) {
      overflow-x: hidden;
    }
  }

  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100vw;
    height: max-content;
    overflow-x: hidden;
    background: var(--background);
    color: var(--black);

    &::-webkit-scrollbar {
        width: .85rem;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--beige);
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`;
