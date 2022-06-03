// initialize display elements
const daysDisplay = document.querySelector(".days");

// get the stored value in localStorage
let dayVisited = Number(window.localStorage.getItem("visited"));

if (dayVisited !== 0) {
    let daysSince = number(Date.now()) - number(dayVisited);
} else {
    localStorage.setItem("visited", Date.now());
}

daysDisplay.textContent = daysSince;