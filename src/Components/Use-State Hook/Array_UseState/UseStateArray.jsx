import React, { useState } from 'react'
import './UseStateArray.css'

const UseStateArray = () => {
    const bioData = [
        { id: 0, name: "Tushar", age: 22, city: "Ahmedabad" },
        { id: 1, name: "Mohan", age: 25, city: "Mumbai" },
        { id: 2, name: "Ankit", age: 24, city: "Delhi" },
        { id: 3, name: "Joe", age: 26, city: "London" },
    ]
    const [data, setData] = useState(bioData)

    const clearBioData = () => {
        setData([])
    }

    const handleDelete = (id) => {
        const myNewData = data.filter((currElem) => {
            return currElem.id !== id
        })
        setData(myNewData)
    }

    return (
        <>
            <div className="main">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.city}</td>
                                <td><button className='deleteButton' onClick={() => handleDelete(item.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className='clearButton' onClick={clearBioData}>Clear</button>
            </div>
        </>
    )
}

export default UseStateArray