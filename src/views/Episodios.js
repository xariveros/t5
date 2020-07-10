import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

const getEpisodios = () => gql`
    query episodes($page: Int) {
        episodes(page: $page) {
            results {
                id
                name
                episode
                air_date
            }
        }
    }
`;

const Episodios = () => {
    const [listaEpisodios, setListaEpisodios] = useState([]);
    const [listaEpisodios2, setListaEpisodios2] = useState([]);
    const primera = useQuery(getEpisodios(), {
        fetchPolicy: 'no-cache',
        variables: { page: 1 },
    });
    const segunda = useQuery(getEpisodios(), {
        fetchPolicy: 'no-cache',
        variables: { page: 2 },
    });

    useEffect(() => {
        if (primera.data && segunda.data) {
            console.log(primera.data);
            setListaEpisodios((oldArray) => [
                ...oldArray,
                ...primera.data.episodes.results,
                ...segunda.data.episodes.results,
            ]);
        }
    }, [
        primera.data,
        primera.loading,
        primera.error,
        segunda.data,
        segunda.loading,
        segunda.error,
    ]);

    if (primera.loading || segunda.loading) {
        console.log('deberia estar cargadno');
        return <div>Cargando</div>;
    }
    if (primera.error || segunda.error) {
        console.log('error');
        //console.log(listaEpisodios);
        return <div>error</div>;
    }

    return (
        <div>
            {listaEpisodios.map((episodio) => (
                <div key={episodio.id} style={{ padding: '20' }}>
                    <p>{episodio.id}</p>
                    <Link to={'/episodio/' + episodio.id}>
                        <p>{episodio.name}</p>
                    </Link>
                    <p>{episodio.air_date}</p>
                </div>
            ))}
        </div>
    );
};

export default Episodios;
