import styled from "styled-components";
import { fontSize } from "../../attribute";

export const StyledHeader = styled.div`
    padding-block: 10px;
    .header-wrap{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo-wrap{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        @media(max-width: 991px){
            .logo-wrap{
                width: 40%;
            }
        }
    }
`
export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    .lang-switch,.profile{
        width: 28px;
        height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        img{
            width: 100%;
        }
    }
    
    @media(max-width: 991px){
        padding-right: 10px;
        gap: 1rem;
        a{
            font-size: ${fontSize.md}px;
        }
        .lang-switch,.profile{
            width: 23px;
            height: 23px;
        }
    }
    @media(max-width: 991px){
        gap: .8rem;
    }
`