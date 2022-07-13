let today = new Date(document.lastModified);
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

date = mm + "/" + dd + "/" + yyyy;
document.getElementById("dateandtime").innerHTML = `Last Updated: ${mm}/${dd}/${yyyy} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
