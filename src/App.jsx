import { useState } from "react";
import { Main } from "./component/main";

function App() {
  const [highestScore, setHighestScore] = useState(0);
  const [key, setKey] = useState(0);
  return (
    <Main
      key={key}
      setKey={setKey}
      highestScore={highestScore}
      setHighestScore={setHighestScore}
    />
  );
}

export default App;
