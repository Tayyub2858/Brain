import React from "react";
import './CareerStyle.css';
import saqibriaz from '../../Assets/Front-Page/Saqib-Riaz.png'
import shokatjaved from '../../Assets/Front-Page/Shoukat.png'
import zafarabbas from '../../Assets/Front-Page/Zafar-Abbas.png'
import hafiztayyab from '../../Assets/Front-Page/Hafiz-Tayyab.png'
import irfan from '../../Assets/Front-Page/Irfan.png'

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
                                    <h3 className="career-img-name">Mr.Saqib Riaz, FCA</h3>
                                    <h4 className="career-img-name">Cheif Financial Officer, <br /> Etihad Power Generation Limited</h4>

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
                                    <img src={shokatjaved} alt="" className="caree-img" />
                                    <h3 className="career-img-name">Mr.Shoukat Javed</h3>
                                    <h4 className="career-img-name">Deputy Manager IT, <br /> J.K Spinning Mills</h4>

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
                                    <img src={zafarabbas} alt="" className="caree-img" />
                                    <h3 className="career-img-name">Mr. Zafar Abbas</h3>
                                    <h4 className="career-img-name">Regional Sales Manager,<br /> Pharmasol (PVT.) LTD.</h4>
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
                                    <img src={hafiztayyab} alt="" className="caree-img" />
                                    <h3 className="career-img-name">Mr. Hafiz Tayyab</h3>
                                    <h4 className="career-img-name">Cheif Financial Officer, <br /> United Empire Properties LLP</h4>
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
                                    <img src={irfan} alt="" className="caree-img" />
                                    <h3 className="career-img-name">Mr. Irfan Younas</h3>
                                    <h4 className="career-img-name">Group Head Of Internal Audit, <br /> Etihad Power Generation Limited</h4>
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