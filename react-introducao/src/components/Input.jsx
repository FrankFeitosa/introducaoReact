// # Utilizando UseState
// import { useState } from "react";

// const Input = () => {
//     const [nome, setNome] = useState('');

//     const handleChange = (e) => {
//         setNome(e.target.value)
//     }
//     return ( 
//         <div>
//             <input type="text" value={nome} onChange={handleChange} placeholder="Digite seu Nome"/>
//             <button onClick={(e) => {setNome(e.target.value)}}>Mostar Nome</button>
//             <p>Renderizou: {nome}</p>
//         </div>
//      );
// }
 
// export default Input;

// # Utilizzando UseRef
import { useRef } from "react";
const Input = () => {
    const nome = useRef("")
    return ( 
        <div>
            <input
             type="text" 
            //  onChange={(e) => nome.current = e.target.value}
             ref={nome} 
             placeholder="Digite seu nome" />
            {/* <button onClick={() => console.log(nome.current)}>Mostrar Nome</button> */}
            <button onClick={() => console.log(nome.current.value)}>Mostrar Nome</button>
        </div>
     );
}
 
export default Input;