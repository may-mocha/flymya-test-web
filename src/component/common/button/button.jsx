import React from "react";

import { Text } from "../typo";
import { StyledButton, StyledBtnIconL, StyledBtnIconR } from "../../../theme";

export const Buttom = (
    {
        children,
        text,
        ICONL,
        ICONR,
        onClick,
        ...props
    }
) => {
    return(
        <StyledButton onClick={onClick} {...props}>
            {
                children?
                children
                :
                <>
                { ICONL && <StyledBtnIconL>{ICONL}</StyledBtnIconL>}
                <Text {...props}>{text}</Text>
                { ICONR && <StyledBtnIconR>{ICONR}</StyledBtnIconR>}
                </>
            }
        </StyledButton>
    )
}