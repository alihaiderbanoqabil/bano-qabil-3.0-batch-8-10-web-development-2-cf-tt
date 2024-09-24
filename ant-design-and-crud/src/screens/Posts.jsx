import React, { useEffect, useState } from 'react'
import { useGetPostsQuery, useGetUsersQuery } from '../store/features/api.slice'
import { Alert, Table } from 'antd';
import { Link, useParams, useSearchParams } from 'react-router-dom';

const Posts = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const [columns, setColumns] = useState([]);
    const { data, error, isLoading, isSuccess, isError, refetch } = useGetPostsQuery(`?userId=${searchParams.get("userId")}`)
    console.log({ data, error, isLoading, isSuccess, isError, });

    useEffect(() => {
        if (data) {
            const columns = Object.keys(data[0]).map((key) => {


                return {
                    title: key.toUpperCase(),
                    dataIndex: key,
                    key: key,
                }
            }
            );

            console.log(columns);
            setColumns(columns)
        }
    }, [data])


    // if (isLoading) {
    //     return <Spin size="large" />
    // } 
    if (error) {
        return <Alert
            message={"Error"}
            description={error}
            type="error"
            closable
        />
    }
    return (
        <Table bordered rowKey={(record) => record.id} dataSource={data} loading={isLoading} columns={columns} pagination={false} />
    )
}

export default Posts