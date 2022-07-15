import React from 'react'

const Course = (props) => {
    return (
        <>
            <div className="card" data-aos="zoom-out-down">
                <img src="/course.png" className="card-img-top" alt="course" />
                <div className="card-body">
                    <h5 className="card-title">
                        {
                            props.title
                        }
                    </h5>
                    <p className='text-muted'>
                        {
                            props.text
                        }
                    </p>
                    <p className='num'>
                        {
                            props.num
                        }
                    </p>
                    <p>
                        {
                            props.paisa

                        }
                    </p>

                </div>
            </div>

        </>
    )
}

export default Course