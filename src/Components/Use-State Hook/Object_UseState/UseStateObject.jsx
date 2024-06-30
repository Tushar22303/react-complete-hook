import React, { useState } from 'react'

const UseStateObject = () => {
    const [myObject, setMyObject] = useState({
        name: "Tushar", age: 22, degree: "Btech", city: "Ahmedabad"
    })

    const handleChange = () => {
        setMyObject({
            ...myObject,
            name: "Ankit",
            age: 26,
            degree: "BE"
        })
    }
    return (
        <>
            <div className="container">
                <div className="main">
                    <h2>Name: {myObject.name}, Age: {myObject.age}, Degree: {myObject.degree}, City: {myObject.city}</h2>
                    <button className='btn' onClick={handleChange}>Update</button>
                </div>
            </div>
        </>
    )
}

export default UseStateObject