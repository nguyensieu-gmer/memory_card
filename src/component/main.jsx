import { useState } from "react";
import { List } from "./list.jsx";
import { Guide } from "./guide.jsx";
import { Score } from "./score.jsx";
import { Level } from "./gameLevel.jsx";
import { Result } from "./result.jsx";
import { Loading } from "./loading.jsx";

export function Main({ setKey, highestScore, setHighestScore }) {
  const [loading, setLoading] = useState(true);
  const [gamePlay, setGamePlay] = useState(false);
  const [randomList, setRandomList] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const totalScore = randomList.length;

  if (score > highestScore) {
    setHighestScore(score);
  }

  const mainComponent = (
    <>
      {loading && <Loading />}
      <main>
        <header>
          <Guide />
          <Score
            currentScore={score}
            totalScore={totalScore}
            highestScore={highestScore}
          />
          {endGame && <Result setKey={setKey} result={score === totalScore} />}
        </header>
        <section>
          <List
            cardActions={{ clickedCards, setClickedCards, setEndGame }}
            randomList={randomList}
            setScore={setScore}
            score={score}
            setLoading={setLoading}
          />
        </section>
      </main>
    </>
  );
  return gamePlay ? (
    mainComponent
  ) : (
    <Level setGamePlay={setGamePlay} setRandomList={setRandomList} />
  );
}
