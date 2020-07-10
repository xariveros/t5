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
    const [listaChars, setListaChars] = useState([]);
    const { data, loading, error } = useQuery(getEpisodio(), {
        fetchPolicy: 'no-cache',
        variables: { id: idx },
    });

    useEffect(() => {
        if (data) {
            console.log(data);
            setInfoEpisodio(data.episode);
            setListaChars(data.episode.characters);
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
                    {console.log(infoEpisodio.characters, listaChars)}
                    <p>{infoEpisodio.name}</p>
                    <p>{infoEpisodio.air_date}</p>
                    <p>{infoEpisodio.episode}</p>
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
