import React from 'react';

import first from '../assets/1.png'
import second from '../assets/2.png'
import third from '../assets/3.png'

const AllNews = () => {
    return (
        <div className='text-center'>
            <h3>All News</h3>
            <div>
                <img className='mb-4' src={first} alt="" />
                <img className='mb-4' src={second} alt="" />
                <img src={third} alt="" />
            </div>
        </div>
    );
};

export default AllNews;