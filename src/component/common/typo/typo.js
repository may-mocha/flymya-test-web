import React from "react";
import { StyledText } from "../../../theme";

export const Text = props => {
  return (
    <StyledText {...props}>{props?.children && props?.children}</StyledText>
  )
}