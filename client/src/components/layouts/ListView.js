import React from 'react';
import {
    Badge, Button, NavItem, NavLink
} from 'reactstrap';

const ListGroup = props => (
    <div>
        <NavItem>
            <NavLink>
                <Button outline color="secondary" size="sm" block>{props.data.name} &nbsp;
                <Badge color={props.data.type === "All" ? 'info' : 'warning'}>{props.data.type}</Badge>
                </Button>
            </NavLink>
        </NavItem>
    </div>
);

const ListUsers = props => (
    <div>
        <NavLink>
            <Button onClick={props.newgroup.bind(this)} outline color="secondary" size="sm" block>
                <i className={`fas fa-circle ${props.userActive}`}></i>&nbsp; {props.name}
            </Button>
        </NavLink>
    </div>
);

export {
    ListGroup,
    ListUsers
}