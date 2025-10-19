// Select all checkboxes from all sections
const checklist = document.querySelectorAll('input[type="checkbox"]');
const resetBtn = document.getElementById("reset");

// Load saved staes on page load
checklist.forEach((item) => {
  const saved = localStorage.getItem(item.id);
  if (saved === "true") item.checked = true;

  // Save state whenever checkbox changes
  item.addEventListener("change", () => {
    localStorage.setItem(item.id, item.checked);
  });
});

// Reset button clears all saved progress
resetBtn.addEventListener("click", () => {
  checklist.forEach((item) => {
    item.checked = false;
    localStorage.removeItem(item.id);
  });
});