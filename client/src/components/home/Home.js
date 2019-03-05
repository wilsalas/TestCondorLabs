import React, { Component } from 'react';
import {
    Button, Badge, CardTitle, Container, Col, Row, Input, CardImg, Card, Nav

} from 'reactstrap';
import styles from './Home.module.css';
import Store from '../resources/store/Store';
import HomeEvent from '../resources/HomeEvent';
import Navigation from '../layouts/Navigation';
import Message from '../layouts/Message';
import NewGroup from '../layouts/NewGroup';
import { Groups, Users } from '../layouts/View';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            name: "",
            email: "",
            profile: "",
            usersCount: 0,
            groupsCount: 1,
            users: [],
            groups: [],
            groupname: "",
            message: "",
            messages: []
        }
    }

    componentDidMount() {
        /* if you are authenticated then you can access  */
        if (this.props.fakeAuth('compare')) {
            //fill list variables of users and groups
            HomeEvent.GetDataUser(data => this.setState(data.response));
            Store.subscribe(() => {
                this.setState({
                    users: Store.getState().users,
                    usersCount: Store.getState().users.length,
                    groups: Store.getState().groups,
                    groupsCount: document.getElementsByClassName("groupsNav")[0].childElementCount,
                    groupname: Store.getState().groupname,
                    messages: Store.getState().messages
                });
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
                        <h3 >Groups
                            <small className="ml-2">
                                <Badge color="warning">
                                    {this.state.groupsCount}
                                </Badge>
                            </small>
                            <NewGroup newgroup={(e) => HomeEvent.NewGroup(e)}></NewGroup>
                        </h3>
                        <Row >
                            <Col md={12} className="mt-2">
                                <Card body className={styles.groupContent}>
                                    {/* check the list of public and private groups */}
                                    <Nav vertical className="groupsNav">
                                        <Groups
                                            groupchange={() => HomeEvent.SwitchGroup("group1")}
                                            data={{ type: "All", name: "group1" }}>
                                        </Groups>
                                        {this.state.groups.map((data, i) =>
                                            data.type === "All" ?
                                                <Groups
                                                    groupchange={() => HomeEvent.SwitchGroup(data.name)}
                                                    key={i}
                                                    data={data}>
                                                </Groups>
                                                : (data.relationship.user1 === this.state.email ||
                                                    data.relationship.user2 === this.state.email) ?
                                                    <Groups
                                                        groupchange={() => HomeEvent.SwitchGroup(data.name)}
                                                        key={i}
                                                        data={data}>
                                                    </Groups>
                                                    : ""
                                        )}
                                    </Nav>
                                </Card>
                            </Col>
                        </Row>
                        <br />
                        <h3>Users
                            <small>
                                <Badge className="float-right" color="warning">
                                    {this.state.usersCount}
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
                                <Card body className={styles.usersContent}>
                                    {/* send information of a new private group */}
                                    <Nav vertical >
                                        {this.state.users.map((data, i) => (
                                            <Users key={i}
                                                newgroup={() =>
                                                    data.email !== this.state.email ?
                                                        HomeEvent.NewGroup(undefined, {
                                                            name: `(${this.state.name}-${data.name})`,
                                                            type: "Private",
                                                            relationship: {
                                                                user1: this.state.email,
                                                                user2: data.email
                                                            }
                                                        }) : false
                                                }
                                                name={data.name}
                                                email={data.email}
                                                userActive={styles.userActive}
                                            >
                                            </Users>
                                        ))}
                                    </Nav>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={9}>
                        <Navigation groupname={this.state.groupname}></Navigation>
                        <Row className="mt-1 mb-2">
                            <Col md={12} >
                                <Card body className={styles.bodyContent}>
                                    {this.state.messages.map((data, i) => (
                                        <Message data={data} key={i}></Message>
                                    ))}
                                </Card>
                            </Col>
                            <Col md={12} >
                                <Input
                                    onChange={e => this.setState({ message: e.target.value })}
                                    type="textarea"
                                    name="message"
                                    placeholder="Write a new message" /> <br />
                                <Button onClick={() => HomeEvent.NewMessage({
                                    groupname: this.state.groupname,
                                    username: this.state.name,
                                    profile: this.state.profile,
                                    message: this.state.message
                                })} color="primary" size="lg" block>
                                    Send Message
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;