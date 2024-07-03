import React, { useEffect, useState } from 'react'

const Practice1 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count > 0) {
            document.title = `Chats (${count})`
        } else {
            document.title = `Chat`
        }
    }, [count])

    return (
        <>
            <div className="main" style={{ textAlign: 'center', marginTop: "20px" }}>
                <h3>{count}</h3>
                <button className='button' onClick={
                    () => setCount(count + 1)
                }>Click 👋</button>
            </div>
        </>
    )
}

export default Practice1