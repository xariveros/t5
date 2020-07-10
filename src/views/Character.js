import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

const getCharacter = () => gql`
    query character($id: ID) {
        character(id: $id) {
            id
            name
            status
            species
            type
            gender
            origin {
                id
                name
            }
            location {
                id
                name
            }
            image
            episode {
                name
                id
            }
        }
    }
`;

const Character = (props) => {
    const idx = parseInt(props.id);
    const [infoChar, setInfoChar] = useState({});
    const { data, loading, error } = useQuery(getCharacter(), {
        fetchPolicy: 'no-cache',
        variables: { id: idx },
    });
    useEffect(() => {
        if (data) {
            console.log(data);
            setInfoChar(data.character);
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
            {infoChar.episode ? (
                <div>
                    <h1>
                        <p>{infoChar.name}</p>
                    </h1>
                    <img src={infoChar.image} alt='Logo' />;
                    <p>Género: {infoChar.gender}</p>
                    <p>Especie: {infoChar.species}</p>
                    <p>Estado: {infoChar.status}</p>
                    <h1>
                        <p>Locación:</p>
                    </h1>
                    <Link to={'/location/' + infoChar.location.id}>
                        <p>{infoChar.location.name}</p>
                    </Link>
                    <h1>
                        <p>Origen:</p>
                    </h1>
                    <Link to={'/location/' + infoChar.origin.id}>
                        <p>Origen {infoChar.origin.name}</p>
                    </Link>
                    <h1>
                        <p>Episodios</p>
                    </h1>
                    {infoChar.episode.map((epi) => (
                        <div key={epi.id}>
                            <Link to={'/episodio/' + epi.id}>{epi.name}</Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Cargando</div>
            )}
        </div>
    );
};

export default Character;
