import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
const Csr = (props) => {
    return (
        <>
            <section className='csr'>
                <div className="row container">
                    <div className="card1" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className="cardImg">
                            <img src="/course.png" alt="course" />
                        </div>
                        <div className="middCard">
                            <a className='courseCardTitle'>
                                {
                                    props.title
                                }
                            </a>
                            <span className="text-muted teacherName">
                                {
                                    props.teacher
                                }
                            </span>
                            <div className="rateStar">
                                4.0
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                            </div>
                        </div>
                        <div className="last">
                            <p className='courseCost'>
                                {
                                    props.rupees
                                }
                            </p>
                            <div className="d-flex">
                                <button className='courseEnroll'>
                                    {
                                        props.button
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Csr