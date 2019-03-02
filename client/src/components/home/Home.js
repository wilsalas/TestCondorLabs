import React, { Component } from 'react';
import {
    Button, CardTitle, Container, Col, Row, Nav, NavItem, NavLink, Input, CardImg, Card

} from 'reactstrap';
import HomeEvent from '../resources/HomeEvent';
import styles from './Home.module.css';
import Navigation from '../layouts/Navigation';
import ListMessage from '../layouts/ListMessage';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            name: "",
            email: "",
            profile: ""
        }
    }

    componentWillMount() {
        /* if you are authenticated then you can access  */
        if (this.props.fakeAuth('compare'))
            HomeEvent.GetDataUser(data => this.setState(data.response));
    }

    render() {
        return (
            <Container fluid>
                {this.props.fakeAuth('private')}
                <Row >
                    <Col md={1} className={`text-white ${styles.menubar1}`}>
                        <br />
                        <Row>
                            <Col md={12}>
                                <CardImg className="rounded" top width="100%" src={this.state.profile} alt="Card image cap" />
                                <CardTitle>{this.state.name}</CardTitle>
                            </Col>
                            <Col md={12} className="columnBtns">
                                <Button outline color="secondary">
                                    <i className="fas fa-user-edit fa-2x"></i>
                                </Button>
                            </Col>
                            <Col md={12}>
                                <Button onClick={this.props.logout} className="mt-3" outline color="danger">
                                    <i className="fas fa-sign-out-alt fa-3x"></i>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2} className={`text-white ${styles.menubar2}`} >
                        <br />
                        <h3>Channels
                            <Button size="sm" className="float-right" outline color="secondary">
                                <i className="fas fa-plus-circle fa-2x"></i>
                            </Button>
                        </h3>
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
                        <Navigation></Navigation>
                        <Row className="mt-1 mb-2">
                            <Col md={12} >
                                <Card body className={styles.contentBody}>
                                    {new Array(50).fill(undefined).map((data, i) => (
                                        <ListMessage name={data} key={i}></ListMessage>
                                    ))}
                                </Card>
                            </Col>
                            <Col md={12} >
                                <Input type="textarea" name="message" placeholder="Write a new message" /> <br />
                                <Button color="primary" size="lg" block>Send Message</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;