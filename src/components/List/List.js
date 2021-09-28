import React, { useEffect, useState } from 'react';
import { useHttp } from '../../hooks/useHttp';
import Card from '../Card';
import './List.css';

const List = () => {

    const maxCount = 6;
    const [characters, setCharacters] = useState([]);
    const { getCharacters } = useHttp();

    useEffect(() => {
        async function fetchData() {
            const data = await getCharacters();
            const result = data.results.slice(0, maxCount);
            setCharacters(result);
        }
        fetchData();
    }, []);

    return (
        <div className="list-container">
            <h2>Rick and Morty characters</h2>
            <div className="cards-container">
                {characters.map((item, itemIdx) =>
                    <Card data={item} key={itemIdx} />
                )}
            </div>
        </div>
    );

};

export default List;