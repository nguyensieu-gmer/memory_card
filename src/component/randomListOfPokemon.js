export default function (amount) {
  const maxAmountOfPokemon = 1025;
  const res = [];
  const visited = new Set();
  while (res.length < amount) {
    const a = Math.floor(Math.random() * maxAmountOfPokemon) + 1;
    if (visited.has(a)) continue;
    visited.add(a);
    res.push(a);
  }
  return res;
}
