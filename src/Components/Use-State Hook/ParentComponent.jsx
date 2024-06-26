import React, { useState } from 'react'
import UseStateObject from './UseStateObject'
import ShowResult from './ShowResult'

const ParentComponent = () => {
    const [submitted, setSubmitted] = useState(null)

    const handleFormSubmit = (data) => {
        setSubmitted(data)
    }

    return (
        <>
            {!submitted ?
                (<UseStateObject onSubmit={handleFormSubmit} />) :
                (<ShowResult data={submitted} />)}
        </>
    )
}

export default ParentComponent