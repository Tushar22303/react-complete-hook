import React, { useEffect, useRef, useState } from 'react'

const UseRef__hook = () => {
    const [myData, setMyData] = useState("")

    const count = useRef(0)
    useEffect(() => {
        count.current = count.current + 1
    })

    return (
        <>
            <div className="container-fluid">
                <div className="main">
                    <input type="text" name='name' value={myData} onChange={(e) => setMyData(e.target.value)} style={{ padding: '0.5rem', borderRadius: "none" }} />
                    <p>The Number of times render : {count.current}</p>
                </div>
            </div>
        </>
    )
}

export default UseRef__hook