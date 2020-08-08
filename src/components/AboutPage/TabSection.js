import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import AboutUs from './aboutus/AboutUs'
import KeyFigures from './aboutus/keyFigures'
import MissionVission from './aboutus/missionVission'

const TabSection = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
    <div className="container-fluid  shadow">
    <div className="container">
    <Nav tabs  className="border-0 py-2">
    <NavItem  className="border-0">
    <NavLink
    className={classnames({ active: activeTab === '1' })}
    onClick={() => { toggle('1'); }}
    style={{border: '0px solid white', paddingleft: '40px', fontWeight: 500, color: '#413aa4', }}
    >
    About us
    </NavLink>
    </NavItem>
    <NavItem  className="border-0">
    <NavLink
    className={classnames({ active: activeTab === '2' })}
    onClick={() => { toggle('2'); }}
    style={{border: '0px solid white', paddingleft: '30px', fontWeight: 500, color: '#413aa4',}}
    >
    Our History
    </NavLink>
    </NavItem>
    <NavItem  className="border-0">
    <NavLink
    className={classnames({ active: activeTab === '2' })}
    onClick={() => { toggle('3'); }}
    style={{border: '0px solid white', paddingleft: '30px', fontWeight: 500, color: '#413aa4',}}
    >
    Our Values
    </NavLink>
    </NavItem>
    <NavItem  className="border-0">
    <NavLink
    className={classnames({ active: activeTab === '4' })}
    onClick={() => { toggle('4'); }}
    style={{border: '0px solid white', paddingleft: '30px', fontWeight: 500, color: '#413aa4',}}
    >
    Business Conduct
    </NavLink>
    </NavItem>
    <NavItem  className="border-0">
    <NavLink
    className={classnames({ active: activeTab === '5' })}
    onClick={() => { toggle('5'); }}
    style={{border: '0px solid white', paddingleft: '30px', fontWeight: 500, color: '#413aa4',}}
    >
    Our Client
    </NavLink>
    </NavItem>
    <NavItem  className="border-0">
    <NavLink
    className={classnames({ active: activeTab === '6' })}
    onClick={() => { toggle('6'); }}
    style={{border: '0px solid white', paddingleft: '30px', fontWeight: 500, color: '#413aa4',}}
    >
    Our Locations
    </NavLink>
    </NavItem>
    <NavItem  className="border-0">
    <NavLink
    className={classnames({ active: activeTab === '7' })}
    onClick={() => { toggle('7'); }}
    style={{border: '0px solid white', paddingleft: '30px', fontWeight: 500, color: '#413aa4',}}
    >
    Success Story
    </NavLink>
    </NavItem>
    </Nav>
    </div>
    </div>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <AboutUs/>
              <KeyFigures/>
              <MissionVission/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
        <Row>
        <Col sm="12">
          
        <AboutUs/>
        </Col>
      </Row>
        </TabPane>
        
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
            <AboutUs/>
            </Col>
          </Row>
        </TabPane>
        
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
            <AboutUs/>
            </Col>
          </Row>
        </TabPane>
        
        <TabPane tabId="5">
          <Row>
            <Col sm="12">
            <AboutUs/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="6">
          <Row>
            <Col sm="12">
            <AboutUs/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="7">
          <Row>
            <Col sm="12">
              <h4>Tab 7 Contents</h4>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default TabSection;