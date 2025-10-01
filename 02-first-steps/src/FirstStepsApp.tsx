import ItemCounter from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>

      <ItemCounter name="Nintendo Switch 2" quantity={15}/>
      <ItemCounter name="Pro Controller" quantity={20}/>
      <ItemCounter name="Super Smash" quantity={50}/>
     
      { /*
    <h1>Hola, mundo!!!</h1>
      <p>Esto es un párrafo</p>

      <button>
        Hazme click
      </button>

      <div>
        <h2>Hola dentro de un div</h2>
      </div> */}

    </>
  );
}