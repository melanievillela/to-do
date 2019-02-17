import React, { Component } from 'react';
import { 
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalHeader   
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem} from '../actions/itemActions';

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name: this.state.name
        }

        this.props.addItem(newItem);

        this.toggle();
    }

    render() {
        return (
            <div>
                <Button className="add-btn" onClick={this.toggle}>Add Item</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Items To List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item To Add:</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="ToDo Item"
                                    onChange={this.onChange}                                
                                    >
                                </Input>
                                <Button className="add-btn-modal">Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )        
    }
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);