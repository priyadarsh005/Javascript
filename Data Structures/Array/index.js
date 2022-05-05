// find & findIndex

const todoItems = [
  {id: 0, title: 'pick kids at school'},
  {id: 1, title: 'go to the gym'},
  {id: 45, title: 'study for the exam'}
];
todoItems.find(todo => todo.id === 45);
// returns 
// { id: 45, title: 'study for the exam' }
todoItems.findIndex(todo => /gym/g.test(todo.title));
// returns 1


// custom filter function - findAll

const numbers = [45, 12, 99, 2, 10, 78, 34];
function findAll(list, cb) {
  const matches = [];
  let i = 0;
  
  for(const item of list) {
    if(cb(item, i, list)) {
      matches.push(item)
    }
    i++;
  }
  
  return matches;
}
findAll(numbers, n => n > 50); 
// returns [ 99, 78 ]


// includes and indexOf

const gymTodo = {id: 1, title: 'go to the gym'};
const todoItems = [
  {id: 0, title: 'pick kids at school'},
  {id: 45, title: 'study for the exam'},
  gymTodo
];
todoItems.includes({id: 1, title: 'go to the gym'}); // false
todoItems.includes(gymTodo); // true
todoItems.indexOf({id: 1, title: 'go to the gym'}); // -1
todoItems.indexOf(gymTodo); // 2


******************
  
// Arrays Sorting

const numbers = [45, 12, 99, 2, 10, 45, 78, 34];
numbers.sort((a, b) => a - b);
/* sorts ascending
[
   2, 10, 12, 34,
  45, 45, 78, 99
]
*/
numbers.sort((a, b) => b - a);
/* sorts descending
[
  99, 78, 45, 45,
  34, 12, 10,  2
]
*/

const people = [
  {name: 'A', age: 12},
  {name: 'K', age: 34},
  {name: 'b', age: 12},
  {name: 'J', age: 24},
  {name: 'A', age: 34},
  {name: 'Z', age: 18},
  {name: 'E', age: 56}
];
people.sort((personA, personB) => {
  if(personA.age < personB.age) return -1
  if(personA.age > personB.age) return 1
  
  return 0;
});
/* people array becomes
[
  { name: 'A', age: 12 },
  { name: 'b', age: 12 },
  { name: 'Z', age: 18 },
  { name: 'J', age: 24 },
  { name: 'K', age: 34 },
  { name: 'A', age: 34 },
  { name: 'E', age: 56 }
]
*/

// map and filter
const numbers = [45, 12, 99, 2, 10, 45, 78, 34];
const doubledNumbers = numbers.map(n => n * 2);
/* double the numbers
[
  90, 24, 198,  4,
  20, 90, 156, 68
]
*/
const oddNumbers = numbers.filter(n => n % 2 !== 0);
/* grab odd numbers
[ 45, 99, 45 ]
*/
// numbers remain intact

