import React, { Component } from 'react';
import {
    Button, Popover, PopoverHeader, PopoverBody,
    Form, FormGroup, Input
} from 'reactstrap';

class NewGroup extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        return (
            <div className="float-right" >

                <Button id="Popover1" size="sm" outline color="secondary">
                    <i className="fas fa-plus-circle fa-2x"></i>
                </Button>

                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                    <PopoverHeader>Create a new Group</PopoverHeader>
                    <PopoverBody>
                        <Form onSubmit={this.props.newgroup.bind(this)}>
                            <FormGroup>
                                <Input type="text" required name="group" placeholder="Title of the new group" />
                            </FormGroup>
                            <FormGroup>
                                <Button size="lg" block color="success">Create</Button>
                            </FormGroup>
                        </Form>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}


export default NewGroup;