import React from 'react';
import {
    Badge, NavItem, NavLink
} from 'reactstrap';

const ListGroup = props => (
    <div>
        <NavItem>
            <NavLink href="#">Group1 &nbsp; <Badge color="primary">Private</Badge> </NavLink>
        </NavItem>
    </div>
);

const ListUsers = props => (
    <div>
        <NavLink href="#"><i className={`fas fa-circle ${props.userActive}`}></i>&nbsp; {props.name}</NavLink>
    </div>
);

export {
    ListGroup,
    ListUsers
}