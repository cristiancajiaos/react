const person = {
  name: 'John',
  age: 50,
  key: 'Unknown'
}

const {name:unknownName, age, key} = person;

console.log(unknownName, age, key);

interface Alias {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const useContext = ({name, age, key, rank = "No rank"}: Alias) => {
  return {
    keyName: key,
    user: {
      name, age
    },
    rank: rank
  }
}

const context = useContext(person);
console.log(context);

const {rank, keyName, user: {name}} = useContext(person);
console.log({rank, keyName, name});
