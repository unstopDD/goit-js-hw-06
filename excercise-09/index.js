'use strict';

import users from '../users.js';

const getNamesSortedByFriendsCount = users => {
  const sortByFriends = (a, b) => {
    if (a.friends.length > b.friends.length) {
      return 1;
    }
    if (a.friends.length < b.friends.length) {
      return -1;
    }

    return 0;
  };
  const friendsCount = users.sort(sortByFriends).map(user => user.name);
  return friendsCount;
};

console.log(getNamesSortedByFriendsCount(users));

// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
