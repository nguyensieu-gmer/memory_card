import { useState, useEffect } from "react";
import { Card } from "./card.jsx";

const url = "https://pokeapi.co/api/v2/pokemon/";

export function List({ randomList }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const pokemonList = await Promise.all(
        randomList.map(async (item) => {
          const response = await fetch(url + item);
          const pokemonJson = await response.json();
          return pokemonJson;
        }),
      );
      if (!ignore) {
        setList(pokemonList);
      }
    }
    fetchData();
    return () => (ignore = true);
  }, [randomList]);
  console.log(list); //caft
  return (
    <div className="grid_container">
      {list.map((item) => {
        const dreamWork = item.sprites.other.dream_world.front_default;
        const artWork = item.sprites.other["official-artwork"].front_default;
        return (
          <Card key={item.id} src={artWork ?? dreamWork} name={item.name} />
        );
      })}
    </div>
  );
}
