import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Pokecard({ name, url }) {
  const [details, setDetails] = useState({});
  const [evo, setEvo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setDetails(data);
      const speciesUrl = data.species.url;
      const speciesRes = await fetch(speciesUrl);
      const speciesData = await speciesRes.json();
      setEvo(speciesData.evolves_from_species);
    };

    fetchData();
  }, []);

  if (!details || !details.sprites) {
    return <></>;
  }

  if (evo)
    return (
      <article className="pokemon-card" onClick={() => navigate(`/pokemon/${name}`)}>
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
      </article>
    );
  else
    return (
      <article className="pokemon-card" onClick={() => navigate(`/pokemon/${name}`)}>
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
        </div>
      </article>
    );
}

export default Pokecard;
