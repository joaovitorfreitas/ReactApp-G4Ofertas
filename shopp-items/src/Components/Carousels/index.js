import React from "react";
import { Carousel} from "react-bootstrap";
import Banner1 from "../../Assets/Banner/Banner1.png"


export const Carousels = () =>{
    return(
        <>
            <Carousel>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src={Banner1}
                    alt="First slide"
                    />
                 
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src={Banner1}
                    alt="Second slide"
                    />

                        </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Banner1}
                    alt="Third slide"
                    />
 
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Carousels;