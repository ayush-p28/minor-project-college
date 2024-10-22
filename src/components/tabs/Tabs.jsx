import { useState } from 'react';
import { Nav, Tab, Col, Row } from 'react-bootstrap';
import './Tabs.css';
import Performance from '../performance/Performance';
import Sentiments from '../sentiments/Sentiments';
import About_bitcoin from '../about_bitcoin/About_bitcoin';
import Team from '../team/Team';
import Tokenomics from '../tokenomics/Tokenomics';

function UnderlineExample() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleSelect = (selectedKey) => {
    setActiveTab(selectedKey);
  };

  return (
    <Tab.Container activeKey={activeTab} onSelect={handleSelect}>
      <Row>
        <Col sm={12}>
          <Nav id="scrollmenu" className="my-3 mt-4 fw-bold border-bottom" variant="underline" defaultActiveKey="/overview">
            <Nav.Item>
              <Nav.Link eventKey="overview">Overview</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sentiments">Sentiments</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="team" className="d-none d-md-block">Team</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tokenomics" className="d-none d-md-block">Tokenomics</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Tab.Content>
            <Tab.Pane eventKey="overview">
            <Performance />
            </Tab.Pane>
            <Tab.Pane eventKey="sentiments">
            <Sentiments/>
            </Tab.Pane>
            <Tab.Pane eventKey="about">
              <About_bitcoin />
            </Tab.Pane>
            <Tab.Pane eventKey="team">
            <Team />
            </Tab.Pane>
            <Tab.Pane eventKey="tokenomics">
            <Tokenomics />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default UnderlineExample;
