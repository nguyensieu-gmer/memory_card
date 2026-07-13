export function Score({ currentScore, highestScore, totalScore }) {
  return (
    <div className="score">
      <h1>{highestScore}</h1>
      <div className="current_flow">
        <h1>
          {currentScore} <span>/</span> {totalScore}
        </h1>
      </div>
    </div>
  );
}
