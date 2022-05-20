let today = new Date(document.lastModified);
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

date = mm + "/" + dd + "/" + yyyy;
document.getElementById("dateandtime").innerHTML = "Last Updated: " + date + " " + time;

document.getElementById("copyyear").innerHTML = yyyy;

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
document.getElementById("thedate").innerHTML = fulldateUK;

if (now.getDay() == 1 || now.getDay() == 2) {
	document.getElementById('meetandgreet').style.display = "flex";
} else {
	document.getElementById('meetandgreet').style.display = "none";
};