import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { BiUserCircle, BiLock } from 'react-icons/bi'
import { MdOutlineEmail } from 'react-icons/md'
const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked')
    }
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })

    }
    return (
        <>
            <section className='signupForm'>
                <div className="row container">
                    <div className="formLayout">
                        <p className='signupHeader'>Sign Up</p>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='formLabel'> <BiUserCircle className='signupIcon' />
                                    Enter Full name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" name='name' value={user.name} required autoComplete="offf" onChange={handleInputs} />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='formLabel'> <MdOutlineEmail className='signupIcon' />
                                    Enter Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" name='email' value={user.email} required autoComplete="offf" onChange={handleInputs} />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='formLabel'> <BiLock className='signupIcon' />
                                    Create Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password" name='password' value={user.password} required autoComplete="offf" onChange={handleInputs} />
                            </Form.Group>
                            <Form.Label for="file" className='text-muted progressHead'>Password strength</Form.Label>
                            <div className='progressLayout mb-3'>
                                <progress id="file" value="100" max="100"> 32% </progress>
                                <progress id="file" value="0" max="100" className='mx-1'> 32% </progress>
                            </div>


                            <button className='signupBtn'>Sign up</button>

                        </Form>



                    </div>

                </div>
            </section>
        </>
    )
}

export default Signup