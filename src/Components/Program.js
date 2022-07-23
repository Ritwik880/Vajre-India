import React from 'react'
import Course from './Course'
const Program = (props) => {
    return (
        <>
            <section className="program">
                <div className="row container">
                    <h2 className="programHead text-center" data-aos="zoom-in-right">
                        {
                            props.head
                        }
                    </h2>
                    <div className="programText" data-aos="zoom-in-left">
                        <p className='programSubHead text-center'><span className='spanProgram'>
                            {props.title}</span> Internship Program</p>
                        <p className='programPara text-center'>
                            {
                                props.para
                            }
                        </p>
                    </div>
                    <div className="parentCheck">
                        <div className="checkBox">
                            <div className="check1 my-4" data-aos="zoom-in-right">
                                <img className='check' src="/check.png" alt="check" />
                                <p className='checkPara mb-0'>
                                    {
                                        props.check1
                                    }
                                </p>
                            </div>
                            <div className="check1 my-4" data-aos="zoom-in-right">
                                <img className='check' src="/check.png" alt="check" />
                                <p className='checkPara mb-0'>
                                    {
                                        props.check2
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="checkBox">
                            <div className="check1 my-4" data-aos="zoom-in-left">
                                <img className='check' src="/check.png" alt="check" />
                                <p className='checkPara mb-0'>
                                    {
                                        props.check3
                                    }
                                </p>
                            </div>
                            <div className="check1 my-4" data-aos="zoom-in-left">
                                <img className='check' src="/check.png" alt="check" />
                                <p className='checkPara mb-0'>
                                    {
                                        props.check4
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="courses">
                        <Course />

                    </div>
                    <div className="d-flex justify-content-center align-items-center pb-5">
                        <button className='courseBtn'>
                            View all
                        </button>

                    </div>
                    <hr />

                </div>

            </section>
        </>
    )
}

export default Program