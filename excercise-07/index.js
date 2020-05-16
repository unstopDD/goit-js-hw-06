'use strict';

import users from '../users.js';

const calculateTotalBalance = users => {
  const balance = users.reduce(
    (totalBalance, user) => totalBalance + user.balance,
    0,
  );
  return balance;
};

console.log(calculateTotalBalance(users)); // 20916
