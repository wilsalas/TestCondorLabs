import React from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Input, Row, Col
} from 'reactstrap';
import UserEvent from '../resources/UserEvent';

const UserProfile = props => (
    <div>
        <Modal isOpen={props.modal} toggle={props.toggle}>
            <Form onSubmit={e => UserEvent.FormUpdate(e, props.user._id)}>
                <ModalHeader toggle={props.toggle}>
                    <i className="fas fa-user-edit"></i> Edit user profile
                </ModalHeader>
                <ModalBody>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Input type="text" name="name" placeholder="Enter your Name" required
                                    defaultValue={props.user.name} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Input type="email" name="email" placeholder="Enter your Email" required
                                    defaultValue={props.user.email} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Input type="password" name="password" placeholder="Enter your Password" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Input type="select" name="gender" required defaultValue={props.user.gender}>
                                    <option value="">Select your gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={12}>
                            <Input type="url" name="profile" placeholder="Enter your url image"
                                defaultValue={props.user.profile} />
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" color="primary">Edit</Button>
                    <Button type="button" color="secondary" onClick={props.toggle}>Cancel</Button>
                </ModalFooter>
            </Form>

        </Modal>
    </div>
);

export default UserProfile;