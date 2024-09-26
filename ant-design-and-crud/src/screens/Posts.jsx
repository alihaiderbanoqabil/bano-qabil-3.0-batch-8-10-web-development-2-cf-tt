import React, { useEffect, useState } from 'react'
import { useAddPostMutation, useDeletePostMutation, useGetPostsQuery, useLazyGetCommentsQuery, useLazyGetPostsQuery, useUpdatePostMutation } from '../store/features/api.slice'
import { Alert, Button, Modal, Skeleton, Table } from 'antd';
import { useSearchParams } from 'react-router-dom';

const Error = ({ message }) => {
    return (
        <Alert
            message={"Error"}
            description={message}
            type="error"
            closable
        />
    )
}

const generateColumns = (object) => {
    return Object.keys(object).map((key) => {
        return {
            title: key.toUpperCase(),
            dataIndex: key,
            key: key,
        }
    })
}
const Posts = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false)
    let [searchParams, setSearchParams] = useSearchParams();
    const [columns, setColumns] = useState([]);
    const [viewPostComments, setViewPostComments] = useState('');
    const userId = searchParams.get("userId")
    // const { data, error, isLoading, isSuccess, isError, refetch } = useGetPostsQuery(`${userId ? `?userId=${userId}` : ''}`)
    // const { data, error, isLoading, isSuccess, isError, refetch } = useGetPostsQuery(`?_page=${currentPage}&_per_page=15${userId ? `&userId=${userId}` : ''}`)
    const [getPosts, { data, error, isLoading, isSuccess, isError, }] = useLazyGetPostsQuery()
    const [getComments, { data: commentsData, error: commentsError, isLoading: commentsIsLoading, isSuccess: commentsIsSuccess, isError: commentsIsError }] = useLazyGetCommentsQuery()
    // console.log({ data, error, isLoading, isSuccess, isError, viewPostComments },);
    // console.log(commentsData);
    const [addPost, { data: postData, error: postError, isLoading: postIsLoading, isSuccess: postIsSuccess, isError: postIsError }] = useAddPostMutation()
    const [updatePost,] = useUpdatePostMutation()
    const [deletePost,] = useDeletePostMutation()

    const showModal = () => {
        setIsModalOpen(true);
    };

    const hideModal = () => {
        setIsModalOpen(false);
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const onChange = (page) => {
        console.log(page);
        setCurrentPage(page);
    };

    useEffect(() => {
        if (viewPostComments) {
            getComments(`?postId=${viewPostComments}`)
        }
    }, [viewPostComments])

    useEffect(() => {
        getPosts(`?_page=${currentPage}&_per_page=15${userId ? `&userId=${userId}` : ''}`)
    }, [currentPage, userId])

    useEffect(() => {
        // if (data?.length > 0) {
        if (data?.data?.length > 0) {
            // const columns = Object.keys(data[0]).map((key) => {
            //     return {
            //         title: key.toUpperCase(),
            //         dataIndex: key,
            //         key: key,
            //     }
            // }
            // );
            // const columns = generateColumns(data[0])
            const columns = generateColumns(data?.data[0])
            // console.log(columns);
            setColumns([...columns, {
                title: 'COMMENTS',
                key: 'comments',
                render: (record) => <Button type="primary" onClick={() => {
                    // console.log(record);
                    console.log(record?.id);
                    showModal();
                    setViewPostComments(record?.id);
                }}>View Comments</Button>

            }, {
                title: 'ACTIONS',
                key: 'actions',
                render: (record) => <>
                    <Button onClick={() => {
                        console.log(record, 'record');

                        updatePost({ ...record, body: "Body 1aac" })
                    }} color="default" variant="solid">Update</Button>
                    <Button type="primary" onClick={() => {
                        deletePost(record.id)
                    }} danger>Delete</Button>
                </>

            }])
        }
    }, [data?.data])


    // if (isLoading) {
    //     return <Spin size="large" />
    // } 
    if (error) {
        // return <Alert
        //     message={"Error"}
        //     description={error}
        //     type="error"
        //     closable
        // />
        return <Error message={error} />
    }
    return (
        <>
            {userId && <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", margin: '1rem 0' }}> <Button type="primary" onClick={() => {
                // openModal();
                addPost({
                    "userId": userId,
                    "title": "Post 101",
                    "body": "Bosy 101"
                });
            }} loading={postIsLoading}>Create Post</Button></div>}
            {/* <Table bordered rowKey={(record) => record.id} dataSource={data} loading={isLoading} columns={columns} pagination={false} /> */}
            <Table bordered rowKey={(record) => record.id} dataSource={data?.data} loading={isLoading} columns={columns} 
            pagination={{
                total: data?.items || 0,
                current: currentPage,
                onChange: onChange
            }} />

            <Modal width={1000} title="Comments" open={isModalOpen} onOk={hideModal} onCancel={hideModal}>
                {commentsIsLoading && <Skeleton active />}
                {commentsError && commentsIsError && <Error message={commentsError} />}
                {/* {commentsError && commentsIsError && <Alert
                    message={"Error"}
                    description={commentsError}
                    type="error"
                    closable
                />} */}
                <Table bordered rowKey={(record) => record.id} dataSource={commentsData} loading={commentsIsLoading} columns={commentsData?.length > 0 ? generateColumns(commentsData[0]) : []} pagination={false} />
            </Modal>
            <Modal width={1000} title="Create Post" open={modalOpen} onOk={closeModal} onCancel={closeModal}>
                {commentsIsLoading && <Skeleton active />}
                {commentsError && commentsIsError && <Error message={commentsError} />}
                {/* {commentsError && commentsIsError && <Alert
                    message={"Error"}
                    description={commentsError}
                    type="error"
                    closable
                />} */}
                <Table bordered rowKey={(record) => record.id} dataSource={commentsData} loading={commentsIsLoading} columns={commentsData?.length > 0 ? generateColumns(commentsData[0]) : []} pagination={false} />
            </Modal>
        </>
    )
}

export default Posts