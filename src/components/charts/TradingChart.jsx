import { useEffect, useRef, memo } from 'react';
import PropTypes from 'prop-types';

function TradingView(props) {

  const container = useRef();
  // const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (container && container.current.hasChildNodes()) {
      while (container.current.firstChild) {
        container.current.removeChild(container.current.firstChild);
      }
      console.log('delete nodes');
    }
  }, [props.coinData]);

  useEffect(() => {
    
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          [
            "${props.coinData}|1M"
          ]
        ],
        "chartOnly": true,
        "width": "100%",
        "height": 400,
        "locale": "en",
        "colorTheme": "light",
        "autosize": false,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": true,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "maLineColor": "#2962FF",
        "maLineWidth": 1,
        "maLength": 9,
        "lineWidth": 2,
        "lineType": 0,
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ],
        "lineColor": "rgba(41, 98, 255, 1)"
      }`;
    container.current.appendChild(script);
    // setLoaded(true)

    // Set the chart instance to state
    
    
    // setChartInstance(container);
  }, [props.coinData]);


  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

TradingView.propTypes = {
  coinData: PropTypes.string.isRequired // Specify the prop type and make it required
};

export default memo(TradingView);
