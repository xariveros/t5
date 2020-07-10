import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

const getEpisodio = () => gql`
    query episode($id: ID) {
        episode(id: $id) {
            name
            air_date
            episode
            characters {
                id
                name
            }
        }
    }
`;

const Episodio = (props) => {
    const idx = parseInt(props.id);
    const [infoEpisodio, setInfoEpisodio] = useState({});
    const { data, loading, error } = useQuery(getEpisodio(), {
        fetchPolicy: 'no-cache',
        variables: { id: idx },
    });

    useEffect(() => {
        if (data) {
            console.log(data);
            setInfoEpisodio(data.episode);
        }
    }, [data, loading, error]);
    if (loading) {
        console.log('deberia estar cargadno');
        return <div>Cargando</div>;
    }
    if (error) {
        console.log('error');
        return <div>Cargando</div>;
    }
    return (
        <div>
            {' '}
            {infoEpisodio.characters ? (
                <div>
                    <h1>
                        <p>{infoEpisodio.name}</p>
                    </h1>
                    <p>Fecha de emisión: {infoEpisodio.air_date}</p>
                    <p>Código de episodio: {infoEpisodio.episode}</p>
                    <h1>
                        <p>Personajes</p>
                    </h1>
                    {infoEpisodio.characters.map((char) => (
                        <div key={char.id}>
                            <Link to={'/character/' + char.id}>
                                {char.name}
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Cargando</div>
            )}
        </div>
    );
};

export default Episodio;
