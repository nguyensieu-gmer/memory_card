import { useState } from "react";
import { List } from "./list.jsx";
import { Guide } from "./guide.jsx";
import { Score } from "./score.jsx";
import { Level } from "./gameLevel.jsx";
import { Result } from "./result.jsx";

export function Main() {
  const [gamePlay, setGamePlay] = useState(false);
  const [randomList, setRandomList] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const totalScore = randomList.length;

  const mainComponent = (
    <main>
      <header>
        <Guide />
        <Score currentScore={score} totalScore={totalScore} />
        {endGame && <Result result={score === totalScore} />}
      </header>
      <section>
        <List
          cardActions={{ clickedCards, setClickedCards, setEndGame }}
          randomList={randomList}
          setScore={setScore}
          score={score}
        />
      </section>
    </main>
  );
  return gamePlay ? (
    mainComponent
  ) : (
    <Level setGamePlay={setGamePlay} setRandomList={setRandomList} />
  );
}
