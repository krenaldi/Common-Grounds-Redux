import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addGroup } from '../../actions/groupActions';
import PropTypes from 'prop-types';

class GroupModal extends Component {
  state = {
    modal: false,
    name: ''
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newGroup = {
      name: this.state.name
    };

    // Add item via addItem action
    this.props.addGroup(newGroup);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Button
            color='dark'
            style={{ marginBottom: '2rem' }}
            onClick={this.toggle}
          >
            Add Group
          </Button>
        ) : (
          <h4 className='mb-3 ml-4'>Please log in to create Groups</h4>
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add Group</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='item'>Group</Label>
                <Input
                  type='text'
                  name='name'
                  id='group'
                  placeholder='Create Group'
                  onChange={this.onChange}
                />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Add Group
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  group: state.group,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { addGroup }
)(GroupModal);
