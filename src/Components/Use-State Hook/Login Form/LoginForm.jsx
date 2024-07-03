import React, { useState } from 'react'
import './loginForm.css'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [form, setForm] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "" || password === "") {
            alert("Fill the Form")
        } else {
            const newEntry = { email: email, password: password };
            setForm([...form, newEntry])

            setEmail("");
            setPassword("")
        }
    }

    return (
        <>
            <div className="container">
                <form className='form p-3' id='Form' onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-12">
                            <h4 className='pb-3 mt-2 border-bottom text-center text-secondary'>Login</h4>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder='Email Here' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password' placeholder='Password Here' autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-danger">Submit</button>
                </form>
            </div>

            <div className="container" style={{ background: "white" }}>
                <div className="main">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                form.map((item, id) => {
                                    return (
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{item.email}</td>
                                            <td>{item.password}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default LoginForm