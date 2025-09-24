
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: address;
}

interface address {
  postalCode: string;
  city: string;
}

const unknown: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  address: {
    postalCode: 'ABC123',
    city: 'New York'
  }
};

/*
const desconocido = structuredClone(unknown);

unknown.firstName = "Perico";
unknown.lastName = "De Los Palotes";
unknown.age = 45;
unknown.address.city = 'Boston';

console.log(unknown, desconocido);
*/