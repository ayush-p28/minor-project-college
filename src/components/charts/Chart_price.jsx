import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './ChartPrice.css'
import ChartsData from '././Charts'
import Dropdown from 'react-bootstrap/Dropdown';



function Charts() {
    const [coin, setCoin] = useState('bitcoin');
    const [priceData, setPriceData] = useState(null);
    const [coinSymbol, setCoinSymbol] = useState('BTC');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPrice(coin);
                setPriceData(data);
                console.log(data.market_data.current_price.usd);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, [coin]);

    const checkCoin = (coinName,coinSysmbol)=>{
        setCoin(coinName);
        setCoinSymbol(coinSysmbol);
    }

    return (
        <>
            <Card body className="my-3">
                <div className="row">
                    <div className="col ">
                        <p className="fw-bold fs-5 d-none d-md-block">Select Any Coin Present In The Dropdown</p> 
                        <p className="fw-bold fs-5 d-block d-md-none">Select Coin</p> 
                    </div>
                    <div className="col">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Select Coin
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" onClick={() => checkCoin('bitcoin', 'BTC')}>Bitcoin (BTC)</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={() => checkCoin('ethereum', 'ETH')}>Ethereum (ETH)</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={() => checkCoin('stellar', 'XLM')}>Stellar (XLM)</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={() => checkCoin('litecoin', 'LTC')}>Litecoin (LTC)</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={() => checkCoin('ripple', 'XRP')}>Ripple (XRP)</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => checkCoin('tether','USDT')}>Tether (USDT)</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onClick={() => checkCoin('binancecoin','BNB')}>binancecoin (BNB)</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Card>

            <Card>
                <Card.Body>
                    {priceData && <Image className="alsoLogoImages" src={priceData.image.small} />}{<p className="px-2 py-3 d-inline-block fw-bold fs-3">{priceData && priceData.id.charAt(0).toUpperCase() + priceData.id.slice(1)}</p>}
                    {<p className="text-secondary fs-bold d-inline-block">{priceData && priceData.symbol.toUpperCase()}</p>}
                    <p></p>
                    <h1 className="fw-bold d-inline-block">${priceData && priceData.market_data.current_price.usd.toLocaleString()}&nbsp;</h1>
                    {priceData && <span className={`d-inline-block p-1 ${priceData.market_data.price_change_percentage_24h_in_currency.usd >= 0 ? 'bg-hara text-success' : 'bg-laal text-danger'}`}>
                        {priceData && priceData.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}
                        %</span>}<span>(24h)</span>
                    <Card.Title className="fw-bold">₹{priceData && priceData.market_data.current_price.inr.toLocaleString()}</Card.Title>
                </Card.Body>
                <ChartsData coinsymbol={coinSymbol} />
            </Card>
        </>
    )
}


const fetchPrice = async (coin) => {
    // CG-WZ2XGkWH8oTpLKrzd71rksnk
    const options = { method: 'GET', headers: { 'x-cg-demo-api-key': 'CG-WZ2XGkWH8oTpLKrzd71rksnk' } };
    // const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true', options);
    const response = await fetch('https://api.coingecko.com/api/v3/coins/'+coin, options);
    const result = await response.json();
    return result;
}

export default Charts