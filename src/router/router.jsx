import React from "react";
import { Route, Routes } from "react-router-dom";

import { RouteConfig } from "./config";

const RouteList = () => {
  return (
    <Routes>
      {
        RouteConfig?.map(({ path, element }, key) => {
          return (
            <Route
              path={path}
              key={key}
              element={element}
            />
          )
        })
      }
    </Routes>
  )
}

const AppRoute = () => {
  return (
    <>
      <RouteList />
    </>
  )
}

export default AppRoute