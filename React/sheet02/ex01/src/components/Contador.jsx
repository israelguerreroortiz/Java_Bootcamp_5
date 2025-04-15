import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);
  return (
    <div className="contador-container">
      <p className="contador">{count}</p>
      <button className="btn btn-plus" onClick={() => setCount(count + 1)}>Incrementar</button>
      <button className="btn btn-minus" onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}

export default Contador;
