import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navabar from './components/navbar/Navabar.jsx'
import Charts_price from './components/charts/Chart_price.jsx'
import Tabs from './components/tabs/Tabs.jsx'
import AlsoLike from './components/also_like/AlsoLike.jsx'
import Side_banner from './components/sidebanner/Side_banner.jsx'
import TrdendingCoins from './components/trending_coins/TrendingCoins.jsx'
import './index.css'
import TradingScreen from './components/screener/TradingScreen.jsx'
// import Waves from './components/login/Waves.jsx'


ReactDOM.createRoot(document.getElementById('header')).render(
  <React.StrictMode>
    <Navabar />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('Trscreen')).render(
  <React.StrictMode>
    <TradingScreen/>
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('left')).render(
  <React.StrictMode>
    {/* <TradingScreen/> */}
    <Charts_price/>
    <Tabs/>
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('right')).render(
  <React.StrictMode>
    <Side_banner />
    <TrdendingCoins />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
    <AlsoLike />
  </React.StrictMode>,
)
