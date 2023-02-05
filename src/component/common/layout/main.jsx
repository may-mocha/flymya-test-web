import React from "react";
import Container from "@mui/material/Container";

import { StyledMain, StyledContainer } from "../../../theme";

export const Main = props => {
  return (
    <StyledMain>
      {props?.children ? props?.children : <h1>Add UI Component Here</h1>}
    </StyledMain>
  )
}

export const ContainerCom = ({children, ...props}) => {
  return(
      <Container>
        <StyledContainer {...props}>
            {children}
        </StyledContainer>
      </Container>
  )
}