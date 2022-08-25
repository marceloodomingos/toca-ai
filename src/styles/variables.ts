import { css } from "styled-components";

export const Variables = css`
  :root {
    // main colors
    --background: var(--beige-100);
    --white: #efefef;
    --black: #000111;

    --beige: #d9cfab;
    --beige-100: #f7f0d8;
    --beige-200: #faf7ed;
    --beige-300: #e4ddc4;
    --beige-500: #eee5c6;
    --beige-700: #d8cfae;

    // brand colors
    --brand-red: #9a3225;
    --brand-red-500: #933f34;
    --brand-blue: #0a1727;

    //gradients
    --gradient-transparent-beige-transparent: linear-gradient(
      to right,
      transparent,
      var(--beige-500),
      transparent
    );
  }
`;
