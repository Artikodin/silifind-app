import { quintInOut } from "svelte/easing";

export const slide = (Node, { duration }) => ({
  duration,
  css: time => {
    const eased = quintInOut(time);
    const reversedEase = 1 - eased;

    return `
        transform: translate3d(${reversedEase * 100}%, 0, 0);
    `;
  }
});

export const fade = (Node, { duration }) => ({
  duration,
  css: time => {
    const eased = quintInOut(time);

    return `
        background-color: rgba(0, 0, 0, ${eased * 0.5});
    `;
  }
});
