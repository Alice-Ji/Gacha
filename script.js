if (!localStorage.getItem("player")) {
  localStorage.setItem(
    "player",
    JSON.stringify({ currency: 100, power: 0, level: 1, cards: [] })
  );
}

let player = JSON.parse(localStorage.getItem("player"));

function updateIndexStats() {
  player.power = player.cards.reduce((sum, c) => sum + c.power, 0);
  document.getElementById("currency").textContent = player.currency;
  document.getElementById("power").textContent = player.power;
  document.getElementById("level").textContent = player.level;
  localStorage.setItem("player", JSON.stringify(player));
}

updateIndexStats();

document.getElementById("resetBtn").addEventListener("click", () => {
  if (confirm("Are you sure you want to restart the game?")) {
    localStorage.removeItem("player");
    location.reload();
  }
});
