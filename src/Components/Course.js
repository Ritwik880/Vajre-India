import React from 'react'
import { COURSEDATA as courseData } from '../utils/constants';
import Slider from 'react-slick';
const Course = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
    };
    return (
        <>
            {
                courseData && courseData.map((curElem) => {
                    const { id, title, rating, teacher, price, image, link } = curElem;
                    return (
                        // <Slider {...settings}>

                        <div className="card mx-2" key={id}>
                            <img src={image} className="card-img-top" alt="course" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {
                                        title
                                    }
                                </h5>
                                <p className='text-muted'>
                                    {
                                        teacher
                                    }
                                </p>
                                <p className='num'>
                                    {
                                        rating
                                    }
                                </p>
                                <a href={link} className='buyThis'>
                                    {
                                        price

                                    }
                                </a>

                            </div>
                        </div>

                        // </Slider>
                    )
                })
            }

        </>
    )
}

export default Course