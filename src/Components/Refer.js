import React from 'react'

const Refer = () => {
    return (
        <>
            <section className='campusLanding'>
                <div className="row container">
                    <div className="col-lg-6 col-md-12">
                        <div className="landingText">
                            <h1 className='heading' data-aos="fade-left">Earn while you learn with VIT </h1>
                            <p className='headingPara' data-aos="fade-right">Become our Campus Ambassador today!</p>
                            <div className="d-flex">
                                <button className='landingBtn' data-aos="fade-left">Register With Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img data-aos="fade-right" className='landingRight' src="/refer.png" alt="target" />
                    </div>

                </div>
            </section>
            <section className='referCard'>
                <div className="row container">
                    <h1 className='referCardHead text-center' data-aos="fade-right">How Does It Work ?</h1>

                    <div className="referEarnCards">
                        <img data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className='referPng' src="/fill.png" alt="fill" />
                        <img data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className='referPng' src="/get.png" alt="fill" />
                        <img data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className='referPng' src="/enroll.png" alt="fill" />
                        <img data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className='referPng' src="/paid.png" alt="fill" />
                    </div>

                </div>
            </section>
            <section className="benefit">
                <div className="row container">
                    <h1 className='benefitHead' data-aos="fade-right">Benefits</h1>
                    <div className="col-lg-8 col-md-12">
                        <div className="benBox" data-aos="fade-left">
                            <p className='getCampusPara'>Get Campus Ambassador Certificate</p>
                            <img className='getCampus' src="/getCampus.png" alt="getCampus" />
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-12">

                    </div>
                    <div className="col-lg-3 col-md-12">

                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="benBox2" data-aos="fade-right">
                            <img className='getCampus' src="/generate.png" alt="getCampus" />
                            <p className='getCampusPara'>Generate massive amounts of income with minimum efforts</p>
                        </div>

                    </div>

                    <div className="col-lg-8 col-md-12">
                        <div className="benBox2" data-aos="fade-left">
                            <p className='getCampusPara'>Goodies and other perks</p>
                            <img className='getCampus' src="/goodies.png" alt="getCampus" />
                        </div>

                    </div>



                </div>
            </section>
            <section className='faqLand'></section>

        </>
    )
}

export default Refer