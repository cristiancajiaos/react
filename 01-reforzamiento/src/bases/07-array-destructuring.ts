const characterNames = ['Tulio', 'Juan Carlos', 'Juanín'];

const [,,juanin] = characterNames;

console.log({juanin});

const returnsArrayFn = () => {
  return ['ABC', 123] as const;
}

const [letters, numbers] = returnsArrayFn();

console.log(letters + 100);
console.log(numbers + 100);