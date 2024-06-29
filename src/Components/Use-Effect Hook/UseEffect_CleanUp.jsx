import React, { useEffect, useState } from 'react'

const UseEffect_CleanUp = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Button is clicked");
        }, 1000);

        return () => {
            clearInterval(timer)
        }
    }, []);

    return (
        <>
            <div className="container">
                <div className="counting">
                    <h2>{count}</h2>
                    <button onClick={handleClick} className='button'>
                        Click
                    </button>
                </div>
            </div>
        </>
    )
}

export default UseEffect_CleanUp