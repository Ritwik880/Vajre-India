import React, { Component } from 'react'
// import dynamic from 'react/dynamic';
// const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        930: {
            items: 1,
        },
        1200: {
            items: 2,
        }
    }
}
export class Card extends Component {

    _isMounted = false;
    state = {
        display: false
    }

    componentDidMount() {
        this._isMounted = true;
        this.setState({ display: true })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    render(props) {
        return (
            <>

                <div className='item'>
                    <div className="cardBox" data-aos="fade-left">
                        <div className="cardBody">
                            <h5 className="cardTitle text-center">
                                {this.props.title}
                            </h5>
                            <p className="cardText">
                                {this.props.para}
                            </p>

                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Card