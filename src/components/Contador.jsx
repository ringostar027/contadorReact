import { useState } from "react";
function Contador() {
  const [contador, setContador] = useState(0);

  function increment() {
    /*  setContador((contadorPrevious) => contadorPrevious + 1);
     */
    /*  setContador((contadorPrevious) => contadorPrevious + 1);
    setContador((contadorPrevious) => contadorPrevious + 1); */
    /*Setter es asíncrono, ya que se ejecute cuando a él le parece la forma más <eficiente*></eficiente*/
    /*Y hablando de eficiencia, react es tan eficiente,que no es necesario usar delegación de eventos*/
    /*El usa su propio mecanismo de "delegación de eventos interno"*/

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
