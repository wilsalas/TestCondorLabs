import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Input
} from 'reactstrap';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
        this.typechat = "";
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    /* method for updating typechat */
    componentWillUpdate() {
        this.typechat = this.props.typechat;
    }

    /* component of navigation */
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <h4>#{this.typechat === "All" ? this.props.groupname : 'Private conversation'}</h4>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Input
                                    className="inputHome"
                                    type="text"
                                    name="searchusers"
                                    placeholder="Search conversation"
                                    onChange={(e) => this.props.AskformessagesIndividual({
                                        groupname: this.props.groupname,
                                        message: e.target.value
                                    })}
                                />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;