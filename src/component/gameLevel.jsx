export function Level({ setLevel, setGamePlay }) {
  function handleClick(e) {
    const value = e.target.value;
    setLevel(value);
    setGamePlay(true);
  }
  return (
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
  );
}
