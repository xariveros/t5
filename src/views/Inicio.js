import React from 'react';
//import gql from 'graphql-tag';
//import { useQuery } from '@apollo/react-hooks';
import Episodios from './Episodios';

// const getCharacters = () => gql`
//     query characters($page: Int) {
//         characters(page: $page) {
//             results {
//                 id
//                 name
//                 status
//                 species
//                 type
//                 gender
//                 origin {
//                     name
//                     type
//                     dimension
//                 }
//                 location {
//                     name
//                     type
//                     dimension
//                 }
//                 image
//                 episode {
//                     id
//                     name
//                     air_date
//                     episode
//                 }
//                 created
//             }
//             info {
//                 count
//             }
//         }
//     }
// `;

const Inicio = () => {
    // const { data, loading, error } = useQuery(getCharacters(1), {
    //     fetchPolicy: 'no-cache',
    // });

    // useEffect(() => {
    //     if (data) {
    //         console.log(data);
    //     }
    // }, [data, loading, error]);
    return (
        <div>
            <Episodios />
        </div>
    );
};

export default Inicio;
