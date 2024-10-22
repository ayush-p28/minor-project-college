import { useEffect, useRef, useState, memo } from 'react';
import PropTypes from 'prop-types';

function TradingView(props) {
  const coinData = props.coinData;
  console.log(coinData+"===")

  const container = useRef();
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          [
            "${coinData}|1M"
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

    // Set the chart instance to state
    setChartInstance(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      if (container.current.contains(script)) {
        container.current.removeChild(script);
      }
    };
  }, [coinData]);

  // Function to update the chart with new data
  const updateChartWithData = () => {
    if (chartInstance) {
      // Simulating new data
      const newData = [
        [
          ["2024-03-01", 50.25],
          ["2024-03-02", 51.15],
          ["2024-03-03", 52.35],
          ["2024-03-04", 53.05],
          ["2024-03-05", 54.00]
        ]
      ];

      // Update the chart with new data (this is a simplified example, you'll need to use the appropriate chart library's methods)
      chartInstance.updateData(newData);
    }
  };

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <button className="d-none" onClick={updateChartWithData}>Update Chart with New Data</button>
    </div>
  );
}

TradingView.propTypes = {
  coinData: PropTypes.string.isRequired // Specify the prop type and make it required
};

export default memo(TradingView);
