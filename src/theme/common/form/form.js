import styled from "styled-components";

import { color, generalVariable } from "../../attribute";

export const StyledFieldWrapper = styled.div`
    position: relative;
    textarea{
        height: auto;
    }
    .lable-txt{
        margin-right: 5px;
    }
    .tag{
        position: absolute;
        top: -13px;
        left: 40%;
        background: ${color?.warn};
        padding: 1px 3px;
        border-radius: 5px;
        line-height: 11px;
    }
`
export const StyledLabel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const StyledInputContainer = styled.div`
    width: fit-content;
`

export const StyledInput = styled.input`
    display: block;
    min-width: fit-content;
    padding: ${generalVariable?.gap?.xl || 15}px;

    &::placeholder{
        // opacity: 0.7;
    }
    &:focus-visible{
        outline: none;
    }
`