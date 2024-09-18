/*

insert  -> O(1)

lookup  -> O(1)

delete  -> O(1)

search  -> O(1)

O(n)  -> with Collisions
*/

let user = {
    age: 54,
    name: 'Alex',
    magic: true,
    scream: function() {
        console.log('ahhhhh!')
    }
}

user.age  // O(1)

user.spell = 'Hello';  // O(1)

user.scream();  // O(1)