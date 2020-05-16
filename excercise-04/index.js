'use strict';

import users from '../users.js';

const getInactiveUsers = users => {
  const activeUser = users.filter(user => !user.isActive);
  return activeUser;
};

console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
