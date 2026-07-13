import { useState } from "react";
import { List } from "./component/list";
import { Guide } from "./component/guide";
import { Score } from "./component/score";
import radomPokemon from "./component/randomListOfPokemon.js";
import { Level } from "./component/gameLevel.jsx";

function App() {
  const [level, setLevel] = useState(5);
  const [gamePlay, setGamePlay] = useState(false);
  const randomList = radomPokemon(level);
  console.log(randomList); // craft
  const mainComponent = (
    <main>
      <header>
        <Guide /> <Score />
      </header>
      <section>
        <List randomList={randomList} />
      </section>
    </main>
  );
  return gamePlay ? (
    mainComponent
  ) : (
    <Level setLevel={setLevel} setGamePlay={setGamePlay} />
  );
}

export default App;
