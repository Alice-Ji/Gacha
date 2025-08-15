function pullCard() {
  const rand = Math.random();
  let cumulative = 0;
  for (let rarity in rarityOdds) {
    cumulative += rarityOdds[rarity];
    if (rand <= cumulative) {
      let pool = cards.filter((c) => c.rarity === rarity);
      let card = pool[Math.floor(Math.random() * pool.length)];
      return card; // just return — no DOM manipulation here
    }
  }
}

function showResult(text) {
  document.getElementById("results").textContent = text;
}
