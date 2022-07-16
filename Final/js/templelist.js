const requestURL = 'json/templedata.json';
const cards = document.querySelector('.cards');
const display = document.querySelector("article");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);

  });

 function displayTemples(temples) {
      // Create elements to add to the document
  let card = document.createElement('section');
  let img = document.createElement('img');
  let name = document.createElement('h3');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let message = document.createElement('p');
  let services = document.createElement('p');
  let history = document.createElement('p');
  let osch = document.createElement('p');
  let ssch = document.createElement('p');
  let csch = document.createElement('p');

  name.textContent = `${temples.name}`;
  address.textContent = `${temples.address}`;
  phone.textContent = `${temples.phone}`;
  message.textContent = `Message/email link (sign-in required): ${temples.message}`;
  services.textContent = `Services: ${temples.services}`;
  history.textContent = `${temples.history}`;
  osch.textContent = `Ordinance schedule: ${temples.oschedule}`;
  ssch.textContent = `Session schedule: ${temples.sschedule}`;
  csch.textContent = `Closed: ${temples.cschedule}`;
  

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  img.setAttribute('src', temples.img);
  img.setAttribute('alt', `Picture of the ${temples.name} temple.`);

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(message);
  card.appendChild(services);
  card.appendChild(osch);
  card.appendChild(ssch);
  card.appendChild(csch);
  card.appendChild(history);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('article.cards').appendChild(card);
 };
 
 

