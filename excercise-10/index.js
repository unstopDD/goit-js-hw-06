'use strict';

import users from '../users.js';

const getSortedUniqueSkills = users => {
  const uniqueSkills = users
    .reduce((skills, user) => {
      skills.push(...user.skills);
      return skills;
    }, [])
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort();
  return uniqueSkills;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
