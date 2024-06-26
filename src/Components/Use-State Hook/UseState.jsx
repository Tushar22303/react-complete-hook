import React, { useState } from 'react'
import './usestate.css'
import { FaMinus, FaPlus } from "react-icons/fa";

const UseState = () => {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1)
    }
    const Decrement = () => {
        (count > 0 ? setCount(count - 1) : setCount(count))
    }

    return (
        <>
            <div className="container">
                <FaPlus className='icon' onClick={Increment} />
                <h2>{count}</h2>
                <FaMinus className='icon' onClick={Decrement} />
            </div>
        </>
    )
}

export default UseState