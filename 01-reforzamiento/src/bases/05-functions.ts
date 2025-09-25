function greet(name: string): string {
  return `Hola ${name}`;
}

const greet2 = (name: string) => `Hola ${name}`;

const message = greet('John');
const message2 = greet2('Perico');

console.log(message);
console.log(message2);

interface User {
  uid: string;
  username: string;
}

function getUser(): User {
  return {
    uid: 'ABC-123',
    username: 'miusuario'
  }
}

const getUser2 = () => ({
  uid: 'ABC-123',
  username: 'miusuario'
});

const user = getUser();
const user2 = getUser2();

console.log(user, user2);

/* Callbacks */

const myNumbers: number[ ]= [1,2,3,4,5,6];
myNumbers.forEach((value, index, array) => console.log);