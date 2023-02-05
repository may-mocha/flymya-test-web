import styled  from "styled-components";

import { color, generalVariable } from "../../attribute";

export const StyledCard = styled.div`
    padding: ${props=>generalVariable?.gap[props?.padding] || props?.padding || `${generalVariable?.gap?.md}px`};
    box-shadow: ${props=> props?.boxShadow && `0 0 8px ${color?.gray}`};
    border-radius: ${props=>generalVariable?.borderRadius[props?.borderRadius] || props?.borderRadius || 5}px;
    width: fit-content;
`