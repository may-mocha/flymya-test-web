import styled, { createGlobalStyle } from "styled-components";
import { fontSize, fontWeight, color } from "../../attribute";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  ::selection {
    background-color: ${color?.primary || '#333'};
    color: ${color.light || '#fff'};
  }

  html {
    scroll-behavior: smooth;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'roboto';
    font-size: ${fontSize.md || 16}px;
    font-weight: ${fontWeight.sm || 400};
    line-height: 1.5;
    text-align: left;
    background-color: ${color.light || '#fff'};
  }
  ul,h1,h2,h3,h4,h5,a,p{
    margin: 0;
    padding: 0;
  }
  img{
    max-width: 100%;
    height: auto;
  }
`