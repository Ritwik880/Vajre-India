import React, { useState, useEffect } from 'react'
import Card from './Card'
import Course from './Course'
import { Link } from 'react-router-dom';
const Landing = () => {

    return (
        <>
            {/* <section className='landingSection d-flex'> */}
            <section className='landingSection d-flex'>
                <div className="row container">
                    <div className="col-lg-6 col-md-12">
                        <div className="landingText">
                            <h1 className='heading' data-aos="fade-right">Great platform to learn earn and grow</h1>
                            <p className='headingPara' data-aos="fade-left">Training by india’s proficient innovators and retierd scientists to get an amazing kick start of your career</p>
                            <div className="d-flex">
                                <button className='landingBtn' data-aos="fade-right">Get started</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img data-aos="fade-left" className='landingRight' src="/landingRight.png" alt="target" />

                    </div>
                </div>
            </section>
            <section className='whySection'>
                <div className="row container">
                    <div className="text">
                        <h4 className='text-center counterParentHead' data-aos="fade-right">Why Vajre India ?</h4>
                        <p className='counterParentPara text-center' data-aos="fade-left">Trusted By Millions Of Learners</p>
                    </div>
                    <div className="box">
                        <div className="box1" data-aos="flip-up">
                            <h6 className='text-center'>
                                40,800+</h6>
                            <p className='counterBoxPara'>Sessions</p>
                        </div>
                        <div className="box2" data-aos="flip-up">
                            <h6 className='text-center'>20,450+</h6>
                            <p className='counterBoxPara'>Students enrolled</p>
                        </div>
                        <div className="box3" data-aos="flip-down">
                            <h6 className='text-center'>4.7</h6>
                            <p className='counterBoxPara'>Google rating</p>
                        </div>
                        <div className="box4" data-aos="flip-down">
                            <h6 className='text-center'>100+</h6>
                            <p className='counterBoxPara'>Certified Trainers</p>
                        </div>
                    </div>
                    <div className="cardContent">
                        <Card title="Tried Tested Trusted" para="By thousand of learners" />
                        <Card title="Choose course according to your desired career" para="Wide range of courses" />
                        <Card title="Get certified from top notch universities" para="Top notch certificate" />
                    </div>

                    <div className="whySectionBtnBox d-flex">
                        <button className='whySectionBtn'>
                            Enroll now
                        </button>
                    </div>

                </div>
            </section>
            {/* <div className="whyShouldJoin"> */}
            <section className="whyShouldJoin">
                <div className="row container">
                    <div className="whyParentText">
                        <h1 className="whyParentHead text-center py-4">
                            Why Should You Join Our Learning Community
                        </h1>
                    </div>

                    <div className="joinGrid">
                        <div className="join1">
                            <img src="/whyCircle.png" alt="whyCircle" width={30} />
                            <p className='text-center whyChildPara py-3'>Complete project based learning platform</p>
                        </div>
                        <div className="join2">
                            <img src="/whyCircle.png" alt="whyCircle" width={30} />
                            <p className='text-center whyChildPara py-3'>2 on 1 Mentoring</p>
                        </div>
                        <div className="join3">
                            <img src="/whyCircle.png" alt="whyCircle" width={30} />
                            <p className='text-center whyChildPara py-3'>Industry expert session every week</p>
                        </div>
                        <div className="join4">
                            <img src="/whyCircle.png" alt="whyCircle" width={30} />
                            <p className='text-center whyChildPara py-3'>Enroll once and get life time support</p>
                        </div>

                    </div>
                </div>
            </section>
            <section className="ourMissionParent">
                <div className="row container">
                    <div className="innerMissionChild">
                        <div className="ourMissionText">
                            <h1 className="ourMissionHead" data-aos="fade-right">
                                Our Mission
                            </h1>
                            <ul>
                                <li data-aos="fade-left" className='ourMissionLists'>To enlightening the career of youths around every corner in a way that he enlightens his soul, his career and his country.</li>
                                <li data-aos="fade-right" className='ourMissionLists'>To develop reliable skills in one’s mind to grow one’s soul.</li>
                                <li data-aos="fade-left" className='ourMissionLists'>To provide practical exposure to numerous skill development programs and a platform to implement live projects and gain knowledge among youths to kickstart their career in tech field.</li>
                            </ul>

                        </div>
                        <img data-aos="fade-left" className='ourMissionTarget' src="/target.png" alt="target" />
                    </div>



                </div>
            </section>
            <section className="ourVisionParent">
                <div className="row container">
                    <div className="col-lg-6 col-md-12" data-aos="zoom-in-right">
                        <img className='ourVisionTarget' src="/vision.png" alt="target" />
                    </div>
                    <div className="col-lg-6 col-md-12" data-aos="zoom-in-left">
                        <div className="ourVisionText">
                            <h1 className="ourVisionHead">
                                Our Vision
                            </h1>
                            <p className='ourVisionPara'>To be among the world’s best IT organization which also believes in imbibing rapid growing technical skills among youths apart from serving with best defense based products and software which can help to brighten up the future of the country. </p>

                        </div>
                    </div>

                </div>
            </section>
            <section className="ourAchieve">
                <div className="row container">
                    <h1 className='text-center ourAchieveHead' data-aos="fade-left">Our Achievers</h1>
                    <div className="col-lg-6 col-md-12" data-aos="fade-right">
                        <img className='achieveImg' src="/achieve.png" alt="achieve" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h5 className='ourAchieveChildHead' data-aos="fade-right">Harshitha Sharma</h5>
                        <p className='ourAchievePara upperPara' data-aos="fade-left">Currently placed in IBM</p>
                        <p className='ourAchievePara' data-aos="fade-right">I completely enjoyed the Python Internship from Vajre India. The one thing which I liked the most about this internship is that we got to learn how to actually implement the skills practically rather than just learning the theoretical parts. Live projedct session made it very interesting and worthy. </p>
                        <div className="d-flex" data-aos="fade-left">
                            <button className='achieveBtn'>Enroll now</button>
                        </div>
                    </div>
                </div>

            </section>
            <div className="ourAchieve">
                <div className="row container">
                    <h1 className='text-center learnerAcrossHead' data-aos="fade-right">Learner’s Across 170+ Countries</h1>
                    <img src="/learnerAcross.png" alt="learnerAcross" />
                </div>
            </div>
            <section className="ourAchieve">
                <div className="row container">
                    <h1 className='text-center learnerAcrossHead' data-aos="fade-left">Join Our Training Programme</h1>
                    <div className="courses">
                        <Course />

                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <Link to='/campus'>
                            <button className='courseBtn'>
                                View all
                            </button>
                        </Link>

                    </div>
                </div>
            </section>
            {/* </div > */}
            <section className="referEarn">
                <div className="row container">
                    <div className="col-lg-6 col-md-12" data-aos="zoom-in-right">
                        <img className='ourVisionTarget' src="/referEarn.png" alt="target" />
                    </div>
                    <div className="col-lg-6 col-md-12" data-aos="zoom-in-left">
                        <div className="ourVisionText">
                            <h5 className='ourAchieveChildHead'>Refer & Earn</h5>

                            <p className='ourAchievePara'>Vajre India Technologies provide self earning opportunities to all the college students out there! Refer your friends for the training + internship programs on different domains like Python, Machine Learning, Java, web development and many more. Earn upto Rs. 25,000 per month. </p>
                            <div className="d-flex joinCourse">
                                <Link to='/refer'>
                                    <button className='achieveBtn'>Join now</button></Link>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
            <section className="sponsors">
                <div className="row container">
                    <h1 className="sponsorsHead text-center" data-aos="fade-right">
                        Our Students Work With
                    </h1>
                    <div className="sponsorsImg">
                        <img data-aos="fade-right" className='sponsorsImage' src="/cog.png" alt="cog" />
                        <img data-aos="fade-left" className='sponsorsImage' src="/acc.png" alt="cog" />
                        <img data-aos="fade-right" className='sponsorsImage' src="/amazon.png" alt="cog" />
                        <img data-aos="fade-left" className='sponsorsImage' src="/wipro.png" alt="cog" />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Landing