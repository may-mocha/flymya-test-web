import React from "react";

import { Link } from "react-router-dom";
import {Text} from '../typo'
import { ContainerCom } from "./main";
import { StyledHeader, StyledNav } from "../../../theme";
import Image from '../../../asset/image'


export const Header = () => {
    return(
        <StyledHeader>
            <ContainerCom className='header-wrap'>
                <Link to='/' className="logo-wrap">
                    <img src={Image.Logo}/>
                </Link>
                <StyledNav>
                    <Text as='a' href='#' size='lg' color='dark'>Blog</Text>
                    <div className="lang-switch" onClick={()=>{}}>
                        <img src={Image.LangEn} alt="lang-img" />
                    </div>
                    <div className="profile">
                        <img src={Image.Profile} alt="lang-img" />
                    </div>
                </StyledNav>
            </ContainerCom>
        </StyledHeader>
    )
}