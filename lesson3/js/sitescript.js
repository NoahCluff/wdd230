let today = new Date(document.lastModified);
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

date = mm + "/" + dd + "/" + yyyy;
document.getElementById("dateandtime").innerHTML = "Last Updated: " + date + " " + time;