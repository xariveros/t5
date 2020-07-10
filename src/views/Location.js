import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

const getLocation = () => gql`
    query location($id: ID) {
        location(id: $id) {
            id
            name
            type
            dimension
            residents {
                id
                name
            }
        }
    }
`;

const Location = (props) => {
    const idx = parseInt(props.id);
    const [infoLocation, setInfoLocation] = useState({});
    const { data, loading, error } = useQuery(getLocation(), {
        fetchPolicy: 'no-cache',
        variables: { id: idx },
    });
    useEffect(() => {
        if (data) {
            console.log(data);
            setInfoLocation(data.location);
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
            {infoLocation.residents ? (
                <div>
                    <h1>
                        <p>{infoLocation.name}</p>
                    </h1>
                    <p>Tipo: {infoLocation.type}</p>
                    <p>Dimensión: {infoLocation.dimension}</p>
                    <h1>
                        <p>Personajes:</p>
                    </h1>
                    {infoLocation.residents.map((char) => (
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

export default Location;
