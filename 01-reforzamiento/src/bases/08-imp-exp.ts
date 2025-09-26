import { heroes, Owner, type Hero } from "../data/heroes.data"

const getHeroById = (id: number): Hero | undefined  => {
  const hero = heroes.find((hero) => {
    return hero.id === id;
  });

  /*
  if (!hero) {
    throw new Error(`No existe héroe con ID ${id}`);
  }
  */

  return hero;
}

console.log(getHeroById(6));

/* Tarea - Importación y Exportación */

export const getHeroesByOwner = (owner: Owner): Hero[] => {
  const ownerHeroes: Hero[] = heroes.filter(hero => {
    return hero.owner === owner;
  });

  return ownerHeroes;
}


