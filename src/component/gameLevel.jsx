import radomPokemon from "./randomListOfPokemon.js";
import "../style/level.css";

export function Level({ setRandomList, setGamePlay }) {
  function handleClick(e) {
    const value = e.target.value;
    setRandomList(radomPokemon(value));
    setGamePlay(true);
  }
  return (
    <div className="level">
      <h1>Please choose your level game</h1>
      <div className="level_buttons">
        <button value={5} onClick={handleClick}>
          Easy
        </button>
        <button value={10} onClick={handleClick}>
          Medium
        </button>
        <button value={20} onClick={handleClick}>
          Hard
        </button>
      </div>
    </div>
  );
}
