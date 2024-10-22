import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import UpArrow from '../../assets/arrow.png'
import DownArrow from '../../assets/down.png'

function TrendingCoins() {
    const [data2, setData2] = useState(null);
    const [data3, setData3] = useState(null);
    const [data1, setData1] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchTrending();
                setData1(data.coins[0].item);
                setData2(data.coins[1].item);
                setData3(data.coins[2].item);
                console.log(data.coins[0].item.name);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, []);

    return (
        <>
            {/* {console.log(priceDataINR)} */}
            <Card style={{ width: 'auto' }} className="mt-3">
                <Card.Body>
                    <Card.Title className="text-dark fw-bold">Treding Coins (24h)</Card.Title>
                    <Card.Text className="pt-2 text-secondary fw-bold">
                        {data1 && data1.thumb && <Image src={data1.small} width="40" height="40" style={{ marginRight: '10px' }} />}
                        {data1 && <span>{data1.name + " (" + data1.symbol + ")"}</span>}

                        {data1 && <span className={`d-inline-block float-end p-1 ${data1.data.price_change_percentage_24h.usd >= 0 ? 'bg-hara text-success' : 'bg-laal text-danger'}`}>
                            <Image
                                src={data1.data.price_change_percentage_24h.usd >= 0 ? UpArrow : DownArrow}
                                width="15"
                                height="15"
                                style={{ marginRight: '5px' }}
                            />

                            {data1 && data1.data.price_change_percentage_24h.usd.toFixed(2)}%</span>}


                    </Card.Text>
                    <Card.Text className="text-secondary fw-bold">
                        {data2 && data2.thumb && <Image src={data2.small} width="40" height="40" style={{ marginRight: '10px' }} />}
                        {data2 && <span>{data2.name + " (" + data2.symbol + ")"}</span>}

                        {data2 && <span className={`d-inline-block float-end p-1 ${data2.data.price_change_percentage_24h.usd >= 0 ? 'bg-hara text-success' : 'bg-laal text-danger'}`}>
                            <Image
                                src={data2.data.price_change_percentage_24h.usd >= 0 ? UpArrow : DownArrow}
                                width="15"
                                height="15"
                                style={{ marginRight: '5px' }}
                            />

                            {data2 && data2.data.price_change_percentage_24h.usd.toFixed(2)}%</span>}

                    </Card.Text>
                    <Card.Text className="text-secondary fw-bold">
                        {data3 && data3.thumb && <Image src={data3.small} width="40" height="40" style={{ marginRight: '10px' }} />}
                        {data3 && <span>{data3.name + " (" + data3.symbol + ")"}</span>}

                        {data3 && <span className={`d-inline-block float-end p-1 ${data3.data.price_change_percentage_24h.usd >= 0 ? 'bg-hara text-success' : 'bg-laal text-danger'}`}>
                            <Image
                                src={data3.data.price_change_percentage_24h.usd >= 0 ? UpArrow : DownArrow}
                                width="15"
                                height="15"
                                style={{ marginRight: '5px' }}
                            />

                            {data3 && data3.data.price_change_percentage_24h.usd.toFixed(2)}%</span>}
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* {priceData && <span className={`d-inline-block p-1 ${priceData.market_data.price_change_percentage_24h_in_currency.usd >= 0 ? 'bg-hara text-success' : 'bg-laal text-danger'}`}>
                        {priceData && priceData.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}
                        %</span>}<span>(24h)</span> */}

            {/* {console.log(data1.name)} */}
            {/* {console.log(data1.name + "========" + data2 + "=====" + data3)} */}
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

export default TrendingCoins