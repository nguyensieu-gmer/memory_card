import { useState, useEffect } from "react";
import { Card } from "./card.jsx";

const url = "https://pokeapi.co/api/v2/pokemon/";

export function List({
  cardActions,
  randomList,
  setScore,
  score,
  setLoading,
  loading,
}) {
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
        setLoading(false);
        setList(
          pokemonList.map((item) => {
            return {
              id: item.id,
              name: item.name,
              dreamWork: item.sprites.other.dream_world.front_default,
              artWork: item.sprites.other["official-artwork"].front_default,
            };
          }),
        );
      }
    }
    fetchData();
    return () => (ignore = true);
  }, [randomList, setLoading]);
  function shuffleList() {
    setList((prev) => {
      const newArr = [...prev];
      for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
      return newArr;
    });
  }
  return (
    !loading && (
      <div className="grid_container">
        {list.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              setScore={setScore}
              src={item.artWork ?? item.dreamWork}
              name={item.name}
              cardActions={cardActions}
              score={score}
              winNumber={randomList.length}
              shuffleList={shuffleList}
            />
          );
        })}
      </div>
    )
  );
}
