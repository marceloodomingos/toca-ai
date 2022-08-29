import styled, { keyframes } from "styled-components";

const animationOne = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const animationTwo = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

const animationThree = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const LDSellipsis = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  > div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: var(--brand-red);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: 8px;
      animation: ${animationOne} 0.6s infinite;
    }

    &:nth-child(2) {
      left: 8px;
      animation: ${animationTwo} 0.6s infinite;
    }

    &:nth-child(3) {
      left: 32px;
      animation: ${animationTwo} 0.6s infinite;
    }

    &:nth-child(4) {
      left: 56px;
      animation: ${animationThree} 0.6s infinite;
    }
  }
`;

export const LDSellipsisContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1rem;
`;
