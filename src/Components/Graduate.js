import React from 'react'
import Program from './Program'
import Course from './Course'
import FreeCourse from './FreeCourse'
import Why from './Why'
// import check from '/check.png'
const Graduate = () => {
    return (
        <>
            <section className='graduateSection d-flex'>
                <div className="row container">
                    <div className="childGraduate">
                        <div className="col-lg-7 col-md-12">
                            <div className="graduateLandingText">
                                <h1 className='graduateHead' data-aos="zoom-in-right">A Student’s Ladder To The World Of Success <span className='spanText'>
                                    Inida’s First Training and Internship Platform</span></h1>
                                <p className='graduatePara' data-aos="zoom-in-left">Give weightage to your resume by adding internship programe with practical exposure project completion with professional all over the world</p>

                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12" data-aos="zoom-in-left">
                            <img className='graduateRight' src="/graduateRight.png" alt="target" />

                        </div>
                    </div>
                </div>
            </section>
            <Program head="Grow Your Career With Our Certified Program" title="1 Month" para="Learn from global expert and get practical exposure to differenet technology" check1="Project Completion" check2="Lor" check3="Internship Certificate" check4="Career Support" />

            <Program title="3 Month" para="Achieve your career goals with industry based learning" check1="Project Completion" check2="Lor" check3="Internship Certificate" check4="Career Support" />
            <Program title="6 Month" para="Achieve your career goals with industry based learning" check1="Project Completion" check2="Lor" check3="Internship Certificate" check4="Career Support" />
            <FreeCourse title="Explore Our Free Course’s" />
            <FreeCourse title="Explore Webinare’s" />
            <Why />




        </>
    )
}

export default Graduate