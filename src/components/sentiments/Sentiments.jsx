// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Logo1 from '../../assets/trend.png'
import Logo2 from '../../assets/email.png'
import Logo3 from '../../assets/salary.png'
import Anal1 from '../../assets/analyst.png'
import Anal from '../../assets/anal1.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Sentiments() {
    return (
        <>
            <Card className="my-3">
                <Card.Body>
                    <Card.Title className="fw-bold text-dark fs-4">Sentiment</Card.Title>
                    <Card.Subtitle className="py-2 fs-5 fw-bold text-muted">Key Events</Card.Subtitle>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >

                        <SwiperSlide>
                            <Alert variant="primary" className="d-inline-block">
                                <div style={{ display: 'flex', alignItems: 'top' }}>
                                    <Image className="sentiImage" src={Logo1} />
                                    <div>
                                        <Alert.Heading className="alertHeading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel atque aspernatur obcaecati</Alert.Heading>
                                        <p className="text-secondary">
                                            Totam quidem nisi, eligendi architecto voluptatum hic quisquam, ipsa molestiae deserunt explicabo blanditiis corporis accusantium maxime quia modi iusto porro? Obcaecati minus assumenda modi.
                                        </p>
                                    </div>
                                </div>
                            </Alert>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Alert variant="success" className="d-inline-block">
                                <div style={{ display: 'flex', alignItems: 'top' }}>
                                    <Image className="sentiImage" src={Logo2} />
                                    <div>
                                        <Alert.Heading className="alertHeading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel atque aspernatur obcaecati</Alert.Heading>
                                        <p className="text-secondary">
                                            Totam quidem nisi, eligendi architecto voluptatum hic quisquam, ipsa molestiae deserunt explicabo blanditiis corporis accusantium maxime quia modi iusto porro? Obcaecati minus assumenda modi.
                                        </p>
                                    </div>
                                </div>
                            </Alert>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Alert variant="danger" className="d-inline-block">
                                <div style={{ display: 'flex', alignItems: 'top' }}>
                                    <Image className="sentiImage" src={Logo3} />
                                    <div>
                                        <Alert.Heading className="alertHeading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel atque aspernatur obcaecati</Alert.Heading>
                                        <p className="text-secondary">
                                            Totam quidem nisi, eligendi architecto voluptatum hic quisquam, ipsa molestiae deserunt explicabo blanditiis corporis accusantium maxime quia modi iusto porro? Obcaecati minus assumenda modi.
                                        </p>
                                    </div>
                                </div>
                            </Alert>
                        </SwiperSlide>
                    </Swiper >


                    <Card.Subtitle className="py-3 mt-2 fs-5 fw-bold text-muted">Analyst Estimates</Card.Subtitle>
                    <Image className="sentiImage d-none d-md-block" src={Anal1} fluid />
                    <Image className="sentiImage d-block d-md-none" src={Anal} fluid />

                </Card.Body>
            </Card >


        </>
    );
}
