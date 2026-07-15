import { useEffect, useRef } from "react";
import "../style/result.css";

export function Result({ setKey, result }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);
  function handleClick() {
    setKey((prev) => prev + 1);
  }
  return (
    <dialog ref={dialogRef}>
      <div className="result">
        {result ? (
          <h1>Congratulations, You win!</h1>
        ) : (
          <h1>Good luck next time!</h1>
        )}
        <button onClick={handleClick}>Cancel</button>
      </div>
    </dialog>
  );
}
