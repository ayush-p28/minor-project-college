import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MyLogo from '../../assets/logo.png'
// import Button from '../../assets/button.png'
// import Image from 'react-bootstrap/Image';

function Navabar() {
  return (
    <Navbar expand="lg" bg="white" data-bs-theme="light" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="/">
        <img
              alt="KoinX"
              src={MyLogo}
              width="100%"
              height="40"
              className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-dark fw-bold" href="https://mudrex.com/crypto-tax-calculator-india" target="_blank">Crypto Taxes</Nav.Link>
            <Nav.Link className="text-dark fw-bold" href="https://www.coingecko.com/en/converter" target="_blank">Free Tools</Nav.Link>
            <Nav.Link className="text-dark fw-bold" href="https://www.coingecko.com/en/highlights" target="_blank">Resource Center</Nav.Link>
            {/* <Image className="mx-2" href="#link" src={Button} height="45" width="30%" /> */}
            <a type="submit" href="/login.html" className="btn btn-dark">SignIn</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navabar;