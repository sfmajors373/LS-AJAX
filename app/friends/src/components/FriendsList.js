import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, postFriends } from '../actions';
import Friend from './Friend';
import axios from 'axios';

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div>
        <ul>
	    {this.props.friends.map((friends, i) => {
	      return (
	        <li key={i}>
		  <p>{`Friend ${i+1}`}</p>
		  <Friend />
                </li>
	      );
	    })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps, { getFriends })(FriendsList);
