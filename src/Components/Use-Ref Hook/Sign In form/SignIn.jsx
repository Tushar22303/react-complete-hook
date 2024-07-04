import React, { useRef, useState } from 'react'
import './SignIn.css'

const SignIn = () => {

    const email = useRef("");
    const username = useRef("");
    const [show, setShow] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailValue = email.current.value
        const usernameValue = username.current.value
        if (emailValue === "" || usernameValue === "") {
            alert("Please fill the data")
        } else {
            setShow(true)
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="signIn__form">

                    <form id='form' onSubmit={handleSubmit}>
                        <h4>Sign In</h4>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                                ref={email} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" ref={username} />
                        </div>
                        <button type="submit" className="btn btn-warning">Submit</button>

                    </form>
                </div>

                <div className='text-center mt-5'>
                    <h5>{show ? `email : ${email.current.value}` : ""}</h5>
                    <h5>{show ? `username : ${username.current.value}` : ""}</h5>
                </div>

            </div>
        </>
    )
}

export default SignIn