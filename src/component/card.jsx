export function Card({
  cardActions,
  src,
  name,
  id,
  setScore,
  winNumber,
  score,
  shuffleList,
}) {
  function handleClick(e) {
    shuffleList();
    const id = e.currentTarget.id;
    if (cardActions.clickedCards.includes(id)) {
      cardActions.setEndGame(true);
      return;
    }
    cardActions.setClickedCards((prev) => [...prev, id]);
    setScore((prev) => prev + 1);
    if (score + 1 == winNumber) {
      cardActions.setEndGame(true);
    }
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
