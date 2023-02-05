import { render } from "@testing-library/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { StyledSliderCom } from "../../../theme";

export const SliderCom = ({
    settings,
    children
}) => {
    return(
        <StyledSliderCom>
            <Slider {...settings}>
                {children}
            </Slider>
        </StyledSliderCom>
    )
}