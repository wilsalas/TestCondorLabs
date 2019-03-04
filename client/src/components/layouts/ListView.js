import React from 'react';
import {
    Badge, NavItem, NavLink
} from 'reactstrap';

const ListGroup = props => (
    <div>
        <NavItem>
            <NavLink href="#">{props.data.name} &nbsp;
                <Badge color={props.data.type === "All" ? 'primary' : 'warning'}>{props.data.type}</Badge>
            </NavLink>
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