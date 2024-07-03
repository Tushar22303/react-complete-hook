import React, { useEffect, useState } from 'react'
import './ActualSize.css'

const ActualSize = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width);
    const [heightCount, setHeightCount] = useState(window.screen.height);

    const actualSize = () => {
        setWidthCount(window.innerWidth)
        setHeightCount(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', actualSize);

        return () => {
            window.removeEventListener('resize',actualSize);
        }
    })

    return (
        <>
            <div className="actualSize">
                <h2>The Actual Width of Window : {widthCount}</h2>
                <h2>The Actual Height of Window : {heightCount}</h2>
            </div>
        </>
    )
}

export default ActualSize