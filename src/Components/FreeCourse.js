import React from 'react'
import Course from './Course'
const FreeCourse = (props) => {
    return (
        <>
            <section className="freeCourse">
                <div className="row container">
                    <h2 className="freeHead text-center">
                        {
                            props.title
                        }
                    </h2>
                    <div className="courses my-4">
                        <Course title="The complete 2022 Web Development Boot Camp" text="Dr Angela Yu" num="4.0
" paisa="₹450" />
                        <Course title="The complete 2022 Web Development Boot Camp" text="Dr Angela Yu" num="4.0
" paisa="₹450" />
                        <Course title="The complete 2022 Web Development Boot Camp" text="Dr Angela Yu" num="4.0
" paisa="₹450" />


                    </div>
                    <div className="d-flex justify-content-center align-items-center pb-5">
                        <button className='courseBtn'>
                            View all
                        </button>

                    </div>
                </div>
            </section>
        </>
    )
}

export default FreeCourse