import './App.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Breadcrumb>
      <Breadcrumb.Item href="/">Cryptocurrencies</Breadcrumb.Item>
      <Breadcrumb.Item href="https://www.coingecko.com/en/all-cryptocurrencies" target="_blank">
        Bitcoin
      </Breadcrumb.Item>
    </Breadcrumb>
    </>
  )
}

export default App
