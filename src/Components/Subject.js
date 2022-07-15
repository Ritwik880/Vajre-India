import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'
const Subject = () => {
    return (
        <>
            <section className='subject'>
                <div className="row container">
                    <div className='subjectContent'>
                        <h1 className='subjectHead' data-aos="fade-left">The complete 2022 Web Development Boot Camp</h1>
                        <p className='subjectPara' data-aos="fade-right">How to become a complete Web Developer and get hired! Build 12+ projects, learn Web Development.</p>
                        <div className="star" data-aos="fade-left">
                            4.0
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p className='subjectSubPara' data-aos="fade-right">
                            <span className='subjectSpan'>Instructor : </span> Pahuljeet Kaur
                        </p>
                    </div>
                </div>
            </section>

            <section className="syllabus">
                <div className="row container">
                    <h2 className='syllHead' data-aos="fade-right">Syllabus</h2>
                    <div className="syllabusContent">
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item" data-aos="fade-left">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        Introduction to HTML
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body">
                                        <p>Introduction to HTML</p>
                                        <p>Anatomy of HTML</p>
                                        <p>What is The HTML Boilerplate?</p>
                                        <p>How to Structure Text in HTML</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" data-aos="fade-right">
                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        Introduction to CSS
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div className="accordion-body">
                                        <p>Introduction to CSS</p>
                                        <p>Inline CSS</p>
                                        <p>The Anatomy of CSS</p>
                                        <p>CSS Selectors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" data-aos="fade-left">
                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        More Sections
                                    </button>
                                </h2>

                            </div>
                        </div>
                        <img className='subjectCard' src="/rightSubject.png" alt="rightSubject" />
                    </div>
                </div>
            </section>

            <section className='description'>
                <div className="row container">
                    <div className="descriptionText">
                        <h3 className='descriptionHead' data-aos="fade-left">Description</h3>
                        <p className='descriptionPara' data-aos="fade-right">Welcome to the Complete Web Development Course, the only course you need to learn to code and become a full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of Vajre Technologies</p>
                        <div className="d-flex">
                            <button className='showMoreBtn'>Show More <FiChevronDown /></button>
                        </div>
                        <img data-aos="fade-left" className='my-3 mb-5 descriptionImage' src="/bestReview.png" alt="images" />
                        <img data-aos="fade-right" className='mb-5 descriptionImage' src="/instructor.png" alt="images" />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Subject