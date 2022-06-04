// initialize display elements
const daysDisplay = document.querySelector(".days");

// get the stored value in localStorage
let dayVisited = Number(window.localStorage.getItem("visited"));

if (dayVisited == 0) {
    localStorage.setItem("visited", Date.now());
}
let daysSince = Date.now() - dayVisited;

daysDisplay.textContent = Math.round(daysSince / (1000 * 3600 * 24));