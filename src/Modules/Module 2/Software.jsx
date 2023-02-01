import React from "react";
import './software.css'
import { Grid } from "@material-ui/core";
import Excel from '../../Assets/Front-Page/Excel.png';
import PowerBi from '../../Assets/Front-Page/Power-bi.png';
import Tableau from '../../Assets/Front-Page/Tableau.png';
import Python from '../../Assets/Front-Page/Python.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";

const Software = () => {
    return (
        <>
            <div className="software-container">
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <div className="software-slide-container">
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={5}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src={Excel} alt="companies" className="software-img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={PowerBi} alt="companies" className="software-img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Tableau} alt="companies" className="software-img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Python} alt="companies" className="software-img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Excel} alt="companies" className="software-img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={PowerBi} alt="companies" className="software-img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Tableau} alt="companies" className="software-img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Python} alt="companies" className="software-img" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default Software;