import styled from "styled-components";
import { rgba } from "polished";

import { color, generalVariable } from "../../attribute";

export const StyledButton = styled.button`
  display: flex;
  flex-direction: ${props=>props?.direction || 'row'};
  align-items: center;
  justify-content: center;
  gap: ${props=>generalVariable?.gap[props?.gap]|| props?.gap || 10}px;
  text-transform: ${props=> props?.textStyle || 'initial'};
  border-radius: ${props=>generalVariable?.borderRadius[props?.borderRadius]|| props?.borderRadius || 5}px;
  padding: 10px 15px;
  min-width: ${props=>props?.minWidth || 'fit-content'};
  min-height: ${props=>props?.minHeight || 'fit-content'};
  border: ${props=>props?.borderColor? `1px solid ${color[props?.borderColor] || props?.color}`:`none`};
  background-color: ${props => color[props?.bgColor] || props?.bgColor || color?.primary};
  box-shadow: 0 0 8px ${color?.gray};    
  cursor: pointer;
  &:hover{
      background-color: ${props=>rgba(color[props?.bgColor], 0.7)};
  }
`
export const StyledBtnIconL = styled.div`
`
export const StyledBtnIconR = styled.div``