import React, { useState } from 'react';
import { Router, Route, Link, Redirect } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { createBrowserHistory } from 'history';
import Inicio from './views/Inicio';
import Episodio from './views/Episodio';
import Character from './views/Character';
import Location from './views/Location';
import Busqueda from './views/Busqueda';
import './App.css';

const endPoint = 'https://integracion-rick-morty-api.herokuapp.com/graphql';

const browserHistory = createBrowserHistory();

const httpLink = createHttpLink({
    uri: endPoint,
});

const authLink = setContext(async (_, { headers }) => {
    const token = await localStorage.getItem('currentToken');
    return {
        headers: {
            ...headers,
            authorization: token ? `${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});
let caps = [];
for (let i = 1; i < 32; i++) {
    caps.push(i);
}
let chars = [];
for (let i = 1; i < 1000; i++) {
    chars.push(i);
}
let locs = [];
for (let i = 1; i < 120; i++) {
    locs.push(i);
}

//const location = browserHistory.location;
function App() {
    const [busqueda, setBusqueda] = useState('');
    const handleChange = (event) => {
        setBusqueda(event.target.value);
    };
    const handleClick = (event) => {};
    const handleSubmit = (event) => {};

    return (
        <center>
            <ApolloProvider client={client}>
                <Router history={browserHistory}>
                    <Redirect exact from='/t5' to='/' />
                    {/* <center>
                        <form onSubmit={handleSubmit}>
                            <input
                                placeholder='Ingrese su búsqueda'
                                type='text'
                                onChange={handleChange}
                            />
                            <Link to={'/resultados/' + busqueda}>
                                <button type='submit' onClick={handleClick}>
                                    Buscar
                                </button>
                            </Link>
                        </form>
                    </center> */}
                    <center>
                        <Link to='/'>
                            <button type='button'>Home</button>
                        </Link>
                    </center>
                    <Route exact path={'/resultados/' + busqueda}>
                        <Busqueda query={busqueda} />
                    </Route>
                    <Route component={Inicio} exact path='/' />
                    {caps.map((cap) => (
                        <div key={cap}>
                            <Route exact path={'/episodio/' + cap}>
                                <Episodio id={cap} />
                            </Route>
                        </div>
                    ))}
                    {chars.map((char) => (
                        <div key={char}>
                            <Route exact path={'/character/' + char}>
                                <Character id={char} />
                            </Route>
                        </div>
                    ))}
                    {locs.map((loc) => (
                        <div key={loc}>
                            <Route exact path={'/location/' + loc}>
                                <Location id={loc} />
                            </Route>
                        </div>
                    ))}
                </Router>
            </ApolloProvider>
        </center>
    );
}

export default App;
