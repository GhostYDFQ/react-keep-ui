import { keyframes } from "styled-components";

export const easing = {
    rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)",
};

export const glow = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`;

export const iconSpin = keyframes`
  0% {
     transform: rotate(0deg);
  }
  100% {
     transform: rotate(360deg);
  }
`;

export const modalOpenAnimate = keyframes`
  0% {
    opacity: 0;
    transform: scaleY(0,0);
  }
  100% {
    opacity: 0;
    transform: scale(1,1);
    transform-origin: center;
  }
`;

export const modalCloseAnimate = keyframes`
  0% {
    opacity: 0;
    transform: scale(1,1);
    transform-origin: center;
  }
  100% {
    opacity: 0;
    transform: scaleY(0,0);
  }
`;
