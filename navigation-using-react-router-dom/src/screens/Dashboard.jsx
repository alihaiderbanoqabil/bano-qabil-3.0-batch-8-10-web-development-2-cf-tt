import React from 'react'
import { Outlet } from 'react-router-dom'
// import Header from '../components/Header'
const routes = [
    {
        path: '/messages',
        title: "Messages"
    },
    {
        path: '/tasks',
        title: "Tasks"
    },
]
const Dashboard = () => {
    return (
        <div>Dashboard
            {/* <Header routes={routes} isLogoVisible={false} /> */}
            {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
            <Outlet />
        </div>
    )
}

export default Dashboard