import React from 'react';
import {
    Badge, Button, NavItem, NavLink
} from 'reactstrap';

const Groups = props => (
    <div>
        <NavItem>
            <NavLink>
                <Button onClick={props.groupchange.bind(this)} outline color="secondary" size="sm" block>{props.data.name} &nbsp;
                <Badge color={props.data.type === "All" ? 'primary' : 'danger'}>{props.data.type}</Badge>
                </Button>
            </NavLink>
        </NavItem>
    </div>
);

const Users = props => (
    <div>
        <NavLink>
            <Button onClick={props.newgroup.bind(this)} outline color="secondary" size="sm" block>
                <i className={`fas fa-circle ${props.userActive}`}></i>&nbsp; {props.name}
            </Button>
        </NavLink>
    </div>
);

export {
    Groups,
    Users
}