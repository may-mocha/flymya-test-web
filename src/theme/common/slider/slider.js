import styled from "styled-components";

export const StyledSliderCom = styled.div`
    .slick-slider{
        .slick-slide{
            padding-inline: .7rem;
            @media(max-width: 991px){
                padding-inline: .5rem;
            }
        }
        @media(max-width: 1200px){
            .slick-prev{
                left: -12px;
            }
            .slick-next{
                right: -12px;
            }
        }
    }
`