import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

const Routes = () => {
   return(
       <BrowserRouter>
            <Route component={Dashboard} path="/dashboard"  />
            <Route component={Home} path="/" exact />
            <Route component={SignIn} path="/signin"/>
            <Route component={SignUp} path="/signup" />  
       </BrowserRouter>
   )
}

export default Routes;