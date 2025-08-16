// Replace this with your actual Google Apps Script web app URL
const LOG_URL =
  "https://script.google.com/macros/s/AKfycbzSV2hBtrlB6VaPZ2hGno4UfzoxIBuS54zG6A1lvEhuxQOiDU2Rgw6sU0ivhO7MtmVHKA/exec";

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
