import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Our Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quos blanditiis maxime illo dicta sapiente dolores neque fugit doloremque! Odio aperiam aspernatur deleniti fugiat nostrum? Nesciunt laudantium facere soluta. Explicabo.</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;