import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import SeusProdutos from '../SeusProdutos/SeusProdutos';

// import Main from "../Main/Main";
//chamar isso aqui la na main 
const Routes = () => {
    return(
        <BrowserRouter>
            {/* <Route component = { Main }  path="/" exact /> */}
            <Route component = { SeusProdutos }  path="/SeusProdutos" />
        </BrowserRouter>
    )
}

export default Routes