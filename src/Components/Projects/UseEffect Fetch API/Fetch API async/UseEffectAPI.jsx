import React, { useEffect, useState } from 'react'
import './UseEffectAPI.css'
import Loading from './Loading';
import GithubUsers from './GithubUsers';

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUsers = async () => {
        try {
            const data = await fetch("https://api.github.com/users");
            setLoading(false);
            setUsers(await data.json())
        } catch (error) {
            alert("Error : " + error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <GithubUsers users={users} />
        </>
    )
}

export default UseEffectAPI