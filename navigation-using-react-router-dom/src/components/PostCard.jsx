import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostCard = (props) => {
    const { id, title, body } = props
    return (
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="https://picsum.photos/200/300" />
            <Card.Body>
                <Card.Title>{id}: {title}</Card.Title>
                <Card.Text>
                    {body}
                </Card.Text>
                <Link to={`/posts/${id}`} state={props} className='btn btn-primary'>View Details</Link>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    )
}

export default PostCard