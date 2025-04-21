import { useEffect} from 'react'

function Carta() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const result = await response.json();
            console.log(result);
        };
        fetchData();
    }, []);

    return (
        <>
            <p>Cuando se renderiza la consola se muestra por consola un fetch de datos</p>
        </>
    );
}

export default Carta