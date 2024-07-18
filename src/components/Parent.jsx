import React from 'react'

const Parent = ({ title, description, children }) => {
    return (
        <section>
            <h1>{title}</h1>
            <p>{description}</p>
            {children}
        </section>
    )
}

export default Parent