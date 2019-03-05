import React from 'react';
import {
    Row, Col
} from 'reactstrap';
import moment from 'moment';

export default props => (
    <div>
        <Row>
            <Col md={1}>
                <img width="70" alt="img" className="rounded" src={props.data.profile} />
            </Col>
            <Col md={11}>
                <span>
                    <b>{props.data.username}</b> &nbsp; <small> {moment(props.data.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</small>
                </span>
                <Row>
                    <Col md={12}>
                        <p>
                            {props.data.message}
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
        <br />
    </div>
);