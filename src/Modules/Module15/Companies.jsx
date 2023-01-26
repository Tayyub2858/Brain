import React from 'react';
import { Grid } from '@material-ui/core';
import './CompaniesStyles.css';
import cat from '../../Assets/Front-Page/Caterpillar.png';
import coke from '../../Assets/Front-Page/Coca-cola.png';
import kpmg from '../../Assets/Front-Page/Kpmg.png';
import mk from '../../Assets/Front-Page/Michael-kors.png';
import pfizer from '../../Assets/Front-Page/Pfizer.png';
import quest from '../../Assets/Front-Page/Quest.png';
import tp from '../../Assets/Front-Page/Tetra-pak.png';
import mitsubishi from '../../Assets/Front-Page/Mitsubishi.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";

const Companies = () => {
    return (
        <>
            <div className="companies-container">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="left-companies-container">
                            <h2 className="companies-heading">
                                Trusted by top companies to <br /> upskill their teams
                            </h2>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="right-companies-container">
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={3}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={false}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>

                                    <img src={cat} alt="companies" className="companies-img" />

                                </SwiperSlide>
                                <SwiperSlide>

                                    <img src={coke} alt="companies" className="companies-img" />

                                </SwiperSlide>
                                <SwiperSlide>

                                    <img src={kpmg} alt="companies" className="companies-img" />

                                </SwiperSlide>
                                <SwiperSlide>

                                    <img src={mk} alt="companies" className="companies-img" />

                                </SwiperSlide>
                                <SwiperSlide>

                                    <img src={pfizer} alt="companies" className="companies-img" />

                                </SwiperSlide>
                                <SwiperSlide>

                                    <img src={quest} alt="companies" className="companies-img" />

                                </SwiperSlide>
                                <SwiperSlide>

                                    <img src={tp} alt="companies" className="companies-img" />

                                </SwiperSlide>
                                <SwiperSlide>

                                    <img src={mitsubishi} alt="companies" className="companies-img" />

                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Companies;