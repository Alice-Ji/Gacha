// --- Initialize player data if not set ---
if (!localStorage.getItem("player")) {
  localStorage.setItem(
    "player",
    JSON.stringify({
      currency: 100,
      power: 0,
      level: 1,
      cards: [],
      onePulls: 0,
      tenPulls: 0,
    })
  );
}

// Track session start time if not already set
if (!localStorage.getItem("sessionStart")) {
  localStorage.setItem("sessionStart", new Date().toISOString());
}

// Track AddCurrency usage
if (!localStorage.getItem("addCurrencyCount")) {
  localStorage.setItem("addCurrencyCount", 0);
}

// Fetch IP once per session
if (!localStorage.getItem("playerIP")) {
  fetch("https://api.ipify.org?format=json")
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("playerIP", data.ip);
    });
}

let player = JSON.parse(localStorage.getItem("player"));

// --- Update UI and stats ---
function updateIndexStats() {
  player.power = player.cards.reduce((sum, c) => sum + c.power, 0);
  document.getElementById("currency").textContent = player.currency;
  document.getElementById("power").textContent = player.power;
  document.getElementById("level").textContent = player.level;
  localStorage.setItem("player", JSON.stringify(player));

  // Log update
  logAction(
    "update_stats",
    JSON.stringify({
      currency: player.currency,
      power: player.power,
      level: player.level,
    })
  );
}
updateIndexStats();

// --- Send session data to Google Sheets ---
function sendSessionData() {
  let sessionStart = localStorage.getItem("sessionStart");
  let sessionEnd = new Date().toISOString();
  let addCurrencyCount = localStorage.getItem("addCurrencyCount") || 0;
  let playerIP = localStorage.getItem("playerIP") || "unknown";
  let participantId = localStorage.getItem("participant_id") || playerIP;

  let counts = {};
  player.cards.forEach((c) => {
    counts[c.name] = (counts[c.name] || 0) + 1;
  });
  let collectionStr = JSON.stringify(counts);

  let payload = {
    playerId: participantId,
    startTime: sessionStart,
    endTime: sessionEnd,
    battlePower: player.power || 0,
    maxLevel: player.level || 0,
    collection: collectionStr,
    onePulls: player.onePulls || 0,
    tenPulls: player.tenPulls || 0,
    addCurrencyUsed: addCurrencyCount,
    currencyLeft: player.currency || 0,
  };

  return fetch(
    "https://script.google.com/macros/s/AKfycbxrKKSXl3-A37HwQaSiP45T740PgLh5YEM03mpRDCZBloKCztcAnai0o38u8Qe4Hb8qMA/exec",
    {
      method: "POST",
      body: JSON.stringify(payload),
    }
  )
    .then((res) => res.text())
    .then((txt) => console.log("Session logged:", txt))
    .catch((err) => console.error("Error logging session:", err));
}

// --- Reset button ---
document.getElementById("resetBtn").addEventListener("click", () => {
  const RESET_PASSWORD = "alchemy123"; // same password from earlier
  const input = prompt("Enter password to reset game:");

  if (input === RESET_PASSWORD) {
    logAction("reset_game", "Game reset by admin");

    sendSessionData().then(() => {
      localStorage.clear();
      location.reload();
    });
  } else if (input !== null) {
    alert("Incorrect password. Reset canceled.");
  }
});
