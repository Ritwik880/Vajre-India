import React from 'react'


const About = () => {
  return (
    <>
      <section className="aboutSection">
        <div className="row container">
          <div className="col-lg-7 col-md-12">
            <div className="aboutText">
              <h3 data-aos="zoom-in-right" className='aboutSectionHead'>We Are Inida’s Fastest Growing Product Based IT Company</h3>
              <p className='aboutPara' data-aos="zoom-in-left">Vajre India Technologies is India’s fastest growing Product Based IT Company building product in the field of Defense & Renewable Energy Source Sector. Our team was also praised by Honorable Prime Minister & Defense Minster of India at Indian Pavillion for innovative work in Defense Sector. Apart from this we also provide Project Based Learning Platform to youth where our skilled trainers undertake technical training and promote Research and Innovation among youth of India.</p>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <img data-aos="zoom-in-right" className='aboutImg' src="/aboutLanding.png" alt="aboutLanding" />
          </div>
        </div>
      </section>
      <section className="aboutMission">
        <div className="row container">
          <div className="aboutchildMission">
            <div className="col-lg-6 col-md-12" data-aos="fade-right">
              <div className="ourMissionText">
                <h1 className="ourMissionHead">
                  Our Mission
                </h1>
                <ul>
                  <li className='ourMissionLists'>To enlightening the career of youths around every corner in a way that he enlightens his soul, his career and his country.</li>
                  <li className='ourMissionLists'>To develop reliable skills in one’s mind to grow one’s soul.</li>
                  <li className='ourMissionLists'>To provide practical exposure to numerous skill development programs and a platform to implement live projects and gain knowledge among youths to kickstart their career in tech field.</li>
                </ul>

              </div>
            </div>
            <div className="col-lg-6 col-md-12" data-aos="fade-left">
              <img className='ourMissionTarget' src="/target.png" alt="target" />
            </div>
          </div>

          <div className="aboutVision">
            <div className="col-lg-6 col-md-12" data-aos="fade-left">
              <img className='ourVisionTarget' src="/vision.png" alt="target" />
            </div>
            <div className="col-lg-6 col-md-12" data-aos="fade-right">
              <div className="ourVisionText">
                <h1 className="ourVisionHead">
                  Our Vision
                </h1>
                <p className='ourVisionPara'>To be among the world’s best IT organization which also believes in imbibing rapid growing technical skills among youths apart from serving with best defense based products and software which can help to brighten up the future of the country. </p>

              </div>
            </div>

          </div>


        </div>

      </section>
      <section className="aboutWhy">
        <div className="row container">
          <div className="col-lg-7 col-md-12" data-aos="zoom-in-right">
            <div className="ourMissionText">
              <h2 className="aboutWhyHead">
                Why Should You Choose Us ?
              </h2>
              <ul>
                <li className='ourMissionLists'>Best Project Based Learning Platform across India</li>
                <li className='ourMissionLists'>Efficient learning is our primary goal.</li>
                <li className='ourMissionLists'>Our proficient industry experts from all over India is available to provide 24/7 to provide quality learning methods.</li>
                <li className='ourMissionLists'>We focus on 360 degree learning solution by providing overall development of the students.</li>
                <li className='ourMissionLists'>We have worked as vendor for different organization across India to provide them best employees.</li>
                <li className='ourMissionLists'>Work on real Industry Projects & Use cases</li>
                <li className='ourMissionLists'>More than 5000+ students who joined as a Intern with us are placed in different MNCs.</li>

              </ul>

            </div>
          </div>
          <div className="col-lg-5 col-md-12" data-aos="zoom-in-left">
            <img className='aboutWhyImg' src="/aboutWhyImg.png" alt="aboutWhyImg" />
          </div>


        </div>
      </section>
      <section className="aboutService">
        <div className="row container">
          <h2 className='aboutServiceHead'>Our Services</h2>
          <div className="serviceBox mb-5">
            <img data-aos="fade-right" className='aboutServiceImg' src="/one.png" alt="one" />
            <img data-aos="fade-right" className='aboutServiceImg' src="/two.png" alt="one" />
            <img data-aos="fade-right" className='aboutServiceImg' src="/three.png" alt="one" />
          </div>
          <div className="service2Box mb-5">
            <img data-aos="fade-left" className='aboutServiceImg' src="/four.png" alt="one" />
            <img data-aos="fade-left" className='aboutServiceImg' src="/five.png" alt="one" />
            <img data-aos="fade-left" className='aboutServiceImg' src="/six.png" alt="one" />

          </div>
        </div>
      </section>

      <section className="ourTestimonials">
        <div className="row container">
          <h2 className='aboutTestHead'>Our Testimonials</h2>
        </div>
      </section>


    </>
  )
}

export default About