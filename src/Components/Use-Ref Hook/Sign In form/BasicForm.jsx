import React, { useRef } from 'react'

const BasicForm = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus()
    }

    return (
        <>
            <div className="container-fluid">
                <div className="signIn__form">

                    <form id='form'>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" ref={inputRef} className="form-control" id="email" aria-describedby="emailHelp" placeholder='Enter Email'
                            />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handleFocus}>Focus Me 😍</button>

                    </form>
                </div>

            </div>
        </>
    )
}

export default BasicForm