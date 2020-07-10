import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

const getCharacterByPage = () => gql`
    query characters($page: Int) {
        characters(page: $page) {
            results {
                id
                name
            }
        }
    }
`;

const Busqueda = (props) => {
    const [listaEpisodios, setListaEpisodios] = useState([]);
    const busqueda = props.query;

    const consultasEpisodios = [
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 1 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 2 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 3 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 4 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 5 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 6 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 7 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 8 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 9 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 10 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 11 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 12 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 13 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 14 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 15 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 16 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 17 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 18 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 19 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 20 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 21 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 22 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 23 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 24 },
        }),
        useQuery(getCharacterByPage(), {
            fetchPolicy: 'no-cache',
            variables: { page: 25 },
        }),
    ];

    useEffect(() => {
        if (
            (consultasEpisodios[0].data,
            consultasEpisodios[1].data,
            consultasEpisodios[2].data,
            consultasEpisodios[3].data,
            consultasEpisodios[4].data,
            consultasEpisodios[5].data,
            consultasEpisodios[6].data,
            consultasEpisodios[7].data,
            consultasEpisodios[8].data,
            consultasEpisodios[9].data,
            consultasEpisodios[10].data,
            consultasEpisodios[11].data,
            consultasEpisodios[12].data,
            consultasEpisodios[13].data,
            consultasEpisodios[14].data,
            consultasEpisodios[15].data,
            consultasEpisodios[16].data,
            consultasEpisodios[17].data,
            consultasEpisodios[18].data,
            consultasEpisodios[19].data,
            consultasEpisodios[20].data,
            consultasEpisodios[21].data,
            consultasEpisodios[22].data,
            consultasEpisodios[23].data,
            consultasEpisodios[24].data)
        ) {
            setListaEpisodios([
                consultasEpisodios[0].data,
                consultasEpisodios[1].data,
                consultasEpisodios[2].data,
                consultasEpisodios[3].data,
                consultasEpisodios[4].data,
                consultasEpisodios[5].data,
                consultasEpisodios[6].data,
                consultasEpisodios[7].data,
                consultasEpisodios[8].data,
                consultasEpisodios[9].data,
                consultasEpisodios[10].data,
                consultasEpisodios[11].data,
                consultasEpisodios[12].data,
                consultasEpisodios[13].data,
                consultasEpisodios[14].data,
                consultasEpisodios[15].data,
                consultasEpisodios[16].data,
                consultasEpisodios[17].data,
                consultasEpisodios[18].data,
                consultasEpisodios[19].data,
                consultasEpisodios[20].data,
                consultasEpisodios[21].data,
                consultasEpisodios[22].data,
                consultasEpisodios[23].data,
                consultasEpisodios[24].data,
            ]);
        }
    }, [consultasEpisodios]);

    return (
        <div>
            Busqueda {console.log(listaEpisodios[0])}
            {busqueda}
        </div>
    );
};

export default Busqueda;
