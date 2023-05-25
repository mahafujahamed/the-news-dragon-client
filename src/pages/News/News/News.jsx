import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsights from '../EditorInsights/EditorInsights';

const News = () => {
    const news = useLoaderData();
    const { title, details, image_url, category_id } = news;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/catagory/${category_id}`}><Button variant="danger"> <FaArrowLeft></FaArrowLeft>  All News in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorInsights></EditorInsights>
        </div>
    );
};

export default News;