import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getGroups, deleteGroup } from '../../actions/groupActions';
import PropTypes from 'prop-types';

class GroupForm extends Component {
  static propTypes = {
    getGroups: PropTypes.func.isRequired,
    group: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getGroups();
  }

  onDeleteClick = id => {
    this.props.deleteGroup(id);
  };

  render() {
    const { groups } = this.props.group;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {groups.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  {this.props.isAuthenticated ? (
                    <Button
                      className='remove-btn'
                      color='danger'
                      size='sm'
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >
                      &times;
                    </Button>
                  ) : null}
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  group: state.group,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getGroups, deleteGroup }
)(GroupForm);
