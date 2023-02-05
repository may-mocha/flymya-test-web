import styled from "styled-components";

import { color } from "../../attribute";

export const StyledMain = styled.main`
    min-height: 50vh;
    // margin-top: 30px;
    // @media(max-width: 991px){
    //     margin-top: 20px;
    // }
`
export const StyledContainer = styled.div`
    background: ${props=>color[props?.background] || props.background || color?.light};
`