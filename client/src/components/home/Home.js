import React, { Component } from 'react';
import { Container, Col, Row, Nav, NavItem, NavLink, Input } from 'reactstrap';
import styles from './Home.module.css';

class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Row >
                    <Col md={3} className={`text-white ${styles.menubar}`} >
                        <br />
                        <h3>Channels  <a href="/" className="float-right"><i className="fas fa-plus-circle"></i></a> </h3>
                        <Nav vertical>
                            <NavItem>
                                <NavLink href="#">Channel1</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Channel2</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Channel3</NavLink>
                            </NavItem>
                        </Nav>
                        <hr />
                        <h3>List Users</h3>
                        <Input
                            className="float-right"
                            type="search"
                            name="searchusers"
                            placeholder="Search users"
                        />
                        <br /><br /><br />
                        <Nav vertical>
                            <NavLink href="#"><i className={`fas fa-circle ${styles.userActive}`}></i> User1</NavLink>
                            <NavLink href="#"><i className="fas fa-circle"></i> User2</NavLink>
                            <NavLink href="#"><i className="fas fa-circle"></i> User3</NavLink>
                        </Nav>
                    </Col>
                    <Col md={9}>
                        COL2
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;