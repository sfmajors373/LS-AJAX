import axios from 'axios';
import FriendForm from '../components/FriendsForm';


export const postFriends = (friendData) => {
  const promise = axios.post('http://localhost:5000/friends', {
      name: '',
      age: '',
      email: '',
    }
  );
}
