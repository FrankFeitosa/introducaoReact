import { useState, useEffect } from "react";


export const UtilizandoEffect = () => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    function boasVindas() {
        alert("Boas Vindas")
    };

    useEffect(() => {
        console.log('useEffect foi chamado');
    })

    useEffect(() => {
        boasVindas();
        console.log('useEffect foi chamado uma vez');
    }, [])

    useEffect(() => {
        console.log(`useEffect foi chamado uma vez`);
    }, [count])

    return (
        <>
            <p>Contador 1: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar Contador 1</button>
            <p>Contador 2: {count2}</p>
            <button onClick={() => setCount2(count2 + 1)}>Incrementar Contador 2</button>
        </>
    );

}
