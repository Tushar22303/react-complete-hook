import React, { useRef, useState } from 'react'

const Stop_Watch = () => {
    const [count, setCount] = useState(0)
    const timerRef = useRef(null);

    const startTime = () => {
        if (!timerRef.current) {
            timerRef.current = setInterval(() => {
                setCount(prev => prev + 1)
            }, 100);
        }
    }

    const stopTime = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    }

    const resetTime = () => {
        stopTime();
        setCount(0)
    }

    return (
        <>
            <div className="container-fluid d-flex align-items-center justify-content-center flex-column" style={{ height: "100vh" }}>
                <h5>{count} Seconds</h5>
                <div>
                    <button className='btn btn-primary mx-2' onClick={startTime}>Start Time</button>
                    <button className='btn btn-primary' onClick={stopTime}>Stop Time</button>
                    <button className='btn btn-primary mx-2' onClick={resetTime}>Reset Time</button>
                </div>
            </div>
        </>
    )
}

export default Stop_Watch