import { default as React, useEffect } from "react";
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselComponent from "../components/CarouselComponent";
import Footer from "../components/Footer.js";
import CLogo from "../icons/C.svg";
import CplusplusLogo from "../images/C++Logo.png";
import GroupImage from "../images/GroupImage.jpeg";
import javaLogo from "../images/javaLogo.png";
import pythonLogo from "../images/pythonLogo.png";
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
    <section id="section1" >
    <div style={{width:"100vw",height:"90vh"}}>
    <CarouselComponent />
    </div>
    </section>

    <section className="my-3" id="section2">
    <h1 className="text-center" >Some Content</h1>
    </section>

    <section className="my-3" id="section3">
    <h2 className="text-center" >Available for</h2>
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
            <img style={{backgroundColor:"black"}} src={javaLogo} />
        </SwiperSlide>
        
        <SwiperSlide>
        <img style={{backgroundColor:"#1B1212"}} src={pythonLogo} />
        </SwiperSlide>

        <SwiperSlide>
            <img style={{backgroundColor:"#5C6BC0"}} src={CLogo}/>
        </SwiperSlide>

        <SwiperSlide>
            <img style={{backgroundColor:"#037FCC"}} src={CplusplusLogo} />
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
    <div>
        <div>
        <h2 className="text-center">Our Team</h2>
        </div>
        <div className="text-center">
        <img className="" style={{width:"auto",height:"25vh",}} src={GroupImage} alt="Image" />
        </div>
        <div className="row my-3 text-center" style={{color:"white"}}>
            <div className="col-6">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo quam repudiandae sunt impedit esse obcaecati doloremque, nisi assumenda consequatur similique quas. Doloremque commodi error quasi hic dolorem nulla fuga cupiditate maxime esse tempore?</p>
            </div>
            
            <div className="col-6">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquid itaque doloribus enim, nulla id ipsa quibusdam autem non, similique impedit consequuntur blanditiis dolorem sequi magnam? Exercitationem eaque numquam consectetur aperiam sunt ipsum perferendis!</p>
            </div>
            <div className="col-6">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquid itaque doloribus enim, nulla id ipsa quibusdam autem non, similique impedit consequuntur blanditiis dolorem sequi magnam? Exercitationem eaque numquam consectetur aperiam sunt ipsum perferendis!</p>
            </div>
            <div className="col-6 ">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquid itaque doloribus enim, nulla id ipsa quibusdam autem non, similique impedit consequuntur blanditiis dolorem sequi magnam? Exercitationem eaque numquam consectetur aperiam sunt ipsum perferendis!</p>
            </div>
        </div>
    </div>
    </section>

    <section id="section5">
    <Footer></Footer>
    </section>

</>
);
}

export default Home;
