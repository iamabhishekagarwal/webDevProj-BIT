import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../images/page1.jpg";
import image2 from "../images/page2.jpg";
import image3 from "../images/page3.jpg";
function CarouselComponent() {
return (
<div>
<Carousel>
    <Carousel.Item>
    <img style={{height:"90vh",width:"90vw"}} className="d-block w-100" src={image1} alt='first '/>
    {/* <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
    <img style={{height:"90vh",width:"90vw"}} className="d-block w-100" src={image2} alt='second '/>
    {/* <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
    <img style={{height:"90vh",width:"90vw"}} className="d-block w-100" src={image3} alt='third '/>
    {/* <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
    </Carousel.Caption> */}
    </Carousel.Item>
    </Carousel>
</div>
)
}

export default CarouselComponent
