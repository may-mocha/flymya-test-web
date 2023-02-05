import React from "react";

import { StyledCard } from "../../../theme";

export const Card = ({
    children,
    ...props
}) => {
    return(
        <StyledCard {...props}>
            {
                children? children : <></>
            }
        </StyledCard>
    )
}