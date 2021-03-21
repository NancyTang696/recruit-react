import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Menu } from '../../../pages/menu'
import {RegisterCreditCard} from '../../../pages/register'

export const Router = (): JSX.Element => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route path="/menu">
                        <Menu />
                    </Route>
                    <Route path="/">
                        <RegisterCreditCard />
                    </Route>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    )
}