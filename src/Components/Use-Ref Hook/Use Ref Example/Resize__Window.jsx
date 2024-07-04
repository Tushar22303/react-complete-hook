import React, { useEffect, useRef, useState } from 'react'

const Resize__Window = () => {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const resizeWindowRef = useRef(null);

    const handleResize = () => {
        setSize({ width: window.innerWidth, height: window.innerHeight })
    }

    useEffect(() => {
        resizeWindowRef.current = handleResize;
    });

    useEffect(() => {
        const onResize = () => resizeWindowRef.current();
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize)
        }
    })

    return (
        <>
            <div className="container-fluid d-flex align-items-center justify-content-center flex-column" style={{ height: "100vh" }}>
                <div className="alert alert-warning">
                    <span>Width : <b>{size.width}</b> and Height : <b>{size.height}</b></span>
                </div>
            </div>
        </>
    )
}

export default Resize__Window