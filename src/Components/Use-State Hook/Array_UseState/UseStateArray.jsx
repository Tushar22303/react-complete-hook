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
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.city}</td>
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