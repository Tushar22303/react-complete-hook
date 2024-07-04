import React, { useEffect, useState } from 'react'
import './UseEffect_API_Promise.css'

const UseEffect_API_Promise = () => {

    const [dataFetching, setDataFetching] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => {
                setDataFetching(data.posts);
                setLoading(false)
            })
            .catch(error => {
                console.log(error);
                setLoading(false)
            });
    }, []);

    if (loading) {
        return <div className='text-center text-danger'>Loading...</div>
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h3 className='text-center py-3 text-secondary'>List of Todos</h3>
                    </div>
                </div>
                <div className="fetchAPI">
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Likes</th>
                                <th>Dislikes</th>
                                <th>Views</th>
                                <th>UserID</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataFetching.map((currElem) => {
                                    return (
                                        <tr key={currElem.id}>
                                            <td>{currElem.id}</td>
                                            <td>{currElem.title}</td>
                                            <td>{currElem.reactions.likes}</td>
                                            <td>{currElem.reactions.dislikes}</td>
                                            <td>{currElem.views}</td>
                                            <td>{currElem.userId}</td>
                                            <td><button>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UseEffect_API_Promise