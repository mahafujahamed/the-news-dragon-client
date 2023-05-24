import React from 'react';
import { useParams } from 'react-router-dom';

const Catagory = () => {
    const {id} = useParams();

    return (
        <div>
            <h2>Dragon News: {id}</h2>
        </div>
    );
};

export default Catagory;