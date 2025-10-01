const firstName = 'Cristian';
const lastName = 'Cajiao';

const favoriteGames = ['Angry Birds', 'Grindstone', 'Wildfrost'];
const isActive = true;

const address = {
  zipCode: 'AB-123',
  country: 'Chile'
};

export const MyAwesomeApp = () => {
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(',')}</p>
      <p>{2 + 2}</p>

      <h1>{isActive ? 'Activo' : 'No activo'}</h1>

      <p>{JSON.stringify(address)}</p>
    </>
  );
}