let wordsToRedact; // Declare wordsToRedact outside the event handler

document.getElementById("redactButton").addEventListener("click", function() {
  const originalText = document.getElementById("originalText").value;
  wordsToRedact = document.getElementById("wordsToRedact").value.split(' ');
  const redactedText = redactContent(originalText, wordsToRedact);
  const stats = getStatistics(originalText, redactedText);
  document.getElementById("redactedText").textContent = redactedText;
  document.getElementById("stats").textContent = stats;
});

function redactContent(originalText, wordsToRedact) {
  wordsToRedact.forEach(word => {
    const redaction = '*'.repeat(word.length);
    originalText = originalText.replace(new RegExp(word, 'g'), redaction);
  });
  return originalText;
}

function getStatistics(originalText, redactedText) {
  const wordsScanned = originalText.split(' ').length;
  const wordsRedacted = wordsToRedact.reduce((count, word) => count + (originalText.includes(word) ? 1 : 0), 0);
  const charactersRedacted = redactedText.length;
  const timeTaken = 0; // Calculate the time taken (in seconds) if needed.

  return `Words scanned: ${wordsScanned}, Words redacted: ${wordsRedacted}, Characters redacted: ${charactersRedacted}, Time taken: ${timeTaken} seconds`;
}
