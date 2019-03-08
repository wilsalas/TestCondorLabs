import React from 'react';
import {
    Button, Container, Col, Card, CardHeader, CardBody, Form, FormGroup, Input, Row
} from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from '../app/App.module.css';
//component used to log in and register
export default props => (
    <Container>
        <Row>
            <Col md={4} className="offset-md-4">
                <Card>
                    <CardHeader><h1><i className="fas fa-user-circle"></i> {props.title} </h1></CardHeader>
                    <CardBody>
                        <Form onSubmit={props.handleEvent}>
                            {props.title !== "Login" &&
                                <FormGroup>
                                    <Input type="text" name="name" placeholder="Enter your Name" required />
                                </FormGroup>
                            }
                            <FormGroup>
                                <Input type="email" name="email" placeholder="Enter your Email" required />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" placeholder="Enter your Password" required />
                            </FormGroup>
                            {props.title !== "Login" &&
                                <div>
                                    <FormGroup>
                                        <Input type="url" name="profile" placeholder="Enter your url image" required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="select" name="gender" required>
                                            <option value="">Select your gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Others</option>
                                        </Input>
                                    </FormGroup>
                                </div>
                            }
                            <FormGroup>
                                <Button outline color="success" size="lg" block>{props.title}</Button>
                                <small>
                                    <Link className={styles.enlace} to={props.path.uri} color="info">{props.path.text}</Link>
                                </small>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
);
