import React, { useEffect, useState } from 'react'

const DataFetching_2 = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false)
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <div className='loading'>Loading...</div>
    }

    if (error) {
        return <h1>Error : {error.message}</h1>
    }
    return (
        <>
            <div>
                <h2>Data of Todos</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DataFetching_2