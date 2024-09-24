import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="logo"><h1>ANTD</h1></div>
            <ul style={{ display: "flex", alignItems: "center", gap: '1rem' }}>
                <li>
                    <Link to="/">Users</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/todos">Todos</Link>
                </li>
                <li>
                    <Link to="/albums">Albums</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header