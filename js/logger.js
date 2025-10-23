const LOG_URL =
  "https://script.google.com/macros/s/AKfycbxzodGRJviTK88EpZYoNS3CsOzMFvo27tGOvmTErG_OgxqmsxuRsa-MwnbI7NYbYt-g6g/exec";

// Send Player Action to Google Sheet
function logAction(action, result = "") {
  const pid = localStorage.getItem("participant_id") || "anon_" + Date.now();

  // Read actual player object
  const player = JSON.parse(localStorage.getItem("player")) || {
    level: 1,
    power: 0,
    cards: [],
    onePulls: 0,
    tenPulls: 0,
    currency: 0,
  };

  const addCurrencyUsed = localStorage.getItem("addCurrencyCount") || 0;

  // Build readable collection summary
  const collectionSummary = {};
  player.cards.forEach((c) => {
    collectionSummary[c.name] = (collectionSummary[c.name] || 0) + 1;
  });

  const payload = {
    playerId: pid,
    timestamp: new Date().toISOString(),
    action: action,
    result:
      typeof result === "object" ? JSON.stringify(result) : String(result),
    currentLevel: player.level || 1,
    battlePower: player.power || 0,
    collection: JSON.stringify(collectionSummary),
    onePulls: player.onePulls || 0,
    tenPulls: player.tenPulls || 0,
    addCurrencyUsed: addCurrencyUsed,
    currencyLeft: player.currency || 0,
  };

  fetch(LOG_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch((err) => console.error("Logging failed:", err));
}
