import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendsForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsList />
	<FriendForm />
      </div>
    );
  }
}

export default App;
