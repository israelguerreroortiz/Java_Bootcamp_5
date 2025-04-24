import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokeDetail() {
  const { name } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setDetails(data);
    };

    fetchDetails();
  }, [name]);

  if (!details.sprites) {
    return <></>;
  }
  /*      <article className="pokemon-card" onClick={() => navigate(`/pokemon/${name}`)}>
        <div className="pokemon-img-container">
          <p className="pokemon-id">ID / {details.id}</p>
          <img src={details.sprites.front_default} alt={name} />
        </div>
        <div className="pokemon-info">
          <h2 className="pokemon-name">{name}</h2>
          <div className="pokemon-types">
            {details.types.map((type, index) => (
              <p className="type" key={index}>{type.type.name}</p>
            ))}
          </div>
          <div className="pokemon-evolution">
            <p>Evoluciona de:</p>
            <p>{evo.name}</p>
          </div>
        </div>
      </article> */
  return (
    <article className="pokemon-detail">
      <div className="pokemon-img-container">
        <p className="pokemon-id">ID / {details.id}</p>
        <img src={details.sprites.front_default} alt={name} />
      </div>
      <div className="pokemon-info">
        <h2 className="pokemon-name">{name}</h2>
        <div className="pokemon-types">
          {details.types.map((type, index) => (
            <p className="type" key={index}>
              {type.type.name}
            </p>
          ))}
        </div>
      </div>
      <p>Altura: {details.height}</p>
      <p>Peso: {details.weight}</p>
    </article>
  );
}

export default PokeDetail;
