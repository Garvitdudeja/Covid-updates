import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../layoyts/DefaultLayout";
function DefaultHOC({component: Component, ...rest}) {
  return (
    <>
      <Route
        {...rest}
        component={()=>(
          <DefaultLayout>
            <Component />
          </DefaultLayout>
        )}
      ></Route>
    </>
  );
}

export default DefaultHOC;