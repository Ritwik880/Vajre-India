import React from 'react'

const Campus = () => {
    return (
        <>
            <section className='campusLanding'>
                <div className="row container">
                    <div className="col-lg-6 col-md-12">
                        <div className="landingText" data-aos="fade-right">
                            <h1 className='heading'>Soar Up  You Career</h1>
                            <p className='headingPara'>with India’s #1 Training + Internship Programs </p>
                            <div className="d-flex">
                                <button className='landingBtn'>Contact us</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img data-aos="fade-left" className='landingRight' src="/campusLanding.png" alt="target" />
                    </div>

                </div>
            </section>
            <div className="logBox">
                <div className="row container">

                    <p className="text-center logBoxPara">Our Students work With</p>
                    <div className="log">
                        <img className='mx-4' src="/cog.png" alt="acc" />
                        <img className='mx-4' src="/acc.png" alt="acc" />
                        <img className='mx-4' src="/amazon.png" alt="acc" />
                        <img className='mx-4' src="/wipro.png" alt="acc" />
                    </div>
                </div>
            </div>
            <section className='perk'>
                <div className="row container">
                    <h1 className='perkHead' data-aos="fade-right">Perks of being a Vajrenian</h1>
                    <p className='perkPara' data-aos="fade-left">Wondering , what’s distinctive in the material VIT provides?</p>
                    <div className="col-lg-6 col-md-12">
                        <div className="ourMissionText">
                            <ul>
                                <li className='ourMissionLists' data-aos="fade-right">2-on-1 mentorship</li>
                                <li className='ourMissionLists' data-aos="fade-left">24 by 7 assistance by India’s top trainers </li>
                                <li className='ourMissionLists' data-aos="fade-right">Live sessions by industrial experts</li>
                                <li className='ourMissionLists' data-aos="fade-left">Project based learning to provide practical exposure</li>
                                <li className='ourMissionLists' data-aos="fade-right">Government recognized certificates</li>
                            </ul>

                        </div>

                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img data-aos="fade-right" className='perkImage' src="/perk.png" alt="perk" />

                    </div>
                </div>
            </section>
            <section className='get'>
                <div className="row container">
                    <h1 className='getHead' data-aos="fade-right">Get Into Domain That Fit’s You Perfect</h1>
                    <div className="getImage">
                        <img data-aos="fade-left" className='getImage' src="/getImage.png" alt="" srcset="" />
                    </div>
                </div>
            </section>
            <section className='vit'>
                <div className="row container">
                    <h1 className='vitHead' data-aos="fade-right">VIT Advantages</h1>

                    <div className="cardsRow" data-aos="fade-left">
                        <img className='vitCard' src="/guide.png" alt="guide" />
                        <img className='vitCard' src="/late.png" alt="guide" />
                        <img className='vitCard' src="/club.png" alt="guide" />

                    </div>
                </div>
            </section>
            <section className="faq">
                <div className="row container">
                    <h1 className='faqHead' data-aos="fade-right">Frequently Asked Questions</h1>
                    <div className="accordion mb-4" id="accordionPanelsStayOpenExample" data-aos="fade-left">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    What is training + Internship program of VIT?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                    This program consists of live training sessions where the students will be completing 10 individual projects, will earn an Internship completion certificate  with project completion certificate.
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="accordion mb-4" id="accordionPanelsStayOpenExample2" data-aos="fade-right">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    What is 2-on-1 training program?
                                </button>
                            </h2>
                        </div>

                    </div>
                    <div className="accordion mb-4" id="accordionPanelsStayOpenExample3" data-aos="fade-left">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Will these sessions hamper my college schedule?
                                </button>
                            </h2>

                        </div>

                    </div>
                    <div className="accordion mb-4" id="accordionPanelsStayOpenExample4" data-aos="fade-right">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Will I get placement assistance?
                                </button>
                            </h2>
                        </div>

                    </div>
                    <div className="accordion mb-4" id="accordionPanelsStayOpenExample5" data-aos="fade-left">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Do I require any prior knowledge on the domain I opt to intern ?
                                </button>
                            </h2>

                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Campus