import React from 'react'
import Csr from './Csr'
const Month = (props) => {
    return (
        <>
            <section className='allCheckLanding'>
                <div className="row container">

                    <h1 className='allCheckHead' data-aos="fade-left"><span className='spanProgram'>1 Month</span> Internship Program</h1>
                    <p className='allCheckPara' data-aos="fade-right">Learn from global expert and get practical exposure to differenet technology</p>
                    <div className="allCheck">
                        <div className="allcheckBox">
                            <div className="check1 my-4" data-aos="zoom-in-right">
                                <img className='check' src="/check.png" alt="check" />
                                <p className='checkPara mb-0'>
                                    Project Completion
                                </p>
                            </div>
                            <div className="check1 my-4" data-aos="zoom-in-right">
                                <img className='check' src="/check.png" alt="check" />
                                <p className='checkPara mb-0'>
                                    Lor
                                </p>
                            </div>
                        </div>
                        <div className="allcheckBox">
                            <div className="check1 my-4" data-aos="zoom-in-right">
                                <img className='check' src="/check.png" alt="check" />
                                <p className='checkPara mb-0'>

                                    Internship Certificate
                                </p>
                            </div>
                            <div className="check1 my-4" data-aos="zoom-in-right">
                                <img className='check' src="/check.png" alt="check" />
                                <p className='checkPara mb-0'>
                                    Career Support
                                </p>
                            </div>
                        </div>
                    </div>

                    <hr />
                </div>
            </section>
            <Csr title="The complete 2022 Web Development Boot Camp" teacher="Dr Angela Yu" rupees="₹450" button="Enroll" />
            <Csr title="The complete 2022 Web Development Boot Camp" teacher="Dr Angela Yu" rupees="₹450" button="Enroll" />
            <Csr title="The complete 2022 Web Development Boot Camp" teacher="Dr Angela Yu" rupees="₹450" button="Enroll" />
            <Csr title="The complete 2022 Web Development Boot Camp" teacher="Dr Angela Yu" rupees="₹450" button="Enroll" />
            <Csr title="The complete 2022 Web Development Boot Camp" teacher="Dr Angela Yu" rupees="₹450" button="Enroll" />
            <Csr title="The complete 2022 Web Development Boot Camp" teacher="Dr Angela Yu" rupees="₹450" button="Enroll" />

        </>
    )
}

export default Month