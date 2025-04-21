import {useState} from 'react'

function Hijo({props}) {
    const [incrementar, decrementar, reiniciar] = props;
    console.log(incrementar, decrementar, reiniciar);
    return (
        <>
            <div className="boton-container">
                <button onClick={incrementar}>Incrementar</button>
                <button onClick={decrementar}>Decrementar</button>
                <button onClick={reiniciar}>Reiniciar</button>
            </div>
        </>
    )
}

export default Hijo