import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import UpArrow from '../../assets/arrow.png'
import DownArrow from '../../assets/down.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import { Pagination } from 'swiper/modules';


function AlsoLike() {
    const [trendingData, setTrendingData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchTrending();
                setTrendingData(data.coins.slice(0, 12).map(coin => coin.item));
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, []);

    return (
        <>
            {/* {console.log(priceDataINR)} */}
            <Card style={{ width: 'auto' }} className="my-3 px-md-5">
                <Card.Body className="mx-md-5">
                    <Card.Title className="text-dark fw-bold">You May Also Like</Card.Title>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >

                        {trendingData.map((data) => (
                            data.symbol !== "COQ" && (
                                <SwiperSlide key={data.id} className="alsoSlide">
                                    <Card>
                                        <Card.Body>
                                            <Card.Subtitle className="mb-2">{data.thumb && <Image className="alsoLogoImages" src={data.thumb} />}{<span className="symbolName">{data.symbol}</span>}

                                                {data && <span className={`d-inline-block symbolName float-end p-1 ${data.data.price_change_percentage_24h.usd >= 0 ? 'bg-hara text-success' : 'bg-laal text-danger'}`}>
                                                    <Image
                                                        src={data.data.price_change_percentage_24h.usd >= 0 ? UpArrow : DownArrow}
                                                        width="15"
                                                        height="15"
                                                        style={{ marginRight: '5px' }}
                                                    />

                                                    {data && data.data.price_change_percentage_24h.usd.toFixed(2)}%</span>}


                                                {/* </span>} */}
                                            </Card.Subtitle>
                                            <Card.Title className="fw-bold textsymbolName">{data.data.price.toFixed(2)}</Card.Title>
                                            {data.thumb && <Image className="alsoCharts" src={data.data.sparkline} />}
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            )
                        ))}

                    </Swiper >
                    <Card.Title className="text-dark fw-bold py-md-3 mt-4">Trending Coins</Card.Title>

                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >


                        {trendingData.map((data) => (
                            data.symbol !== "COQ" && (
                                <SwiperSlide key={data.id} className="alsoSlide">
                                    <Card>
                                        <Card.Body>
                                            <Card.Subtitle className="mb-2">{data.thumb && <Image className="alsoLogoImages" src={data.thumb} />}{<span className="symbolName">{data.symbol}</span>}
                                                {data && <span className={`d-inline-block float-end symbolName p-1 ${data.data.price_change_percentage_24h.usd >= 0 ? 'bg-hara text-success' : 'bg-laal text-danger'}`}>
                                                    <Image
                                                        src={data.data.price_change_percentage_24h.usd >= 0 ? UpArrow : DownArrow}
                                                        width="15"
                                                        height="15"
                                                        style={{ marginRight: '5px' }}
                                                    />

                                                    {data && data.data.price_change_percentage_24h.usd.toFixed(2)}%</span>}


                                            </Card.Subtitle>
                                            <Card.Title className="fw-bold textsymbolName">{data.data.price.toFixed(2)}</Card.Title>
                                            {data.thumb && <Image className="alsoCharts" src={data.data.sparkline} />}
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            )
                        ))}
                    </Swiper>
                </Card.Body>
            </Card>
        </>
    )
}

const fetchTrending = async () => {
    // CG-WZ2XGkWH8oTpLKrzd71rksnk

    const options = { method: 'GET', headers: { 'x-cg-demo-api-key': 'CG-WZ2XGkWH8oTpLKrzd71rksnk' } };
    const response = await fetch('https://api.coingecko.com/api/v3/search/trending', options);
    const result = await response.json();
    return result;
}

export default AlsoLike