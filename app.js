let users = [
   { name: "mohamed", email: "moodymohamed798@gmail.com", password: "123" },
   { name: "ahmed", email: "ahmed@gmail.com", password: "ahmed" }
];
function register(user) {
users.push(user)   
}
register({name: "toty", email: "toty@gmail.com", password: "toty"} )
console.log(users);