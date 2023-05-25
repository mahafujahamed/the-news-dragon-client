import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/newsCard/NewsCard';

const Catagory = () => {
    const {id} = useParams();
    const catagoryNews = useLoaderData();

    return (
        <div>
            { id && <h2>Dragon News: {catagoryNews.length}</h2>}
            {
                catagoryNews.map(news => 
                <NewsCard
                key={news._id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Catagory;