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
                    {console.log(infoChar.characters, infoChar)}
                    <p>{infoChar.id}</p>
                    <p>{infoChar.name}</p>
                    <img src={infoChar.image} alt='Logo' />;
                    <p>{infoChar.gender}</p>
                    <p>{infoChar.species}</p>
                    <p>{infoChar.status}</p>
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
