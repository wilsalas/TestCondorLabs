import React from 'react';
import {
    Row, Col
} from 'reactstrap';

export default props => (
    <div>
        <Row>
            <Col md={1}>
                <img width="70" alt="img" className="rounded" src="https://www.info-computer.com/blog/wp-content/uploads/2017/08/gamer.jpg" />
            </Col>
            <Col md={11}>
                <span>
                    <b> User{props.name}</b> &nbsp; <small> Viernes 1 marzo 6 PM </small>
                </span>
                <Row>
                    <Col md={12}>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
        <br />
    </div>
);