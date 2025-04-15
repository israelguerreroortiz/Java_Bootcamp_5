import {useState} from 'react';
import "../styles/Semaforo.css";

function Semaforo() {
    const [color, setColor] = useState('red');

    const changeColor = () => {
      if (color === 'red') {
        document.querySelector('.yellow').style.filter = 'brightness(0.1)';
        document.querySelector('.red').style.filter = 'none';
        setColor('green');
      } else if (color === 'green') {
        document.querySelector('.red').style.filter = 'brightness(0.1)';
        document.querySelector('.green').style.filter = 'none';
        setColor('yellow');
      } else {
        document.querySelector('.green').style.filter = 'brightness(0.1)';
        document.querySelector('.yellow').style.filter = 'none';
        setColor('red');
      }
    };
    
  return (
    <>
      <div className="traffic-light">
        <div className="light red"></div>
        <div className="light yellow"></div>
        <div className="light green"></div>
      </div>
      <button className="btn" onClick={changeColor}>
        Siguiente
      </button>
    </>
  );
}

export default Semaforo;
