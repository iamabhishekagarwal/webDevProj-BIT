import { default as React, useEffect } from "react";
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselComponent from "../components/CarouselComponent";
import Footer from "../components/Footer.js";
import './Home.css';
function Home(props) {
useEffect(() => {
props.setProgress(50);
setTimeout(() => {
    props.setProgress(100);
}, 500);
}, []);
return (
<>
    <section id="section1">
    <CarouselComponent />
    </section>

    <section className="my-3" id="section2">
    <h1 className="text-center" style={{color:"whitesmoke"}}>Some Content</h1>
    </section>

    <section className="my-3" id="section3">
    <h2 className="text-center" style={{color:"whitesmoke"}}>Available for</h2>
    <div className="my-3 text-center">
    <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
        }}
        pagination={false}
        modules={[EffectCube, Pagination]}
        autoplay={{
            delay: 1000, // Set the delay in milliseconds (adjust as needed)
            disableOnInteraction: false, // Allow manual interaction to not stop autoplay
        }}
          loop={true} // Enable loop if you want continuous rotation
        className="mySwiper"
    >
        <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>

        <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>

        <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        
        <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
    </Swiper>
    </div>
    </section>

    <section className="my-3" id="section4">
    <h2 style={{color:"whitesmoke"}} className="text-center">About us</h2>
    <div className="my-3 container">
        <div>
        <h3>Our Mission</h3>
        <p>At codeVISTA, our mission is to create a dynamic online space where coders of all levels and backgrounds can come together to learn, create, and collaborate. We aim to provide a seamless and powerful code compilation experience that transcends barriers, making coding accessible to everyone. Through our vibrant community, we aspire to foster knowledge sharing, mentorship, and a sense of belonging among coders worldwide. Our commitment is to empower individuals to turn their code into impactful solutions, driving innovation and excellence in the ever-evolving world of technology.</p>
        </div>
        <div>
        <h3>Our Vision</h3>
        <p>.......</p>
        </div>
    </div>
    </section>

    <section id="section5">
    <div className="container">
        <h2 className="text-center">Our Team</h2>
        <p>image and about our team</p>
    </div>
    </section>

    <section id="section5">
    <Footer></Footer>
    </section>

</>
);
}

export default Home;
