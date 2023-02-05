import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoute from './router'
import { GlobalStyle } from "../theme";
import { Main, Header, Footer } from "../component";

const AppLayout = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header/>
      <Main>
        <AppRoute />
      </Main>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppLayout