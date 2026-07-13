export function Card({ src, name, id, setScore }) {
  function handleClick() {
    setScore((prev) => prev + 1);
  }
  return (
    <button onClick={handleClick} id={id} className="item">
      <div className="img_container">
        <img src={src} alt={name + " " + "pokemon"} />
      </div>
      <h1 className="pokemon_name">{name}</h1>
    </button>
  );
}
