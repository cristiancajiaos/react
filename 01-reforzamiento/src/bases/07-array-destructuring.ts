const characterNames = ['Tulio', 'Juan Carlos', 'Juanín'];

const [,,juanin] = characterNames;

console.log({juanin});

const returnsArrayFn = () => {
  return ['ABC', 123] as const;
}

const [letters, numbers] = returnsArrayFn();

console.log(letters + 100);
console.log(numbers + 100);

/* Tarea de Desestructuración */

const useState = (str: string) => {
  return [str, (strFn: string) => {
    console.log(strFn);
  }] as const
}

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');