import React from "react";
import './CareerStyle.css';
import saqibriaz from '../../Assets/Front-Page/saqibriaz.png'
import { Grid } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
const Career = () => {
    return (
        <>
            <div className="career-container">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        type:"progressbar",
                    }}
                    
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="career-box">
                            <Grid container>
                                <Grid item xs={12} sm={12} md={9}>
                                    <p className="career-text">“I feel lucky and grateful to have found Brain Analytics in the early stage of my career.
                                        These courses gave me mind-blowing articulation of how to become a great IT professional. Thank you!”</p>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3}>
                                    <img src={saqibriaz} alt="" className="caree-img" />
                                    <h3 className="career-img-name">Saqib Riaz</h3>
                                </Grid>
                            </Grid>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="career-box">
                            <Grid container>
                                <Grid item xs={12} sm={12} md={9}>
                                    <p className="career-text">“I feel lucky and grateful to have found Brain Analytics in the early stage of my career.
                                        These courses gave me mind-blowing articulation of how to become a great IT professional. Thank you!”</p>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3}>
                                    <img src={saqibriaz} alt="" className="caree-img" />
                                    <h3 className="career-img-name">Saqib Riaz</h3>
                                </Grid>
                            </Grid>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="career-box">
                            <Grid container>
                                <Grid item xs={12} sm={12} md={9}>
                                    <p className="career-text">“I feel lucky and grateful to have found Brain Analytics in the early stage of my career.
                                        These courses gave me mind-blowing articulation of how to become a great IT professional. Thank you!”</p>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3}>
                                    <img src={saqibriaz} alt="" className="caree-img" />
                                    <h3 className="career-img-name">Saqib Riaz</h3>
                                </Grid>
                            </Grid>

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}
export default Career;
{/* <div className="career-box">
                  <Grid container>
                  <Grid item xs={12} sm={12} md={9}>
                    <p className="career-text">“I feel lucky and grateful to have found Brain Analytics in the early stage of my career. 
                         These courses gave me mind-blowing articulation of how to become a great IT professional. Thank you!”</p>
                   </Grid>
                   <Grid item xs={12} sm={12} md={3}>
                        <img src={SamSheng} alt=""  className="caree-img" />
                        <h3 className="career-img-name">Sam Sheng</h3>
                   </Grid>
                  </Grid>
                   
                </div> */}