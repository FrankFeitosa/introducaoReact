import React, {useState} from "react";
const Contador = () => {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <button onClick={() => setContador(contador + 1)}>Conte Aqui {contador}</button>
        </div>
      );
}
 
export default Contador;
