'use strict';

import users from '../users.js';

const getUsersWithFriend = (users, friendName) => {
  const findByFriend = users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);

  return findByFriend;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
