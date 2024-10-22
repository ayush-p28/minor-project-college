// import React from 'react';
// import TradingViewWidget from './TradingView';
import TradingChart from './TradingChart';
import PropTypes from 'prop-types';

function Charts(props) {
  const coinSymbol = props.coinsymbol;
  console.log(coinSymbol);
  return (
    <div className="App">
      {/* <TradingViewWidget coinData={coinSymbol}/> */}
      <TradingChart coinData={coinSymbol}/>
    </div>
  );
}

Charts.propTypes = {
  coinsymbol: PropTypes.string.isRequired // Specify the prop type and make it required
};

export default Charts;
