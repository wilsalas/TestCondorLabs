import React, { Component } from 'react';
import {
    Button, Badge, CardTitle, Container, Col, Row, Input, CardImg, Card, Nav

} from 'reactstrap';
import styles from './Home.module.css';
import Store from '../resources/store/Store';
import HomeEvent from '../resources/HomeEvent';
import Navigation from '../layouts/Navigation';
import ListMessage from '../layouts/ListMessage';
import NewGroup from '../layouts/NewGroup';
import { ListGroup, ListUsers } from '../layouts/ListView';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            name: "",
            email: "",
            profile: "",
            countUsers: 0,
            listUsers: [],
            listGroups: []
        }
    }

    componentWillMount() {
        /* if you are authenticated then you can access  */
        if (this.props.fakeAuth('compare')) {
            HomeEvent.GetDataUser(data => this.setState(data.response));
            Store.subscribe(() => {
                this.setState({
                    listUsers: Store.getState().listUsers,
                    countUsers: Store.getState().listUsers.length,
                    listGroups: Store.getState().listGroups
                })
            });
        }
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
                        <h3>Groups
                            <NewGroup newgroup={(e) => HomeEvent.NewGroup(e)}></NewGroup>
                        </h3>
                        <Row >
                            <Col md={12} className="mt-2">
                                <Card body className={styles.contentListGroup}>
                                    <Nav vertical >
                                        <ListGroup data={{ type: "All", name: "Group1" }}></ListGroup>
                                        {this.state.listGroups.map((data, i) => (
                                            <ListGroup key={i} data={data}></ListGroup>
                                        ))}
                                    </Nav>
                                </Card>
                            </Col>
                        </Row>
                        <br />
                        <h3>List Users
                            <small>
                                <Badge className="float-right" color="warning">
                                    {this.state.countUsers}
                                </Badge>
                            </small>
                        </h3>
                        <Input
                            className="float-right"
                            type="search"
                            name="searchusers"
                            placeholder="Search users"
                        />
                        <br /><br /><br />
                        <Row>
                            <Col md={12} >
                                <Card body className={styles.contentListUsers}>
                                    <Nav vertical >
                                        {this.state.listUsers.map((data, i) => (
                                            <ListUsers key={i} name={data.name} email={data.email} userActive={styles.userActive}> </ListUsers>
                                        ))}
                                    </Nav>
                                </Card>
                            </Col>
                        </Row>
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