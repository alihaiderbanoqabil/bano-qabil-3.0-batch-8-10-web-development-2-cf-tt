// import React from 'react'
// import { useFetch } from '../hooks/useFetch'
// import { Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
// import PostCard from '../components/PostCard';

// const Posts = () => {
//     const { data, error, isLoading } = useFetch('https://jsonplaceholder.typicode.com/posts')
//     console.log({ data, error, isLoading });

//     if (isLoading) {
//         return <Spinner animation="border" />
//     }
//     else if (error) {
//         return <Alert variant={'danger'}>{error}</Alert>
//     }
//     return (
//         <Row>
//             {/* {data?.map(({ id, title, body }) => {
//                 return <Col key={id} sm={12} md={6} lg={4} xl={3}><PostCard title={title} description={body} /></Col>
//             })} */}
//             {data?.map((d) => {
//                 return <Col key={d.id} sm={12} md={6} lg={4} xl={3}>
//                     <PostCard {...d} />
//                 </Col>
//             })}
//         </Row>
//     )
// }

// export default Posts