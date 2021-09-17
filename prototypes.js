function userCreator(name, score) {
const newUser = Object.create(userFunctionStore);
newUser.name = name;
newUser.score = score;
return newUser;
};
const userFunctionStore = {
increment: function() {
const add1=()=>{ this.score++; }//It has to be arrow otherwise the function will point to window object.
add1()
}
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
