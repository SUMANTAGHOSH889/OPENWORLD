document.getElementById("search").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    performSearch();
  }
});

document.getElementById("search-icon").addEventListener("click", performSearch);

function performSearch() {
  const query = document.getElementById("search").value;
  if (query.startsWith("http")) {
    window.location.href = query;
  } else {
    window.location.href = "https://www.googles.com/search?q=" + encodeURIComponent(query);
  }
}

// Adult content keyword filter list
const blockedKeywords = [
  "porn", "sex", "xnxx", "xvideos", "redtube", "brazzers", "youjizz", 
  "hentai", "xxx", "hotgirl", "18+", "nude", "escort", "playboy"
];

// Keyboard Enter press
document.getElementById("search").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    performSearch();
  }
});

// Search icon click
document.getElementById("search-icon").addEventListener("click", performSearch);

// Check if blocked keyword exists
function isBlocked(query) {
  const q = query.toLowerCase();
  return blockedKeywords.some(word => q.includes(word));
}

// Perform search or redirect
function performSearch() {
  const query = document.getElementById("search").value;

  if (isBlocked(query)) {
    alert("Blocked: Inappropriate or adult site!");
    return;
  }

  if (query.startsWith("http")) {
    window.location.href = query;
  } else {
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
  }
}

// Shortcut tile click handler
function goTo(url) {
  if (isBlocked(url)) {
    alert("Blocked: Inappropriate or adult site!");
    return;
  }

  window.location.href = url;
}
document.getElementById("menu-icon").addEventListener("click", function() {
  const popup = document.getElementById("popup");
  popup.style.display = (popup.style.display === "block") ? "none" : "block";
});


function openInfo() {
  alert("Developer name - Unknown\nVersion - 0.0.0.1\nDefault web service - Google\nThis is a child-safe web browser.");
}