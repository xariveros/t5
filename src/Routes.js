import React, { useState, useEffect } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Inicio from './views/Inicio';
import Episodio from './views/Episodio';
let caps = [];
for (let i = 1; i < 32; i++) {
    caps.push(i);
}
console.log(caps);
const Routes = (props) => {
    const location = props.location;
    return (
        <Switch>
            <Route component={Inicio} exact path='/' />
            {caps.map((cap) => (
                <div key={cap}>
                    <Route exact path={'/episodio/' + cap}>
                        <Episodio id={cap} />
                    </Route>
                </div>
            ))}

            <Redirect to='/' />
        </Switch>
    );
};

export default Routes;
