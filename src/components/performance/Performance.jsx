import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { useState, useEffect } from 'react';
import './Performance.css'
// import { useEffect } from 'react';

import Per from '../../assets/per1.png'
import Per1 from '../../assets/per2.png'

function Performance() {
  const [data, setData1] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllData();
        setData1(data);
        console.log(data.market_data.current_price.usd);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

  }, []);


  return (
    <Card className="my-3 py-4">
      <Card.Title className="p-3">Performance</Card.Title>
      <div className="image-container">
        <Image src={Per} className="px-4 d-none d-md-block" fluid />
        <Image src={Per1} className="px-4 d-block d-md-none" fluid />
      </div>
      <Card.Body>
        <Card.Subtitle className="text-muted fw-bold py-4">Fundamentals</Card.Subtitle>
        <div className="row px-3">
          <div className="col-md-5">
            <span className="text-secondary fw-bold">Bitcoin Price</span>
            <span className="float-end">${data && data.market_data.current_price.usd}</span>
            <hr />
            <span className="text-secondary fw-bold">25h Low</span>
            <span className="float-end">${data && data.market_data.low_24h.usd}</span>
            <hr />
            <span className="text-secondary fw-bold">25h High</span>
            <span className="float-end">${data && data.market_data.high_24h.usd}</span>
            <hr />
            <span className="text-secondary fw-bold">Total Volume</span>
            <span className="float-end">${data && data.market_data.total_volume.usd}</span>
            <hr />
            <span className="text-secondary fw-bold">Market Cap Rank</span>
            <span className="float-end">#{data && data.image.market_cap_rank}1</span>
            <hr />

          </div>
          <div className="col-md-5">
            <span className="text-secondary fw-bold">Market Cap</span>
            <span className="float-end">$323,507,290,057</span>
            <hr />
            <span className="text-secondary fw-bold">Market Cap Dominance</span>
            <span className="float-end">38.343%</span>
            <hr />
            <span className="text-secondary fw-bold">Volume / Market Cap</span>
            <span className="float-end">0.0718</span>
            <hr />
            <span className="text-secondary fw-bold">All-Time High</span>
            <span className="float-end">$69,044.77</span>
            <hr />
            <span className="text-secondary fw-bold">All-Time Low</span>
            <span className="float-end">$67.81</span>
            <hr />

          </div>
        </div>
      </Card.Body>
    </Card>
  );
}


const fetchAllData = async () => {
  // CG-WZ2XGkWH8oTpLKrzd71rksnk

  const options = { method: 'GET', headers: { 'x-cg-demo-api-key': 'CG-WZ2XGkWH8oTpLKrzd71rksnk' } };
  const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin?id=bitcoin', options);
  const result = await response.json();
  return result;
}

export default Performance;