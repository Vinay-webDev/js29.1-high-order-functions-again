// higher order functions are the functions which does atleast one of the following
/* 1. takes one or more functions as a parameter or (arguments)
   2. returns function as the result */
// ***remember need to use {} while exporting functions or files which are not default ****
import {users} from './users.js';
/*
// 1. our first higher order function ==>> forEach()

users.forEach(user => {
   console.log(user);
}) 
console.clear();
// 2. filter() ==>> now we need to define our new array
const filteredUsers = users.filter((user) => {
   return user.id === 4;
})
console.log(filteredUsers);

// 3. our 3rd higher order function is map();
const mappedUsers = filteredUsers.map((user) => {
   return user.id * 10;
   // id = 4; user.id * 10 = 4 * 10 = [40];
});
console.log(mappedUsers);
// 4. our 4th higher order function is reduce();
const reducedUserValue = mappedUsers.reduce((sum, user) => {
   return sum + user;
})
console.log(reducedUserValue);
*/
///////////////////////////////////////
import {posts} from './posts.js';

// 1. forEach();
posts.forEach((post) => {
   console.log(post);
})
console.clear();
// 2. filter();
const filteredPosts = posts.filter((post) => {
   return post.userId === 10;
})
console.log(filteredPosts);
// 3. map();
const mappedPosts = filteredPosts.map((post) => {
   return post.id * 10;
});
console.log(mappedPosts);

















