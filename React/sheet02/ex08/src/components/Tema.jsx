import {useEffect, useState} from 'react';

function Tema() {
    const [tema, setTema] = useState('light');

    useEffect(() => {
        document.body.classList.toggle('theme-light', tema === 'light');
        document.body.classList.toggle('theme-dark', tema === 'dark');
    }, [tema])

    const cambiarTema = () => tema === 'light' ? setTema('dark') : setTema('light')
    return (
        <>
            <button onClick={cambiarTema}>Cambiar Tema</button>
        </>
    )
}

export default Tema