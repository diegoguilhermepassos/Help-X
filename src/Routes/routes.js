import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";

import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

const Routes = () => {
   return(
       <BrowserRouter>
            <Route component={Dashboard} path="/dashboard"  />
            <Route component={SignIn} path="/" exact/>
            <Route component={SignUp} path="/register" />  
       </BrowserRouter>
   )
}

export default Routes;