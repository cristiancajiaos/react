function greet(name: string): string {
  return `Hola ${name}`;
}

const greet2 = (name: string): string => {
  return `Hola ${name}`;
}; 

const message = greet('John');
const message2 = greet2('Perico');

console.log(message);
console.log(message2);

function getUser() {
  return {
    uid: 'ABC-123',
    username: 'miusuario'
  }
}

const getUser2 = () => {
  return {
    uid: 'ABC-123',
    username: 'miusuario'
  }
};

const user = getUser();
const user2 = getUser2();

console.log(user, user2);