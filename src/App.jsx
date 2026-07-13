import { useState } from "react";
import { Main } from "./component/main";

function App() {
  const [key, setKey] = useState(0);
  return <Main key={key} setKey={setKey} />;
}

export default App;
