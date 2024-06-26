import React, { useEffect, useState } from 'react'
import './useeffect.css'

const DataFetching = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(repsonse => repsonse.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(error => {
                console.error(error);
                setLoading(false)
            });
    }, [])

    if (loading) {
        return <div className='loading'>Loading...</div>
    }

    return (
        <div className='dataFetching'>
            <h2>Data of Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.address.city}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataFetching