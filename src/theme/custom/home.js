import styled from "styled-components";

import { fontSize, fontWeight, color, generalVariable } from "../attribute";

export const StyledHome = styled.div`
    .search-btn{
        width: 100%;
    }
    h1{
        margin-top: 1.5;
        margin-bottom: 2.5rem;
        @media(max-width: 1200px){
            // font-size: ${fontSize.xxxl}px;
        }
        @media(max-width: 991px){
            // font-size: ${fontSize.xxl}px;
            margin-block: 2rem;
        }
        @media(max-width: 425px){
            margin-top: 1.2rem;
        }
        @media(max-width: 375px){
            // font-size: ${fontSize.xl}px;
        }
    }
    .category-sec{
        margin-top: 3rem;
        margin-bottom: 1rem;
        @media(max-width: 1200px){
            margin-top: 2rem;
        }
        .category-con{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5%;
            @media(max-width: 991px){
                flex-wrap: wrap;
                gap: 3%;
                row-gap: 1rem;
            }
            @media(max-width: 425px){
                flex-wrap: wrap;
                gap: 1%;
                row-gap: 1rem;
            }
            .category{
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
                position: relative;
                gap: 5px;
                p{
                    padding: 6px 16px;
                    transition: all .2s ease-in;
                    &:hover{
                        background: ${color?.background || '#ddd'}
                    }
                }
                .tag{
                    background:${color?.warn || '#ddd'};
                    border-radius: 5px;
                    padding: 1px 3px;
                    line-height: 12px;
                    position: absolute;
                    top: -10px;
                    left: 36%;
                    width: fit-content;
                }
                &.active{
                    p{
                        font-weight: ${fontWeight?.md || 500};
                        color: ${color?.primary || "#ddd"};
                    }
                }
                @media(max-width: 768px){
                    img{
                        width: 40px;
                        height: auto;
                    }
                    p{
                        padding-inline: 10px;
                    }
                }
                @media(max-width: 425px){
                    img{
                        width: 30px;
                        height: auto;
                    }
                    p{
                        font-size: ${fontSize?.sm || 14}px!important;
                        padding-block: 3px;
                    }
                }
            }
        }
    }
    .search-sec{
        padding-block: 1.5rem;
        background-image: linear-gradient(${color?.primary}, ${color?.primary2});
        .select-con{
            width: fit-content;
            display: flex;
            margin: auto;
            padding: 15px 0 8px 0;
            border-radius: 5px 5px 0 0;
            .type,.citizen,.trip-type,.passenger{
                display: flex;
                gap: .8rem;
                .field-wrapper{
                    display: flex;
                    // align-items: center;
                    width: fit-content;
                    flex-direction: row-reverse;
                    select{
                        padding: 0;
                        border: none;
                    }
                }
                &:not(:last-child){
                    border-right: 1px solid ${color?.gray2 || '#ddd'};
                }
                padding-inline: 1rem;
            }
            .citizen{
            }
            background: ${color?.light || '#fff'};
            border-bottom: 1px solid ${color?.primary || '#fff'};
            @media(max-width: 991px){
                background: none;
                border: none;
                width: 100%;
                padding-bottom: 15px;
                .citizen{
                    width: 100%;
                    background: ${color?.gray3 || "#ddd"};
                    padding: 15px 18px;
                    border-radius: ${generalVariable?.borderRadius?.sm}px;
                    justify-content: space-between;
                    .wrap{
                        display: flex;
                        align-items: center;
                        gap: 2rem;
                    }
                }
            }
        }
        .search-con{
            padding-block: 15px;
            border-radius: ${generalVariable?.borderRadius?.sm}px;
            background: ${color?.light || '#fff'};
            display: flex;
            align-items:center;
            box-shadow: 4px 5px 11px #33333336;
            .from,.to,.dept-date{
                display:flex;
                align-items: center;
                gap: 1rem;
                padding-inline: 1.5rem;
                @media(max-width: 1200px){
                    padding-inline: 1rem;
                    gap: .5rem;
                }
                img{
                    height: fit-content;
                }
                input{
                    padding: 0;
                    border: none;
                }
                border-right: 1px solid ${color?.gray2 || '#ddd'};
            }
            .dept-date{
                border: none;
                .wrap{
                    display: flex;
                    gap: 1.5rem;
                    align-items: center;
                }
                justify-content: space-between;
                input{
                    font-weight: ${fontWeight?.lg};
                    color: ${color?.dark};
                }
                button{
                    box-shadow: none;
                    width: 25%;
                    background-image: linear-gradient(rgb(252,157,0),rgb(179 115 10));
                }
            }
            @media(max-width: 991px){
                padding: 0;
                overflow:hidden;
                border-radius: 5px;
                margin-bottom: 20px;
            }
            
        }
        @media(max-width: 991px){
            padding-top: 0;
            background-image: none;
            ul{
                list-style: none;
                li{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-block: 10px;
                    border-bottom: 1px solid ${color?.gray3 || '#ddd'};
                    input{
                        padding: 0;
                        border: none;
                        font-size: ${fontSize?.md || 16}px;
                        font-weight: ${fontWeight?.md || 700};
                        color: ${color?.secondary || '#ddd'};
                        text-align: right;
                    }
                    padding: 12px;
                    &:last-child{
                        border: none;
                    }
                }
            }
            .MuiBox-root{
                 border: none;   
            }
            .MuiTabs-scroller{
                button{
                    width: 50%;
                    background: ${color?.gray4 || '#ddd'};
                    &[aria-selected='true']{
                        background: ${color?.light || '#fff'};
                    }
                }
                
            }
            #simple-tabpanel-0,#simple-tabpanel-1{
                .MuiBox-root{
                    padding: 0!important;
                }
            }
        }
        @media(max-width: 425px){
            input{
                width: 80%;
            }
        }
    }

`