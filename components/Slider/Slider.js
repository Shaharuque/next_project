import React from 'react';
import styles from './Footer.module.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

const SliderImage = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div style={{ backgroundColor: "#F1F2F4", padding: '5px 0', marginTop: '15px' }}>
            <div style={{ margin: '102px', backgroundColor: "#F1F2F4" }} className={styles.slick_slide}>
                <h3 style={{ textAlign: "end", marginBottom: '10px' }}>Today's Stories</h3>
                <Slider {...settings}>
                    <div>
                        <img
                            src="https://media.istockphoto.com/id/1370822454/photo/apocalyptic-city-war-zone.jpg?b=1&s=170667a&w=0&k=20&c=Mqr9Pz6FvZbT4sSNhWdXkWTOfYIwE2fKr623oWm0sIk="
                            alt="Avatar"
                            style={{ width: "100%", borderRadius: "5px",padding:'0 10px' }}
                        />
                    </div>

                    <div style={{margin:'0 10px'}}>
                        <img
                            src="https://media.istockphoto.com/id/1370822454/photo/apocalyptic-city-war-zone.jpg?b=1&s=170667a&w=0&k=20&c=Mqr9Pz6FvZbT4sSNhWdXkWTOfYIwE2fKr623oWm0sIk="
                            alt="Avatar"
                            style={{ width: "100%", borderRadius: "5px",padding:'0 10px' }}
                        />
                    </div>


                    <div>
                        <img
                            src="https://media.istockphoto.com/id/1370822454/photo/apocalyptic-city-war-zone.jpg?b=1&s=170667a&w=0&k=20&c=Mqr9Pz6FvZbT4sSNhWdXkWTOfYIwE2fKr623oWm0sIk="
                            alt="Avatar"
                            style={{ width: "100%", borderRadius: "5px",padding:'0 10px' }}
                        />
                    </div>


                    <div>
                        <img
                            src="https://media.istockphoto.com/id/1370822454/photo/apocalyptic-city-war-zone.jpg?b=1&s=170667a&w=0&k=20&c=Mqr9Pz6FvZbT4sSNhWdXkWTOfYIwE2fKr623oWm0sIk="
                            alt="Avatar"
                            style={{ width: "100%", borderRadius: "5px",padding:'0 10px' }}
                        />
                    </div>


                    <div>
                        <img
                            src="https://media.istockphoto.com/id/1370822454/photo/apocalyptic-city-war-zone.jpg?b=1&s=170667a&w=0&k=20&c=Mqr9Pz6FvZbT4sSNhWdXkWTOfYIwE2fKr623oWm0sIk="
                            alt="Avatar"
                            style={{ width: "100%", borderRadius: "5px",padding:'0 10px' }}
                        />
                    </div>


                    <div>
                        <img
                            src="https://media.istockphoto.com/id/1370822454/photo/apocalyptic-city-war-zone.jpg?b=1&s=170667a&w=0&k=20&c=Mqr9Pz6FvZbT4sSNhWdXkWTOfYIwE2fKr623oWm0sIk="
                            alt="Avatar"
                            style={{ width: "100%", borderRadius: "5px",padding:'0 10px' }}
                        />
                    </div>


                    <div>
                        <img
                            src="https://media.istockphoto.com/id/1370822454/photo/apocalyptic-city-war-zone.jpg?b=1&s=170667a&w=0&k=20&c=Mqr9Pz6FvZbT4sSNhWdXkWTOfYIwE2fKr623oWm0sIk="
                            alt="Avatar"
                            style={{ width: "100%", borderRadius: "5px",padding:'0 10px' }}
                        />
                    </div>

                    <div>
                        <img
                            src="https://media.istockphoto.com/id/1370822454/photo/apocalyptic-city-war-zone.jpg?b=1&s=170667a&w=0&k=20&c=Mqr9Pz6FvZbT4sSNhWdXkWTOfYIwE2fKr623oWm0sIk="
                            alt="Avatar"
                            style={{ width: "100%", borderRadius: "5px",padding:'0 10px' }}
                        />
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default SliderImage;