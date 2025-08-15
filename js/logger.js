// Replace this with your actual Google Apps Script web app URL
const LOG_URL =
  "https://script.google.com/macros/s/AKfycbxvFceXBHXo9-SS_tuaPT355GOdPpSw1-ey7lvu8YPKsBQREydleD4Ziri_g5OxNZIy5Q/exec";

// Function to send player actions to your Google Sheet
function logAction(action, details) {
  fetch(LOG_URL, {
    method: "POST",
    mode: "no-cors", // Prevents CORS errors; response won't be visible
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      participant_id: "anon_" + Date.now(),
      timestamp: new Date().toISOString(),
      action: action,
      details: details,
    }),
  }).catch((err) => {
    console.error("Logging failed:", err);
  });
}
