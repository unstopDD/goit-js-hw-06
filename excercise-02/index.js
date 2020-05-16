'use strict';

import users from '../users.js';

const getUsersWithEyeColor = (users, color) => {
  const userEyeColor = users.filter(user => user.eyeColor === color);
  return userEyeColor;
};

console.log(getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
