import type { CSSProperties } from "react";

const firstName = 'Cristian';
const lastName = 'Cajiao';

const favoriteGames = ['Angry Birds', 'Grindstone', 'Wildfrost'];
const isActive = true;

const address = {
  zipCode: 'AB-123',
  country: 'Chile'
};

const myStyles: CSSProperties = {
  backgroundColor: '#fafafa',
  borderRadius: isActive ? 10 : 20,
  borderTop: '1px solid black',
  marginTop: 30,
  padding: 10
};

export const MyAwesomeApp = () => {

  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(',')}</p>
      <p>{2 + 2}</p>

      <h1>{isActive ? 'Activo' : 'No activo'}</h1>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
}