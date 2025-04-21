/**
 * 
 * 
 */

import Hijo from './Hijo';
import {useState} from 'react'

function Padre() {
    const [count, setCount] = useState(0);
    const incrementar = () => setCount(count + 1);
    const decrementar = () => setCount(count - 1);
    const reiniciar = () => setCount(0);

    return (
        <>
            <p className='counter'>{count}</p>
            <Hijo props={[incrementar, decrementar, reiniciar]}/>
        </>
    )
}

export default Padre