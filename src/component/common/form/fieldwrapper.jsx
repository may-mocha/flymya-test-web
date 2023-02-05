import React from "react";

import { Text } from "../typo";
import { StyledFieldWrapper, StyledLabel, StyledInputContainer } from "../../../theme";

export const FieldWrapper = ({
    children,
    meta,
    label,
    required,
    checked,
    ...props
}) =>{
    return(
        <StyledFieldWrapper {...props} className='field-wrapper'>
            {label &&
            <StyledLabel>
                <Text size='sm' className='label-txt' weight={checked? 'md':''}>{label}</Text>
            </StyledLabel>
            }
            <StyledInputContainer>{children}</StyledInputContainer>
        </StyledFieldWrapper>
    )
}