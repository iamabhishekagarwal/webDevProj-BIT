import React from 'react';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import backgroundImage from "../images/mainImage.jpg";
import "./style.css";


export default function CarouselComponent() {
const { t } = useTranslation();

return (
<>
    <Swiper
    id='swiper'
    style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
    }}
    speed={1200}
    parallax={true}
    pagination={{
        clickable: true,
    }}
    navigation={false}
    modules={[Parallax, Pagination, Navigation]}
    className="mySwiper"
    >
    <div
        slot="container-start"
        className="parallax-bg"
        style={{
            backgroundImage: `url(${backgroundImage})`
        }}
        data-swiper-parallax="-23%"
    ></div>
    <SwiperSlide className=''>
        <div className="title1  swiperSlide" data-swiper-parallax="-300">
        {t('homeWelcomeMessage')}
        </div>
        <div className="subtitle"  data-swiper-parallax="-200">
        {t('homeWelcomeCaption')}
        </div>
        <div className="text" data-swiper-parallax="-100">
        {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
        </p> */}
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="title2 swiperSlide" data-swiper-parallax="-300">
        Slide 2
        </div>
        {/* <div className="subtitle" data-swiper-parallax="-200">
        Subtitle
        </div> */}
        <div className="text" data-swiper-parallax="-100">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
        </p>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="title2 swiperSlide" data-swiper-parallax="-300">
        Slide 3
        </div>
        {/* <div className="subtitle" data-swiper-parallax="-200">
        Subtitle
        </div> */}
        <div className="text" data-swiper-parallax="-100">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
        </p>
        </div>
    </SwiperSlide>
    </Swiper>
</>
);
}





