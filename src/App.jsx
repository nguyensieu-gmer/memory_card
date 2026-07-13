import { useState } from "react";
import { List } from "./component/list";
import { Guide } from "./component/guide";
import { Score } from "./component/score";
import { Level } from "./component/gameLevel.jsx";
import { Result } from "./component/result.jsx";

function App() {
  const [gamePlay, setGamePlay] = useState(false);
  const [randomList, setRandomList] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const totalScore = randomList.length;

  console.log(endGame);

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

export default App;
