import { useState } from "react";
import { List } from "./component/list";
import { Guide } from "./component/guide";
import { Score } from "./component/score";
import { Level } from "./component/gameLevel.jsx";

function App() {
  const [gamePlay, setGamePlay] = useState(false);
  const [randomList, setRandomList] = useState([]);
  const [score, setScore] = useState(0);
  const totalScore = randomList.length;
  console.log(randomList); // craft
  const mainComponent = (
    <main>
      <header>
        <Guide /> <Score currentScore={score} totalScore={totalScore} />
      </header>
      <section>
        <List randomList={randomList} setScore={setScore} />
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
