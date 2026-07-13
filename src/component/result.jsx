import { useEffect, useRef } from "react";

export function Result({ result }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  });
  return (
    <dialog ref={dialogRef}>
      <div>
        {result ? (
          <h1>Congratulations, You win!</h1>
        ) : (
          <h1>Good luck next time!</h1>
        )}
        <button>Cancel</button>
      </div>
    </dialog>
  );
}
