import React, { useEffect, useState } from 'react'
import './UseEffectAPI.css'

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const data = await fetch("https://api.github.com/users");
        setUsers(await data.json())
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <div className="container-fluid">
                <h2 className='my-3 text-secondary'>List Of Github User</h2>
                <div className="container-fluid mt-5">
                    <div className="row text-center">
                        {

                            users.map((currElem) => {
                                return (
                                    <div className="col-10 col-md-4 mt-5" key={currElem.id}>
                                        <div className="card p-2">
                                            <div className="d-flex align-items-center">
                                                <div className="image">
                                                    <img src={currElem.avatar_url} className="rounded" width="155" />
                                                </div>
                                                <div className="ml-3 w-100">
                                                    <h4 className="mb-0 mt-0 textLeft"> {currElem.login}</h4>
                                                    <span className="text-left">{currElem.node_id}</span>
                                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                        <div className="d-flex flex-column">
                                                            <span className="articles">Articles</span>
                                                            <span className="number1">38</span>
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="followers">Followers</span>
                                                            <span className="number2">980</span>
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="rating">Rating</span>
                                                            <span className="number3">8.9</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseEffectAPI