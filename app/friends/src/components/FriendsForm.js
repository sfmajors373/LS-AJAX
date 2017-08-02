import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postFriends } from '../actions/post';
import PropTypes from 'prop-types';
import axios from 'axios';

class FriendForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChangeName = (event) => {
    this.setState({name: event.target.value});
  }
  onChangeAge = (event) => {
    this.setState({age: event.target.value});
  }
  onChangeEmail = (event) => {
    this.setState({email: event.target.value});
  }
  onSubmit = (event) => {
    event.preventDefault();
    postFriends(this.state);
    this.setState({
      name: '',
      age: '',
      email: ''
    })
  }
  render() {
    const { name, age, email } = this.state;
    return (
    <form onSubmit={this.onSubmit}>
      <input type="text" placeholder="Name (required)" value={this.props.name} onChange={this.onChangeName}/>
      <input type="text" placeholder="Age (required)" value={this.props.age} onChange={this.onChangeAge}/>
      <input type="text" placeholder="Email (required)" value={this.props.email} onChange={this.onChangeEmail}/>
      <button type="submit">Add a Friend</button>
    </form>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    friend: state.friend
  };
};
const mapDispatchToProps = (dispatch) => ({
  onSubmit(event) {
    dispatch(postFriends(this.state));
  },
});

export default connect(mapStateToProps, mapDispatchToProps, { postFriends })(FriendForm);
