import React from 'react'

const ShowResult = ({ data }) => {
    return (
        <>
            <div className="container">
                <div className="card">
                    <h2>Welcome</h2>
                    <h3>Username : {data.username}</h3>
                    <h3>Email : {data.email}</h3>
                </div>
            </div>
        </>
    )
}

export default ShowResult