export function Card({ src, name }) {
  return (
    <div className="item">
      <div className="img_container">
        <img src={src} alt={name + " " + "pokemon"} />
      </div>
      <h1 className="pokemon_name">{name}</h1>
    </div>
  );
}
