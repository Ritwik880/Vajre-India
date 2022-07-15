import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { BiUserCircle, BiLock } from 'react-icons/bi'
import { MdOutlineEmail } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked')
    }
    return (
        <>
            <section className='signupForm'>
                <div className="row container">
                    <div className="formLayout">
                        <p className='signupHeader'>Welcome</p>

                        <Form onSubmit={handleSubmit}>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='formLabel'> <MdOutlineEmail className='signupIcon' />
                                    Email id</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" value={email} required autoComplete="offf" onChange={(e) => setEmail(e.target.value)} />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='formLabel'> <BiLock className='signupIcon' />
                                    Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password" value={password} required autoComplete="offf" onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <button className='signupBtn'>Login</button>
                            <div className="twoText">
                                <a className='forgotPassword' href="#">Forgot password ?</a>
                                <a className='createAccount'>Create an account</a>
                            </div>

                            <div className="option">

                                <p className='lrBorder'>OR</p>


                            </div>
                            <button className='loginBtn'>Continue width
                                <span className='loginSpan'><FcGoogle /></span></button>



                        </Form>



                    </div>

                </div>
            </section>

        </>
    )
}

export default Login