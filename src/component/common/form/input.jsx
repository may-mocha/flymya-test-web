import React from "react";

import { Text } from "../typo";
import { FieldWrapper } from "./fieldwrapper";
import { StyledInput } from "../../../theme";

export const Input = ({
    tag,
    input_as,
    onChange,
    disabled,
    ...props
}) =>{
    return(
        <FieldWrapper {...props}>
            <StyledInput
                as={input_as}
                onChange={onChange}
                {...props}
                style={disabled? {opacity: '0.5'}:{}}
            />
            {tag &&
            <Text as='span' size='xxs' className='tag' color='light'>{tag}</Text>
            }
        </FieldWrapper>
    )
}