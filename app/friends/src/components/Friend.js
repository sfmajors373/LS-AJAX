import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendList from './FriendsList';
import axios from 'axios';

const Friend = (friend) => {
  <div>
    <li><p>{`Name: ${friend.name}`}</p></li>
    <li><p>{`Age: ${friend.age}`}</p></li>
    <li><p>{`Email: ${friend.email}`}</p></li>
  </div>
}

export default Friend;
