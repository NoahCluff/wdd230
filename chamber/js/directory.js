const requestURL = 'json/data.json';
const cards = document.querySelector('.cards');
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject['directory'];
    directory.forEach(displayDirectory);

  });

gridbutton.addEventListener("click", () => {
    display.id = "directory-grid";
    cards.innerHTML = "";
    fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject['directory'];
    directory.forEach(displayDirectory);

  });
});

listbutton.addEventListener("click", () => {
    display.id = "directory-list";
    cards.innerHTML = "";
    fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject['directory'];
    directory.forEach(displayDirectory);

  });
});

 function displayDirectory(directory) {
      // Create elements to add to the document
  let card = document.createElement('section');
  let img = document.createElement('img');
  let bizname = document.createElement('p');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let site = document.createElement('p');

  bizname.textContent = `${directory.business}`;
  address.textContent = `${directory.address}`;
  phone.textContent = `${directory.phone}`;
  site.textContent = `${directory.website}`

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  img.setAttribute('src', directory.image);
  img.setAttribute('alt', `Picture of the ${directory.business} logo.`);

  if (display.id == "directory-grid") {
    card.appendChild(img);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(site);
  } else {
    card.appendChild(bizname);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(site);
  };


  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('article.cards').appendChild(card);
 };
 
 

