import { useState } from "react";
function Contador() {
  const [contador, setContador] = useState(0);

  function increment() {
    console.log("movida dev2");

    setContador((contadorPrevious) => contadorPrevious + 1);
    console.log("valor actual de contador", contador);
    setContador((contadorPrevious) => contadorPrevious + 1);

    setContador((contadorPrevious) => contadorPrevious + 1);
  }

  function decrement() {
    setContador((contadorPrevious) => contadorPrevious - 1);
  }

  function reset() {
    setContador(0);
  }

  return (
    <div>
      <h1>Contador {contador}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
}

export default Contador;
