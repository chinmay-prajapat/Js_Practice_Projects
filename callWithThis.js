function userCreator(name,score){
  this.name=name
  this.score=score
  
  }
  
  userCreator.prototype.sayName=function(){
  console.log(`I'm ${this.name}`);
  
  }
  userCreator.prototype.increment=function(){
  this.score++;
  
  }
  const user1=new userCreator("Phil",5)
const user2=new userCreator("Tim",4)
// console.log(user1)
user1.sayName()

function paidUserCreator (paidName,paidScore,accountBalance){
//Here this is not transmitted as an argument eventhough this will go to userCreator function and set this this to userCreator this since both are different this.
  //if you do not transmit this with call function then the name and score properties will set to undefined. Because in createUser has its own this which contridicates with this of paidUserCreator
 userCreator.call(this,paidName,paidScore)
  this.accountBalance=accountBalance;
  
  }
paidUserCreator.prototype=Object.create(userCreator.prototype);

  paidUserCreator.prototype.increaseBalance=function(){

    this.accountBalance++;
  
    };
    const paidUser1=new paidUserCreator("Alyssa",8,25)
    paidUser1.increaseBalance()
    paidUser1.sayName()
