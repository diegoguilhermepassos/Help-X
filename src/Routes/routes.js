import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

const Routes = () => {
   return(
       <BrowserRouter>
            <Route component={SignIn} path="/" exact />
            <Route component={SignIn} path="/login"/>
            <Route component={SignUp} path="/register" />  
       </BrowserRouter>
   )
}

export default Routes;