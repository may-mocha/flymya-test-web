import styled from "styled-components";
import { fontSize, fontWeight, color } from "../../attribute";

export const StyledText = styled.p`
  @media(min-width: 320px) and (max-width: 1023px){
    font-size: calc(${props => fontSize?.sm}px + (${props => fontSize[props?.size] || props?.size || fontSize?.md} - ${props => fontSize?.sm}) * ((100vw - 100px) / (1023 - 100)));
  }

  @media(min-width: 1024px) {
    font-size: ${props => fontSize[props?.size] || props?.size || fontSize?.md}px;
  }
  font-size: ${props => fontSize[props?.size] || props?.size}px;
  font-weight: ${props => fontWeight[props?.weight] || props?.weight};
  color: ${props => color[props?.color] || props?.color || color?.secondary};
  text-decoration: ${props=>props?.textDecoration || "none"};
  text-align: ${props=>props?.textAlign || 'left'};
`