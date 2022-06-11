const loaddate = document.querySelector("#loaddate");

const loaded = new Date(Date.now());

loaddate.value = String(String(loaded.getMonth() + 1).padStart(2, '0') + "/" + loaded.getDate()).padStart(2, '0') + "/" + loaded.getFullYear() + " " + loaded.getHours() + ":" + loaded.getMinutes() + ":" + loaded.getSeconds();

