import { useEffect } from "react";
import { useState } from "react";

function Reloj() {
    const [horas, setHoras] = useState('00');
    const [minutos, setMinutos] = useState('00');
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setHoras(now.getHours().toString());
            setMinutos(now.getMinutes().toString());
        }, 1000);

        return () => clearInterval(interval);
    }, [])
    return (
        <div className="reloj">
            <p>{horas}:{minutos}</p>
        </div>
    )
}

export default Reloj